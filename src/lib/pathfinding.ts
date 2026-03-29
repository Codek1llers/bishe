/**
 * Dijkstra 最短路径算法
 * 支持多权值优化的路径规划
 */

import { RoadNetwork, RoadEdge, PathResult, SimulationConfig } from '../data/types'

// 优先队列节点
interface PriorityQueueNode {
  nodeId: string
  cost: number
}

// 简单优先队列实现
class PriorityQueue {
  private heap: PriorityQueueNode[] = []

  push(node: PriorityQueueNode) {
    this.heap.push(node)
    this.bubbleUp(this.heap.length - 1)
  }

  pop(): PriorityQueueNode | undefined {
    if (this.heap.length === 0) return undefined
    const result = this.heap[0]
    const last = this.heap.pop()!
    if (this.heap.length > 0) {
      this.heap[0] = last
      this.bubbleDown(0)
    }
    return result
  }

  isEmpty(): boolean {
    return this.heap.length === 0
  }

  private bubbleUp(index: number) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2)
      if (this.heap[parentIndex].cost <= this.heap[index].cost) break
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]]
      index = parentIndex
    }
  }

  private bubbleDown(index: number) {
    while (true) {
      const leftChild = 2 * index + 1
      const rightChild = 2 * index + 2
      let smallest = index

      if (leftChild < this.heap.length && this.heap[leftChild].cost < this.heap[smallest].cost) {
        smallest = leftChild
      }
      if (rightChild < this.heap.length && this.heap[rightChild].cost < this.heap[smallest].cost) {
        smallest = rightChild
      }
      if (smallest === index) break
      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]]
      index = smallest
    }
  }
}

/**
 * 计算边的代价
 * cost = a * length + b * (length / speedLimit) + c * congestion
 */
function calculateEdgeCost(edge: RoadEdge, weights: SimulationConfig['weights']): number {
  const { length, speedLimit, congestion } = edge
  const { length: a, time: b, congestion: c } = weights
  
  // 时间代价 (秒)
  const timeCost = (length / 1000) / (speedLimit / 3600) // 转换为小时后计算
  
  return a * length + b * timeCost + c * congestion * 100
}

/**
 * 构建邻接表
 */
function buildAdjacencyList(network: RoadNetwork): Map<string, RoadEdge[]> {
  const adjacency = new Map<string, RoadEdge[]>()
  
  for (const node of network.nodes) {
    adjacency.set(node.id, [])
  }
  
  for (const edge of network.edges) {
    const edges = adjacency.get(edge.from)
    if (edges) {
      edges.push(edge)
    }
  }
  
  return adjacency
}

/**
 * Dijkstra 最短路径算法
 */
export function dijkstra(
  network: RoadNetwork,
  startId: string,
  endId: string,
  config: SimulationConfig
): PathResult | null {
  const adjacency = buildAdjacencyList(network)
  const nodeMap = new Map(network.nodes.map(n => [n.id, n]))
  
  // 检查起点和终点是否存在
  if (!nodeMap.has(startId) || !nodeMap.has(endId)) {
    console.error('起点或终点不存在')
    return null
  }
  
  // 初始化
  const distances = new Map<string, number>()
  const previous = new Map<string, string | null>()
  const previousEdge = new Map<string, RoadEdge | null>()
  const visited = new Set<string>()
  const pq = new PriorityQueue()
  
  for (const node of network.nodes) {
    distances.set(node.id, Infinity)
    previous.set(node.id, null)
    previousEdge.set(node.id, null)
  }
  
  distances.set(startId, 0)
  pq.push({ nodeId: startId, cost: 0 })
  
  // Dijkstra 主循环
  while (!pq.isEmpty()) {
    const current = pq.pop()!
    
    if (visited.has(current.nodeId)) continue
    visited.add(current.nodeId)
    
    // 到达终点
    if (current.nodeId === endId) break
    
    // 遍历邻居
    const edges = adjacency.get(current.nodeId) || []
    for (const edge of edges) {
      if (visited.has(edge.to)) continue
      
      const edgeCost = calculateEdgeCost(edge, config.weights)
      const newDist = distances.get(current.nodeId)! + edgeCost
      
      if (newDist < distances.get(edge.to)!) {
        distances.set(edge.to, newDist)
        previous.set(edge.to, current.nodeId)
        previousEdge.set(edge.to, edge)
        pq.push({ nodeId: edge.to, cost: newDist })
      }
    }
  }
  
  // 构建路径
  if (distances.get(endId) === Infinity) {
    console.error('无法找到从起点到终点的路径')
    return null
  }
  
  const path: string[] = []
  const edges: RoadEdge[] = []
  let currentNode: string | null = endId
  
  while (currentNode) {
    path.unshift(currentNode)
    const edge = previousEdge.get(currentNode)
    if (edge) edges.unshift(edge)
    currentNode = previous.get(currentNode) || null
  }
  
  // 计算统计信息
  // 注意：length 单位是"单位"(1单位=10米)，speedLimit 是 km/h
  const totalLength = edges.reduce((sum, e) => sum + e.length, 0)
  const totalTime = edges.reduce((sum, e) => {
    const effectiveSpeed = e.speedLimit * (1 - e.congestion * 0.5)
    // 距离(km) = length * 10 / 1000 = length / 100
    // 时间(h) = 距离(km) / 速度(km/h)
    return sum + (e.length / 100) / effectiveSpeed
  }, 0)
  
  return {
    path,
    totalCost: distances.get(endId)!,
    totalLength,
    estimatedTime: totalTime * 3600, // 转换为秒
    edges
  }
}

/**
 * A* 路径规划算法 (启发式优化)
 */
export function astar(
  network: RoadNetwork,
  startId: string,
  endId: string,
  config: SimulationConfig
): PathResult | null {
  const adjacency = buildAdjacencyList(network)
  const nodeMap = new Map(network.nodes.map(n => [n.id, n]))
  
  if (!nodeMap.has(startId) || !nodeMap.has(endId)) {
    return null
  }
  
  const endNode = nodeMap.get(endId)!
  
  // 启发式函数: 欧几里得距离
  const heuristic = (nodeId: string): number => {
    const node = nodeMap.get(nodeId)!
    const dx = endNode.x - node.x
    const dy = endNode.y - node.y
    const dz = endNode.z - node.z
    return Math.sqrt(dx * dx + dy * dy + dz * dz)
  }
  
  const gScore = new Map<string, number>()
  const fScore = new Map<string, number>()
  const previous = new Map<string, string | null>()
  const previousEdge = new Map<string, RoadEdge | null>()
  const visited = new Set<string>()
  const pq = new PriorityQueue()
  
  for (const node of network.nodes) {
    gScore.set(node.id, Infinity)
    fScore.set(node.id, Infinity)
    previous.set(node.id, null)
    previousEdge.set(node.id, null)
  }
  
  gScore.set(startId, 0)
  fScore.set(startId, heuristic(startId))
  pq.push({ nodeId: startId, cost: fScore.get(startId)! })
  
  while (!pq.isEmpty()) {
    const current = pq.pop()!
    
    if (current.nodeId === endId) break
    if (visited.has(current.nodeId)) continue
    visited.add(current.nodeId)
    
    const edges = adjacency.get(current.nodeId) || []
    for (const edge of edges) {
      if (visited.has(edge.to)) continue
      
      const edgeCost = calculateEdgeCost(edge, config.weights)
      const tentativeG = gScore.get(current.nodeId)! + edgeCost
      
      if (tentativeG < gScore.get(edge.to)!) {
        previous.set(edge.to, current.nodeId)
        previousEdge.set(edge.to, edge)
        gScore.set(edge.to, tentativeG)
        fScore.set(edge.to, tentativeG + heuristic(edge.to))
        pq.push({ nodeId: edge.to, cost: fScore.get(edge.to)! })
      }
    }
  }
  
  if (gScore.get(endId) === Infinity) {
    return null
  }
  
  const path: string[] = []
  const edges: RoadEdge[] = []
  let currentNode: string | null = endId
  
  while (currentNode) {
    path.unshift(currentNode)
    const edge = previousEdge.get(currentNode)
    if (edge) edges.unshift(edge)
    currentNode = previous.get(currentNode) || null
  }
  
  const totalLength = edges.reduce((sum, e) => sum + e.length, 0)
  const totalTime = edges.reduce((sum, e) => {
    const effectiveSpeed = e.speedLimit * (1 - e.congestion * 0.5)
    // 距离(km) = length * 10 / 1000 = length / 100
    // 时间(h) = 距离(km) / 速度(km/h)
    return sum + (e.length / 100) / effectiveSpeed
  }, 0)
  
  return {
    path,
    totalCost: gScore.get(endId)!,
    totalLength,
    estimatedTime: totalTime * 3600,
    edges
  }
}

export default { dijkstra, astar }
