/**
 * 道路网络类型定义
 */

// 道路节点
export interface RoadNode {
  id: string           // 节点ID，格式: nodeId_层级
  x: number            // X坐标
  y: number            // Y坐标 (在2D视图中为Y，3D视图中为Z)
  z: number            // Z坐标 (高度)
  layer: number        // 层级: 0=地面, 1=高架, 0.5=匝道
  name: string         // 节点名称
  isLandmark?: boolean // 是否为地标（显示标记）
  landmarkType?: LandmarkType // 地标类型
}

// 地标类型
export type LandmarkType = 'gate' | 'shop' | 'building' | 'intersection' | 'bus_stop'

// 建筑物定义
export interface Building {
  id: string
  x: number
  y: number
  width: number        // 宽度
  depth: number        // 深度
  height: number       // 高度
  name: string
  type: BuildingType
  color?: number       // 可选颜色
}

// 建筑类型
export type BuildingType = 'school' | 'shop' | 'office' | 'residence' | 'landmark'

// 道路边
export interface RoadEdge {
  id: string           // 边ID
  from: string         // 起始节点ID
  to: string           // 终止节点ID
  length: number       // 道路长度(米)
  speedLimit: number   // 限速(km/h)
  congestion: number   // 拥堵系数 (0-1)
  type: RoadType       // 道路类型
  /** 可选：路段中文名（用于导航列表、拥堵面板展示） */
  segmentName?: string
  /** 可选：中心线控制点（x=东，y=北，z=高），用于立交匝道 Catmull-Rom；存在时仿真沿样条采样 */
  geometryPath?: Array<{ x: number; y: number; z: number }>
  /** 为 false 时由立交模块绘制路面，Scene3D 不生成长方体 */
  renderInScene?: boolean
}

// 道路类型
export type RoadType = 'ground' | 'overpass' | 'ramp'

// 道路网络
export interface RoadNetwork {
  nodes: RoadNode[]
  edges: RoadEdge[]
  buildings?: Building[]  // 建筑物列表
}

// 路径规划结果
export interface PathResult {
  path: string[]       // 节点ID序列
  totalCost: number    // 总代价
  totalLength: number  // 总长度
  estimatedTime: number // 预计时间(秒)
  edges: RoadEdge[]    // 经过的边
}

// 导航提示类型
export type NavHintType = 
  | 'straight' 
  | 'turn_left' 
  | 'turn_right' 
  | 'ramp_up' 
  | 'ramp_down' 
  | 'overpass_enter' 
  | 'overpass_exit'
  | 'destination'

// 导航提示
export interface NavigationHint {
  nodeId: string       // 触发节点
  type: NavHintType    // 提示类型
  message: string      // 提示文本
  distance: number     // 距离下一节点(米)
}

// 车辆状态
export interface VehicleState {
  position: { x: number; y: number; z: number }
  rotation: number     // 车头朝向(弧度)
  currentNodeIndex: number
  progress: number     // 在当前边上的进度 (0-1)
  speed: number        // 当前速度
  isPaused: boolean    // 是否暂停
}

// 仿真配置
export interface SimulationConfig {
  baseSpeed: number    // 基础速度 (km/h)
  speedMultiplier: number // 速度倍率
  weights: {
    length: number     // 长度权重
    time: number       // 时间权重
    congestion: number // 拥堵权重
  }
}
