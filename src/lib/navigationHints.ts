/**
 * 导航提示生成器
 * 自动识别层级切换节点，生成立交桥导航提示
 */

import { RoadNode, RoadEdge, NavigationHint, NavHintType } from '../data/types'

/**
 * 计算两个向量之间的角度
 */
function calculateTurnAngle(
  from: RoadNode,
  current: RoadNode,
  to: RoadNode
): number {
  const v1 = { x: current.x - from.x, y: current.y - from.y }
  const v2 = { x: to.x - current.x, y: to.y - current.y }
  
  const cross = v1.x * v2.y - v1.y * v2.x
  const dot = v1.x * v2.x + v1.y * v2.y
  
  return Math.atan2(cross, dot)
}

/**
 * 根据层级变化判断导航提示类型
 */
function getLayerChangeHint(
  fromNode: RoadNode,
  currentNode: RoadNode,
  toNode: RoadNode,
  currentEdge: RoadEdge,
  nextEdge: RoadEdge
): NavHintType | null {
  const fromLayer = fromNode.layer
  const currentLayer = currentNode.layer
  const toLayer = toNode.layer
  
  // 从地面层进入高架
  if (fromLayer === 0 && currentLayer > 0 && currentEdge.type === 'ramp') {
    return 'ramp_up'
  }
  
  // 从高架层下到地面
  if (fromLayer > 0 && toLayer === 0 && nextEdge.type === 'ramp') {
    return 'ramp_down'
  }
  
  // 进入高架桥
  if (currentLayer === 0 && toLayer === 1 && nextEdge.type === 'overpass') {
    return 'overpass_enter'
  }
  
  // 离开高架桥
  if (currentLayer === 1 && toLayer === 0) {
    return 'overpass_exit'
  }
  
  return null
}

/**
 * 根据转向角度判断转向类型
 */
function getTurnHint(angle: number): NavHintType {
  const angleDeg = (angle * 180) / Math.PI
  
  if (angleDeg > 30) {
    return 'turn_left'
  } else if (angleDeg < -30) {
    return 'turn_right'
  }
  return 'straight'
}

/**
 * 生成导航提示消息
 */
function generateHintMessage(
  type: NavHintType,
  distance: number,
  nodeName: string
): string {
  const distanceText = distance > 100 
    ? `${Math.round(distance)}米后` 
    : '前方'
  
  switch (type) {
    case 'ramp_up':
      return `${distanceText}，驶入上匝道，进入高架桥`
    case 'ramp_down':
      return `${distanceText}，驶入下匝道，离开高架桥`
    case 'overpass_enter':
      return `${distanceText}，进入立交桥高架层`
    case 'overpass_exit':
      return `${distanceText}，离开高架桥，进入地面道路`
    case 'turn_left':
      return `${distanceText}，左转进入${nodeName}`
    case 'turn_right':
      return `${distanceText}，右转进入${nodeName}`
    case 'straight':
      return `${distanceText}，直行通过${nodeName}`
    case 'destination':
      return `您已到达目的地：${nodeName}`
    default:
      return `${distanceText}，继续行驶`
  }
}

/**
 * 生成完整的导航提示序列
 */
export function generateNavigationHints(
  path: string[],
  edges: RoadEdge[],
  nodeMap: Map<string, RoadNode>
): NavigationHint[] {
  const hints: NavigationHint[] = []
  
  if (path.length < 2) return hints
  
  let accumulatedDistance = 0
  
  for (let i = 1; i < path.length - 1; i++) {
    const fromNode = nodeMap.get(path[i - 1])!
    const currentNode = nodeMap.get(path[i])!
    const toNode = nodeMap.get(path[i + 1])!
    const currentEdge = edges[i - 1]
    const nextEdge = edges[i]
    
    accumulatedDistance += currentEdge.length
    
    // 检查层级变化
    const layerHint = getLayerChangeHint(fromNode, currentNode, toNode, currentEdge, nextEdge)
    
    if (layerHint) {
      hints.push({
        nodeId: currentNode.id,
        type: layerHint,
        message: generateHintMessage(layerHint, accumulatedDistance, currentNode.name),
        distance: accumulatedDistance
      })
      accumulatedDistance = 0
      continue
    }
    
    // 检查转向
    const turnAngle = calculateTurnAngle(fromNode, currentNode, toNode)
    const turnHint = getTurnHint(turnAngle)
    
    // 只在需要转向时生成提示
    if (turnHint !== 'straight' || (i % 3 === 0 && path.length > 5)) {
      hints.push({
        nodeId: currentNode.id,
        type: turnHint,
        message: generateHintMessage(turnHint, accumulatedDistance, toNode.name),
        distance: accumulatedDistance
      })
      accumulatedDistance = 0
    }
  }
  
  // 添加终点提示
  const endNode = nodeMap.get(path[path.length - 1])!
  hints.push({
    nodeId: endNode.id,
    type: 'destination',
    message: generateHintMessage('destination', 0, endNode.name),
    distance: 0
  })
  
  return hints
}

export default { generateNavigationHints }
