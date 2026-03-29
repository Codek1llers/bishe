/**
 * 导航仿真控制器
 * 控制车辆沿路径行驶、速度调节、暂停继续
 */

import * as THREE from 'three'
import { PathResult, VehicleState, RoadNode, RoadEdge, SimulationConfig } from '../data/types'
import type { RoadGeometryContext } from './roadGeometry'
import {
  buildEdgeCenterlinePoints,
  buildCumulativeLengths,
  positionAtArcLength,
} from './roadGeometry'

type EdgePathSample = {
  points: THREE.Vector3[]
  cumulative: number[]
  arcLength: number
}

export class NavigationSimulator {
  private pathResult: PathResult | null = null
  private nodeMap: Map<string, RoadNode>
  private config: SimulationConfig
  private networkEdges: RoadEdge[] = []
  private is3DMode = true
  private edgeSamples = new Map<string, EdgePathSample>()
  
  private vehicleState: VehicleState = {
    position: { x: 0, y: 0, z: 0 },
    rotation: 0,
    currentNodeIndex: 0,
    progress: 0,
    speed: 0,
    isPaused: true,
  }
  
  private animationId: number | null = null
  private lastTime: number = 0
  private readonly rotationLookAheadDistance = 18
  private onUpdate: ((state: VehicleState) => void) | null = null
  private onNodeChange: ((nodeIndex: number, node: RoadNode) => void) | null = null
  private onComplete: (() => void) | null = null
  
  constructor(
    nodeMap: Map<string, RoadNode>,
    config: SimulationConfig,
    networkEdges: RoadEdge[] = [],
    is3DMode = true
  ) {
    this.nodeMap = nodeMap
    this.config = config
    this.networkEdges = networkEdges
    this.is3DMode = is3DMode
  }

  /** 与 Scene3D 同步：路网边列表与 3D 模式变化时调用，会重建当前路径的采样 */
  setRoadGeometryContext(networkEdges: RoadEdge[], is3DMode: boolean) {
    this.networkEdges = networkEdges
    this.is3DMode = is3DMode
    if (this.pathResult) {
      this.cacheEdgeSamples()
    }
  }

  private geometryContext(): RoadGeometryContext {
    return {
      nodeMap: this.nodeMap,
      networkEdges: this.networkEdges,
      is3DMode: this.is3DMode,
    }
  }

  private cacheEdgeSamples() {
    this.edgeSamples.clear()
    if (!this.pathResult) return
    const ctx = this.geometryContext()
    for (const edge of this.pathResult.edges) {
      const fromNode = this.nodeMap.get(edge.from)
      const toNode = this.nodeMap.get(edge.to)
      if (!fromNode || !toNode) continue
      const points = buildEdgeCenterlinePoints(edge, fromNode, toNode, ctx)
      const cumulative = buildCumulativeLengths(points)
      const arcLength = cumulative[cumulative.length - 1]
      this.edgeSamples.set(edge.id, { points, cumulative, arcLength })
    }
  }
  
  /**
   * 设置路径
   */
  setPath(pathResult: PathResult) {
    this.pathResult = pathResult
    this.vehicleState = {
      position: { x: 0, y: 0, z: 0 },
      rotation: 0,
      currentNodeIndex: 0,
      progress: 0,
      speed: 0,
      isPaused: true,
    }
    
    // 设置起始位置
    if (pathResult.path.length > 0) {
      const startNode = this.nodeMap.get(pathResult.path[0])
      if (startNode) {
        this.vehicleState.position = { x: startNode.x, y: startNode.y, z: startNode.z }
        
        // 计算初始朝向 (在Three.js中，Y轴向上，Z轴对应数据的Y轴)
        // 使用atan2(deltaX, deltaZ)来计算绕Y轴的旋转角度
        if (pathResult.path.length > 1) {
          const nextNode = this.nodeMap.get(pathResult.path[1])
          if (nextNode) {
            // 计算方向：从当前节点指向下一节点
            // Three.js中绕Y轴旋转，角度 = atan2(deltaX, deltaZ)
            this.vehicleState.rotation = Math.atan2(
              nextNode.x - startNode.x,
              nextNode.y - startNode.y
            )
          }
        }
      }
    }

    this.cacheEdgeSamples()
    this.notifyUpdate()
  }
  
  /**
   * 开始/继续仿真
   */
  start() {
    if (!this.pathResult || this.pathResult.path.length < 2) return
    
    this.vehicleState.isPaused = false
    this.lastTime = performance.now()
    this.animate()
  }
  
  /**
   * 暂停仿真
   */
  pause() {
    this.vehicleState.isPaused = true
    if (this.animationId) {
      cancelAnimationFrame(this.animationId)
      this.animationId = null
    }
  }
  
  /**
   * 切换暂停状态
   */
  togglePause() {
    if (this.vehicleState.isPaused) {
      this.start()
    } else {
      this.pause()
    }
    return this.vehicleState.isPaused
  }
  
  /**
   * 增加速度倍率
   */
  speedUp() {
    this.config.speedMultiplier = Math.min(5, this.config.speedMultiplier + 0.5)
    return this.config.speedMultiplier
  }
  
  /**
   * 减少速度倍率
   */
  speedDown() {
    this.config.speedMultiplier = Math.max(0.25, this.config.speedMultiplier - 0.25)
    return this.config.speedMultiplier
  }
  
  /**
   * 跳转到下一个节点
   */
  nextNode() {
    if (!this.pathResult) return
    
    const maxIndex = this.pathResult.path.length - 1
    if (this.vehicleState.currentNodeIndex < maxIndex) {
      this.vehicleState.currentNodeIndex++
      this.vehicleState.progress = 0
      this.updatePositionAtNode()
      this.notifyNodeChange()
    }
  }
  
  /**
   * 跳转到上一个节点
   */
  prevNode() {
    if (!this.pathResult) return
    
    if (this.vehicleState.currentNodeIndex > 0) {
      this.vehicleState.currentNodeIndex--
      this.vehicleState.progress = 0
      this.updatePositionAtNode()
      this.notifyNodeChange()
    }
  }
  
  /**
   * 重置仿真
   */
  reset() {
    this.pause()
    if (this.pathResult) {
      this.setPath(this.pathResult)
    }
  }
  
  /**
   * 动画循环
   */
  private animate = () => {
    if (this.vehicleState.isPaused) return
    
    const currentTime = performance.now()
    const deltaTime = (currentTime - this.lastTime) / 1000 // 转换为秒
    this.lastTime = currentTime
    
    this.updateVehicle(deltaTime)
    
    this.animationId = requestAnimationFrame(this.animate)
  }
  
  /**
   * 更新车辆状态
   */
  private updateVehicle(deltaTime: number) {
    if (!this.pathResult || this.vehicleState.currentNodeIndex >= this.pathResult.path.length - 1) {
      this.onComplete?.()
      this.pause()
      return
    }
    
    const currentEdge = this.pathResult.edges[this.vehicleState.currentNodeIndex]
    if (!currentEdge) return
    
    // 计算实际速度 (考虑拥堵)
    const effectiveSpeed = currentEdge.speedLimit * (1 - currentEdge.congestion * 0.5)
    const scaledSpeed = effectiveSpeed * this.config.speedMultiplier * this.config.baseSpeed / 60
    this.vehicleState.speed = scaledSpeed
    
    // 更新进度
    const progressIncrement = (scaledSpeed * deltaTime) / currentEdge.length
    this.vehicleState.progress += progressIncrement
    
    // 检查是否到达下一个节点
    if (this.vehicleState.progress >= 1) {
      this.vehicleState.currentNodeIndex++
      this.vehicleState.progress = 0
      this.notifyNodeChange()
      
      if (this.vehicleState.currentNodeIndex >= this.pathResult.path.length - 1) {
        this.updatePositionAtNode()
        this.onComplete?.()
        this.pause()
        return
      }
    }
    
    // 插值计算当前位置
    this.interpolatePosition()
    this.notifyUpdate()
  }
  
  /**
   * 插值计算位置
   */
  private interpolatePosition() {
    if (!this.pathResult) return
    
    const currentNodeId = this.pathResult.path[this.vehicleState.currentNodeIndex]
    const nextNodeId = this.pathResult.path[this.vehicleState.currentNodeIndex + 1]
    
    const currentNode = this.nodeMap.get(currentNodeId)
    const nextNode = this.nodeMap.get(nextNodeId)
    
    if (!currentNode || !nextNode) return
    
    const t = this.vehicleState.progress
    const currentEdge = this.pathResult.edges[this.vehicleState.currentNodeIndex]
    const sample = currentEdge ? this.edgeSamples.get(currentEdge.id) : undefined

    if (sample && sample.points.length >= 2 && currentEdge) {
      const s = t * currentEdge.length
      const p = positionAtArcLength(sample.points, sample.cumulative, s)
      this.vehicleState.position = { x: p.x, y: p.z, z: p.y }
    } else {
      this.vehicleState.position = {
        x: currentNode.x + (nextNode.x - currentNode.x) * t,
        y: currentNode.y + (nextNode.y - currentNode.y) * t,
        z: currentNode.z + (nextNode.z - currentNode.z) * t,
      }
    }

    this.updateVehicleRotation()
  }
  
  /**
   * 更新到节点位置
   */
  private updatePositionAtNode() {
    if (!this.pathResult) return
    
    const nodeId = this.pathResult.path[this.vehicleState.currentNodeIndex]
    const node = this.nodeMap.get(nodeId)
    
    if (node) {
      this.vehicleState.position = { x: node.x, y: node.y, z: node.z }
      
      // 计算朝向 (Three.js中绕Y轴旋转)
      const nextIndex = Math.min(this.vehicleState.currentNodeIndex + 1, this.pathResult.path.length - 1)
      const nextNodeId = this.pathResult.path[nextIndex]
      const nextNode = this.nodeMap.get(nextNodeId)
      
      if (nextNode && nextNode.id !== node.id) {
        this.updateVehicleRotation()
      }
    }
    
    this.notifyUpdate()
  }
  
  /**
   * 设置更新回调
   */
  setOnUpdate(callback: (state: VehicleState) => void) {
    this.onUpdate = callback
  }
  
  /**
   * 设置节点变化回调
   */
  setOnNodeChange(callback: (nodeIndex: number, node: RoadNode) => void) {
    this.onNodeChange = callback
  }
  
  /**
   * 设置完成回调
   */
  setOnComplete(callback: () => void) {
    this.onComplete = callback
  }
  
  private notifyUpdate() {
    this.onUpdate?.(this.vehicleState)
  }
  
  private notifyNodeChange() {
    if (!this.pathResult) return
    const nodeId = this.pathResult.path[this.vehicleState.currentNodeIndex]
    const node = this.nodeMap.get(nodeId)
    if (node) {
      this.onNodeChange?.(this.vehicleState.currentNodeIndex, node)
    }
  }

  private updateVehicleRotation() {
    if (!this.pathResult) return

    const lookAheadPoint = this.getLookAheadPoint(
      this.vehicleState.currentNodeIndex,
      this.vehicleState.progress,
      this.rotationLookAheadDistance
    )

    if (!lookAheadPoint) return

    const deltaX = lookAheadPoint.x - this.vehicleState.position.x
    const deltaY = lookAheadPoint.y - this.vehicleState.position.y

    if (Math.abs(deltaX) < 0.001 && Math.abs(deltaY) < 0.001) return

    this.vehicleState.rotation = Math.atan2(deltaX, deltaY)
  }

  private getLookAheadPoint(nodeIndex: number, progress: number, lookAheadDistance: number) {
    if (!this.pathResult) return null

    let remainingDistance = lookAheadDistance
    let currentIndex = nodeIndex
    let currentProgress = progress

    while (currentIndex < this.pathResult.edges.length) {
      const edge = this.pathResult.edges[currentIndex]
      const fromNode = this.nodeMap.get(this.pathResult.path[currentIndex])
      const toNode = this.nodeMap.get(this.pathResult.path[currentIndex + 1])

      if (!edge || !fromNode || !toNode) return null

      const edgeRemaining = edge.length * (1 - currentProgress)
      if (remainingDistance <= edgeRemaining) {
        const segmentProgress = currentProgress + remainingDistance / edge.length
        const sample = this.edgeSamples.get(edge.id)
        if (sample && sample.points.length >= 2) {
          const s = segmentProgress * edge.length
          const p = positionAtArcLength(sample.points, sample.cumulative, s)
          return { x: p.x, y: p.z }
        }
        return {
          x: fromNode.x + (toNode.x - fromNode.x) * segmentProgress,
          y: fromNode.y + (toNode.y - fromNode.y) * segmentProgress,
        }
      }

      remainingDistance -= edgeRemaining
      currentIndex++
      currentProgress = 0
    }

    const lastNode = this.nodeMap.get(this.pathResult.path[this.pathResult.path.length - 1])
    if (!lastNode) return null

    return { x: lastNode.x, y: lastNode.y }
  }
  
  /**
   * 获取当前状态
   */
  getState(): VehicleState {
    return { ...this.vehicleState }
  }
  
  /**
   * 获取配置
   */
  getConfig(): SimulationConfig {
    return { ...this.config }
  }
  
  /**
   * 更新配置
   */
  updateConfig(newConfig: Partial<SimulationConfig>) {
    this.config = { ...this.config, ...newConfig }
    if (newConfig.weights) {
      this.config.weights = { ...this.config.weights, ...newConfig.weights }
    }
  }
  
  /**
   * 销毁
   */
  dispose() {
    this.pause()
    this.onUpdate = null
    this.onNodeChange = null
    this.onComplete = null
    this.edgeSamples.clear()
  }
}
