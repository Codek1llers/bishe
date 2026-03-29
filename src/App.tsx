/**
 * 3D城市道路导航仿真系统 - 主应用
 * 
 * 功能:
 * 1. 三维道路网络可视化（含立交桥、高架桥、匝道）
 * 2. Dijkstra/A* 路径规划算法
 * 3. 车辆导航仿真动画
 * 4. 2D/3D视图切换
 * 5. 立交桥导航提示
 * 6. 键盘控制
 * 7. 道路拥堵设置
 */

import { useEffect, useRef, useState, useCallback } from 'react'
import { Scene3D } from './components/Scene3D'
import { NavigationSimulator } from './lib/simulator'
import { dijkstra } from './lib/pathfinding'
import { generateNavigationHints } from './lib/navigationHints'
import { roadNetwork as initialRoadNetwork } from './data/roadNetwork'
import { buildTInterchange } from './lib/TInterchange'
import { PathResult, VehicleState, RoadNode, RoadEdge, NavigationHint, SimulationConfig, RoadNetwork } from './data/types'

import ControlPanel from './components/ControlPanel'
import NavigationPanel from './components/NavigationPanel'
import PathInfoPanel from './components/PathInfoPanel'
import CongestionPanel from './components/CongestionPanel'

// 默认配置
const defaultConfig: SimulationConfig = {
  baseSpeed: 8,
  speedMultiplier: 1,
  weights: {
    length: 1,
    time: 0.8,
    congestion: 0.5,
  },
}

function App() {
  // Refs
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<Scene3D | null>(null)
  const simulatorRef = useRef<NavigationSimulator | null>(null)
  
  // 节点映射
  const nodeMapRef = useRef<Map<string, RoadNode>>(new Map())
  
  // 道路网络状态（可修改拥堵值）
  const [roadNetwork, setRoadNetwork] = useState<RoadNetwork>(() => ({
    nodes: [...initialRoadNetwork.nodes],
    edges: initialRoadNetwork.edges.map(e => ({ ...e })),
    buildings: initialRoadNetwork.buildings ? [...initialRoadNetwork.buildings] : []
  }))
  
  // 状态
  const [startNode, setStartNode] = useState<string | null>(null)
  const [endNode, setEndNode] = useState<string | null>(null)
  const [pathResult, setPathResult] = useState<PathResult | null>(null)
  const [navHints, setNavHints] = useState<NavigationHint[]>([])
  
  const [isPlaying, setIsPlaying] = useState(false)
  const [speedMultiplier, setSpeedMultiplier] = useState(1)
  const [is3DMode, setIs3DMode] = useState(true)
  const [isFollowMode, setIsFollowMode] = useState(false)
  const [config, setConfig] = useState<SimulationConfig>(defaultConfig)
  
  const [currentNodeIndex, setCurrentNodeIndex] = useState(0)
  const [currentNode, setCurrentNode] = useState<RoadNode | null>(null)
  const [currentHintIndex, setCurrentHintIndex] = useState(0)
  const [remainingDistance, setRemainingDistance] = useState(0)
  const [remainingTime, setRemainingTime] = useState(0)
  
  const [selectingFor, setSelectingFor] = useState<'start' | 'end' | null>(null)
  
  // 道路拥堵设置状态
  const [isSelectingRoad, setIsSelectingRoad] = useState(false)
  const [selectedEdge, setSelectedEdge] = useState<RoadEdge | null>(null)
  
  // 使用 ref 存储最新状态，避免闭包问题
  const isSelectingRoadRef = useRef(false)
  const selectingForRef = useRef<'start' | 'end' | null>(null)
  const startNodeRef = useRef<string | null>(null)
  const endNodeRef = useRef<string | null>(null)
  const roadNetworkRef = useRef(roadNetwork)
  
  // 同步 ref 和 state
  useEffect(() => {
    isSelectingRoadRef.current = isSelectingRoad
  }, [isSelectingRoad])
  
  useEffect(() => {
    selectingForRef.current = selectingFor
  }, [selectingFor])
  
  useEffect(() => {
    startNodeRef.current = startNode
  }, [startNode])
  
  useEffect(() => {
    endNodeRef.current = endNode
  }, [endNode])
  
  useEffect(() => {
    roadNetworkRef.current = roadNetwork
  }, [roadNetwork])

  // 初始化场景
  useEffect(() => {
    if (!containerRef.current) return
    
    // 创建节点映射
    nodeMapRef.current = new Map(roadNetwork.nodes.map(n => [n.id, n]))
    
    // 创建3D场景
    const scene = new Scene3D(containerRef.current)
    scene.loadRoadNetwork(roadNetwork)
    const { group: interGroup, edgeMeshes: interMeshes } = buildTInterchange()
    scene.addTInterchangeGroup(interGroup, interMeshes, roadNetwork.edges)
    sceneRef.current = scene
    
    // 创建仿真器
    const simulator = new NavigationSimulator(
      nodeMapRef.current,
      config,
      roadNetwork.edges,
      is3DMode
    )
    simulatorRef.current = simulator
    
    // 设置仿真回调
    simulator.setOnUpdate((state: VehicleState) => {
      scene.updateVehiclePosition(state)
      updateRemainingInfo(state)
    })
    
    simulator.setOnNodeChange((nodeIndex: number, node: RoadNode) => {
      setCurrentNodeIndex(nodeIndex)
      setCurrentNode(node)
      updateCurrentHint(nodeIndex)
    })
    
    simulator.setOnComplete(() => {
      setIsPlaying(false)
    })
    
    // 点击事件
    const clickHandler = (event: MouseEvent) => handleSceneClick(event)
    containerRef.current.addEventListener('click', clickHandler)
    
    return () => {
      scene.dispose()
      simulator.dispose()
      containerRef.current?.removeEventListener('click', clickHandler)
    }
  }, [])

  useEffect(() => {
    simulatorRef.current?.setRoadGeometryContext(roadNetwork.edges, is3DMode)
  }, [roadNetwork, is3DMode])

  // 更新剩余信息
  const updateRemainingInfo = useCallback((state: VehicleState) => {
    if (!pathResult) return
    
    let remaining = 0
    for (let i = state.currentNodeIndex; i < pathResult.edges.length; i++) {
      const edge = pathResult.edges[i]
      if (i === state.currentNodeIndex) {
        remaining += edge.length * (1 - state.progress)
      } else {
        remaining += edge.length
      }
    }
    setRemainingDistance(remaining)
    
    // 估算剩余时间
    let time = 0
    for (let i = state.currentNodeIndex; i < pathResult.edges.length; i++) {
      const edge = pathResult.edges[i]
      const effectiveSpeed = edge.speedLimit * (1 - edge.congestion * 0.5)
      const dist = i === state.currentNodeIndex ? edge.length * (1 - state.progress) : edge.length
      time += (dist / 1000) / (effectiveSpeed / 3600) * 3600
    }
    setRemainingTime(time / config.speedMultiplier)
  }, [pathResult, config.speedMultiplier])

  // 更新当前提示
  const updateCurrentHint = useCallback((nodeIndex: number) => {
    if (!pathResult) return
    
    const nodeId = pathResult.path[nodeIndex]
    const hintIndex = navHints.findIndex(h => h.nodeId === nodeId)
    if (hintIndex >= 0) {
      setCurrentHintIndex(hintIndex)
    }
  }, [pathResult, navHints])

  // 处理场景点击 - 使用 ref 读取最新状态
  const handleSceneClick = useCallback((event: MouseEvent) => {
    if (!sceneRef.current) return
    
    const isRoadMode = isSelectingRoadRef.current
    
    // 只有在道路选择模式下才检测道路
    if (isRoadMode) {
      const edge = sceneRef.current.getClickedRoad(event)
      if (edge) {
        const currentEdge = roadNetworkRef.current.edges.find(e => e.id === edge.id)
        setSelectedEdge(currentEdge || edge)
        sceneRef.current.highlightSelectedRoad(edge.id)
      }
      return
    }
    
    // 非道路选择模式：检测节点点击（选择起点/终点）
    const node = sceneRef.current.getClickedNode(event)
    if (!node) return
    
    if (selectingForRef.current === 'start' || !startNodeRef.current) {
      setStartNode(node.id)
      setSelectingFor('end')
    } else if (selectingForRef.current === 'end' || !endNodeRef.current) {
      setEndNode(node.id)
      setSelectingFor(null)
    } else {
      // 默认设置起点
      setStartNode(node.id)
      setSelectingFor('end')
    }
  }, [])

  // 高亮起点终点
  useEffect(() => {
    sceneRef.current?.highlightEndpoints(startNode, endNode)
  }, [startNode, endNode])

  // 规划路径
  const handlePlanPath = useCallback(() => {
    if (!startNode || !endNode) return
    
    const result = dijkstra(roadNetwork, startNode, endNode, config)
    
    if (result) {
      setPathResult(result)
      sceneRef.current?.highlightPath(result)
      
      // 生成导航提示
      const hints = generateNavigationHints(result.path, result.edges, nodeMapRef.current)
      setNavHints(hints)
      setCurrentHintIndex(0)
      
      // 设置仿真路径
      simulatorRef.current?.setPath(result)
      sceneRef.current?.createVehicle()
      
      // 重置状态
      setCurrentNodeIndex(0)
      setCurrentNode(nodeMapRef.current.get(result.path[0]) || null)
      setRemainingDistance(result.totalLength)
      setRemainingTime(result.estimatedTime)
      setIsPlaying(false)
      
      // 清除道路选择状态
      setSelectedEdge(null)
      sceneRef.current?.highlightSelectedRoad(null)
    } else {
      alert('无法找到从起点到终点的路径')
    }
  }, [startNode, endNode, config, roadNetwork])

  // 播放/暂停
  const handlePlayPause = useCallback(() => {
    if (!simulatorRef.current) return
    const paused = simulatorRef.current.togglePause()
    setIsPlaying(!paused)
  }, [])

  // 重置
  const handleReset = useCallback(() => {
    simulatorRef.current?.reset()
    setIsPlaying(false)
    setCurrentNodeIndex(0)
    setCurrentHintIndex(0)
    if (pathResult) {
      setCurrentNode(nodeMapRef.current.get(pathResult.path[0]) || null)
      setRemainingDistance(pathResult.totalLength)
      setRemainingTime(pathResult.estimatedTime)
    }
  }, [pathResult])

  // 上一节点
  const handlePrevNode = useCallback(() => {
    simulatorRef.current?.prevNode()
  }, [])

  // 下一节点
  const handleNextNode = useCallback(() => {
    simulatorRef.current?.nextNode()
  }, [])

  // 加速
  const handleSpeedUp = useCallback(() => {
    const newSpeed = simulatorRef.current?.speedUp() || 1
    setSpeedMultiplier(newSpeed)
    setConfig(prev => ({ ...prev, speedMultiplier: newSpeed }))
  }, [])

  // 减速
  const handleSpeedDown = useCallback(() => {
    const newSpeed = simulatorRef.current?.speedDown() || 1
    setSpeedMultiplier(newSpeed)
    setConfig(prev => ({ ...prev, speedMultiplier: newSpeed }))
  }, [])

  // 切换视图模式
  const handleToggleViewMode = useCallback(() => {
    const newMode = !is3DMode
    setIs3DMode(newMode)
    sceneRef.current?.setViewMode(newMode)
  }, [is3DMode])

  // 切换跟车模式
  const handleToggleFollowMode = useCallback(() => {
    const newMode = !isFollowMode
    setIsFollowMode(newMode)
    sceneRef.current?.setFollowVehicle(newMode)
  }, [isFollowMode])

  // 更新配置
  const handleConfigChange = useCallback((newConfig: SimulationConfig) => {
    setConfig(newConfig)
    // 同步更新模拟器配置
    simulatorRef.current?.updateConfig(newConfig)
  }, [])

  // 切换道路选择模式
  const handleToggleSelectRoad = useCallback(() => {
    setIsSelectingRoad(prev => {
      const newValue = !prev
      // 立即更新 ref
      isSelectingRoadRef.current = newValue
      if (!newValue) {
        // 退出道路选择模式时清除选中
        setSelectedEdge(null)
        sceneRef.current?.highlightSelectedRoad(null)
      }
      return newValue
    })
  }, [])

  // 更新道路拥堵值
  const handleCongestionChange = useCallback((edgeId: string, congestion: number) => {
    // 更新本地状态
    setRoadNetwork(prev => ({
      ...prev,
      edges: prev.edges.map(e => {
        // 更新正向和反向边
        if (e.id === edgeId || e.id === `${edgeId}_rev` || `${e.id}_rev` === edgeId) {
          return { ...e, congestion }
        }
        return e
      })
    }))
    
    // 更新选中的边
    setSelectedEdge(prev => prev ? { ...prev, congestion } : null)
    
    // 更新3D显示
    sceneRef.current?.updateRoadCongestion(edgeId, congestion)
  }, [])

  // 清除道路选择
  const handleClearRoadSelection = useCallback(() => {
    setSelectedEdge(null)
    sceneRef.current?.highlightSelectedRoad(null)
  }, [])

  // 键盘控制
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.code) {
        case 'Space':
          e.preventDefault()
          handlePlayPause()
          break
        case 'ArrowUp':
          e.preventDefault()
          handleSpeedUp()
          break
        case 'ArrowDown':
          e.preventDefault()
          handleSpeedDown()
          break
        case 'ArrowLeft':
          e.preventDefault()
          handlePrevNode()
          break
        case 'ArrowRight':
          e.preventDefault()
          handleNextNode()
          break
        case 'Escape':
          setIsSelectingRoad(false)
          setSelectedEdge(null)
          sceneRef.current?.highlightSelectedRoad(null)
          break
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handlePlayPause, handleSpeedUp, handleSpeedDown, handlePrevNode, handleNextNode])

  return (
    <div className="h-screen w-screen overflow-hidden bg-background">
      {/* 标题栏 */}
      <header className="absolute top-0 left-0 right-0 z-10 glass border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gradient">
            3D城市道路导航仿真系统
          </h1>
          <p className="text-sm text-muted-foreground hidden md:block">
            毕业设计项目 - 基于模拟3D城市道路的导航Web仿真系统
          </p>
        </div>
      </header>

      {/* 3D场景容器 */}
      <div 
        ref={containerRef} 
        className="absolute inset-0 pt-14"
        style={{ cursor: isSelectingRoad ? 'pointer' : (selectingFor ? 'crosshair' : 'grab') }}
      />

      {/* 左侧控制面板 */}
      <div className="absolute top-20 left-4 z-10 space-y-4 max-h-[calc(100vh-100px)] overflow-y-auto">
        <ControlPanel
          nodes={roadNetwork.nodes}
          startNode={startNode}
          endNode={endNode}
          onStartNodeChange={setStartNode}
          onEndNodeChange={setEndNode}
          onPlanPath={handlePlanPath}
          isPlaying={isPlaying}
          onPlayPause={handlePlayPause}
          onReset={handleReset}
          onPrevNode={handlePrevNode}
          onNextNode={handleNextNode}
          onSpeedUp={handleSpeedUp}
          onSpeedDown={handleSpeedDown}
          speedMultiplier={speedMultiplier}
          is3DMode={is3DMode}
          onToggleViewMode={handleToggleViewMode}
          isFollowMode={isFollowMode}
          onToggleFollowMode={handleToggleFollowMode}
          config={config}
          onConfigChange={handleConfigChange}
          hasPath={!!pathResult}
          currentNodeIndex={currentNodeIndex}
          totalNodes={pathResult?.path.length || 0}
        />
        
        {/* 拥堵设置面板 */}
        <CongestionPanel
          selectedEdge={selectedEdge}
          isSelectingRoad={isSelectingRoad}
          onToggleSelectMode={handleToggleSelectRoad}
          onCongestionChange={handleCongestionChange}
          onClearSelection={handleClearRoadSelection}
        />
      </div>

      {/* 右侧导航提示 */}
      <div className="absolute top-20 right-4 z-10 space-y-4">
        <NavigationPanel
          currentHint={navHints[currentHintIndex] || null}
          nextHint={navHints[currentHintIndex + 1] || null}
          currentNode={currentNode}
          progress={currentNodeIndex / (pathResult?.path.length || 1)}
          remainingDistance={remainingDistance}
          remainingTime={remainingTime}
        />
        <PathInfoPanel pathResult={pathResult} nodes={roadNetwork.nodes} />
      </div>

      {/* 状态提示 */}
      {(selectingFor || isSelectingRoad) && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
          <div className="glass rounded-lg px-4 py-2 border border-primary/50 animate-pulse">
            <p className="text-sm text-primary">
              {isSelectingRoad 
                ? '请点击地图上的道路来选择' 
                : `请点击地图选择${selectingFor === 'start' ? '起点' : '终点'}`
              }
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
