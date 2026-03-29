/**
 * 北京林业大学周边道路网络 + T 型全互通立交演示区（原点）
 */

import { RoadNetwork, RoadNode, RoadEdge, Building } from './types'
import { getTInterchangeDirectedEdges, getTInterchangeNodes } from '../lib/TInterchange'

export const nodes: RoadNode[] = [
  // 校园与地标
  { id: 'bjfu_east', x: 78, y: 18, z: 0, layer: 0, name: '北林东门', isLandmark: true, landmarkType: 'gate' },
  { id: 'bjfu_south', x: 12, y: -96, z: 0, layer: 0, name: '北林南门', isLandmark: true, landmarkType: 'gate' },
  { id: 'bjfu_west', x: -82, y: 10, z: 0, layer: 0, name: '北林西门', isLandmark: true, landmarkType: 'gate' },
  { id: 'bjfu_north', x: 14, y: 98, z: 0, layer: 0, name: '北林北门', isLandmark: true, landmarkType: 'gate' },
  { id: 'kfc_south', x: 74, y: -145, z: 0, layer: 0, name: '肯德基(南门店)', isLandmark: true, landmarkType: 'shop' },
  { id: 'bus_east', x: 122, y: 18, z: 0, layer: 0, name: '林业大学东门公交站', isLandmark: true, landmarkType: 'bus_stop' },
  { id: 'bus_south', x: 12, y: -145, z: 0, layer: 0, name: '林业大学南门公交站', isLandmark: true, landmarkType: 'bus_stop' },

  // 学院路南北向主干道
  { id: 'xueyuan_n1', x: -145, y: 170, z: 0, layer: 0, name: '学院路北段', isLandmark: false },
  { id: 'xueyuan_n2', x: -145, y: 98, z: 0, layer: 0, name: '学院路-清华东路口', isLandmark: true, landmarkType: 'intersection' },
  { id: 'xueyuan_c', x: -145, y: 18, z: 0, layer: 0, name: '学院路-成府路口', isLandmark: true, landmarkType: 'intersection' },
  { id: 'xueyuan_s1', x: -145, y: -62, z: 0, layer: 0, name: '学院路-北四环辅路', isLandmark: true, landmarkType: 'intersection' },
  { id: 'xueyuan_s2', x: -145, y: -150, z: 0, layer: 0, name: '学院路南段', isLandmark: false },

  // 东西向地面道路
  { id: 'qinghua_w', x: -230, y: 98, z: 0, layer: 0, name: '清华东路西段', isLandmark: false },
  { id: 'qinghua_c', x: -10, y: 98, z: 0, layer: 0, name: '清华东路-北林北', isLandmark: false },
  { id: 'qinghua_e', x: 160, y: 98, z: 0, layer: 0, name: '清华东路东段', isLandmark: false },
  { id: 'chengfu_w', x: -230, y: 18, z: 0, layer: 0, name: '成府路西段', isLandmark: false },
  { id: 'chengfu_e1', x: 35, y: 18, z: 0, layer: 0, name: '成府路-校园东侧', isLandmark: false },
  { id: 'chengfu_e2', x: 140, y: 18, z: 0, layer: 0, name: '成府路东段', isLandmark: false },

  // 北四环地面辅路
  { id: 'sihuan_w', x: -230, y: -62, z: 0, layer: 0, name: '北四环辅路西段', isLandmark: false },
  { id: 'sihuan_c1', x: -82, y: -62, z: 0, layer: 0, name: '北四环辅路-校园西南', isLandmark: false },
  { id: 'sihuan_c2', x: 32, y: -62, z: 0, layer: 0, name: '北四环辅路-校园东南', isLandmark: false },
  { id: 'sihuan_e', x: 148, y: -62, z: 0, layer: 0, name: '北四环辅路东段', isLandmark: false },

  // 南侧与北侧服务路
  { id: 'south_road_w', x: -110, y: -145, z: 0, layer: 0, name: '南侧服务路西', isLandmark: false },
  { id: 'south_road_c', x: 10, y: -145, z: 0, layer: 0, name: '南侧服务路中', isLandmark: false },
  { id: 'south_road_e', x: 116, y: -145, z: 0, layer: 0, name: '南侧服务路东', isLandmark: false },
  { id: 'north_road', x: 176, y: 155, z: 0, layer: 0, name: '北侧联络路', isLandmark: false },

  // 立交地面枢纽
  { id: 'interchange_sw', x: 172, y: -116, z: 0, layer: 0, name: '立交西南', isLandmark: true, landmarkType: 'intersection' },
  { id: 'interchange_nw', x: 172, y: 68, z: 0, layer: 0, name: '立交西北', isLandmark: true, landmarkType: 'intersection' },

  // 校园内部
  { id: 'campus_c', x: -8, y: 0, z: 0, layer: 0, name: '校园中心', isLandmark: false },
  { id: 'campus_ne', x: 42, y: 48, z: 0, layer: 0, name: '东北角', isLandmark: false },
  { id: 'campus_se', x: 42, y: -48, z: 0, layer: 0, name: '东南角', isLandmark: false },
  { id: 'campus_sw', x: -48, y: -48, z: 0, layer: 0, name: '西南角', isLandmark: false },
  { id: 'campus_nw', x: -48, y: 48, z: 0, layer: 0, name: '西北角', isLandmark: false },

  ...getTInterchangeNodes(),
]

export const edges: RoadEdge[] = [
  // 学院路
  { id: 'xy_1', from: 'xueyuan_n1', to: 'xueyuan_n2', length: 72, speedLimit: 50, congestion: 0.24, type: 'ground', segmentName: '学院路北段' },
  { id: 'xy_2', from: 'xueyuan_n2', to: 'xueyuan_c', length: 80, speedLimit: 50, congestion: 0.28, type: 'ground', segmentName: '学院路（清华东路—成府路段）' },
  { id: 'xy_3', from: 'xueyuan_c', to: 'xueyuan_s1', length: 80, speedLimit: 50, congestion: 0.42, type: 'ground' },
  { id: 'xy_4', from: 'xueyuan_s1', to: 'xueyuan_s2', length: 88, speedLimit: 50, congestion: 0.33, type: 'ground' },

  // 清华东路
  { id: 'qh_1', from: 'qinghua_w', to: 'xueyuan_n2', length: 85, speedLimit: 50, congestion: 0.22, type: 'ground' },
  { id: 'qh_2', from: 'xueyuan_n2', to: 'qinghua_c', length: 135, speedLimit: 50, congestion: 0.25, type: 'ground' },
  { id: 'qh_3', from: 'qinghua_c', to: 'bjfu_north', length: 24, speedLimit: 40, congestion: 0.18, type: 'ground' },
  { id: 'qh_4', from: 'bjfu_north', to: 'qinghua_e', length: 146, speedLimit: 50, congestion: 0.26, type: 'ground' },

  // 成府路
  { id: 'cf_1', from: 'chengfu_w', to: 'xueyuan_c', length: 85, speedLimit: 50, congestion: 0.27, type: 'ground', segmentName: '成府路西段' },
  { id: 'cf_2', from: 'xueyuan_c', to: 'bjfu_west', length: 64, speedLimit: 40, congestion: 0.25, type: 'ground' },
  { id: 'cf_3', from: 'bjfu_west', to: 'campus_c', length: 78, speedLimit: 30, congestion: 0.16, type: 'ground' },
  { id: 'cf_4', from: 'campus_c', to: 'chengfu_e1', length: 52, speedLimit: 30, congestion: 0.16, type: 'ground' },
  { id: 'cf_5', from: 'chengfu_e1', to: 'bjfu_east', length: 43, speedLimit: 40, congestion: 0.23, type: 'ground' },
  { id: 'cf_6', from: 'bjfu_east', to: 'chengfu_e2', length: 64, speedLimit: 50, congestion: 0.27, type: 'ground' },
  { id: 'cf_7', from: 'chengfu_e2', to: 'bus_east', length: 26, speedLimit: 40, congestion: 0.24, type: 'ground' },

  // 北四环地面辅路
  { id: 'sh_1', from: 'sihuan_w', to: 'xueyuan_s1', length: 85, speedLimit: 60, congestion: 0.64, type: 'ground' },
  { id: 'sh_2', from: 'xueyuan_s1', to: 'sihuan_c1', length: 63, speedLimit: 60, congestion: 0.7, type: 'ground' },
  { id: 'sh_3', from: 'sihuan_c1', to: 'bjfu_south', length: 95, speedLimit: 50, congestion: 0.76, type: 'ground' },
  { id: 'sh_4', from: 'bjfu_south', to: 'sihuan_c2', length: 46, speedLimit: 50, congestion: 0.68, type: 'ground' },
  { id: 'sh_5', from: 'sihuan_c2', to: 'sihuan_e', length: 116, speedLimit: 60, congestion: 0.58, type: 'ground' },

  // 南侧服务路
  { id: 'sr_1', from: 'xueyuan_s2', to: 'south_road_w', length: 48, speedLimit: 40, congestion: 0.24, type: 'ground' },
  { id: 'sr_2', from: 'south_road_w', to: 'south_road_c', length: 120, speedLimit: 40, congestion: 0.25, type: 'ground' },
  { id: 'sr_3', from: 'south_road_c', to: 'kfc_south', length: 64, speedLimit: 30, congestion: 0.18, type: 'ground' },
  { id: 'sr_4', from: 'kfc_south', to: 'south_road_e', length: 42, speedLimit: 40, congestion: 0.24, type: 'ground' },
  { id: 'sr_5', from: 'south_road_c', to: 'bus_south', length: 8, speedLimit: 30, congestion: 0.16, type: 'ground' },
  { id: 'sr_6', from: 'bus_south', to: 'bjfu_south', length: 49, speedLimit: 40, congestion: 0.22, type: 'ground' },

  // 东侧地面联络
  { id: 'ns_1', from: 'qinghua_e', to: 'chengfu_e2', length: 80, speedLimit: 50, congestion: 0.24, type: 'ground' },
  { id: 'ns_2', from: 'chengfu_e2', to: 'sihuan_e', length: 80, speedLimit: 50, congestion: 0.28, type: 'ground' },
  { id: 'ns_3', from: 'sihuan_e', to: 'south_road_e', length: 83, speedLimit: 40, congestion: 0.26, type: 'ground' },

  // 校园内部
  { id: 'cp_1', from: 'bjfu_north', to: 'campus_nw', length: 72, speedLimit: 20, congestion: 0.1, type: 'ground' },
  { id: 'cp_2', from: 'campus_nw', to: 'campus_c', length: 58, speedLimit: 20, congestion: 0.08, type: 'ground' },
  { id: 'cp_3', from: 'bjfu_north', to: 'campus_ne', length: 48, speedLimit: 20, congestion: 0.1, type: 'ground' },
  { id: 'cp_4', from: 'campus_ne', to: 'campus_c', length: 64, speedLimit: 20, congestion: 0.08, type: 'ground' },
  { id: 'cp_5', from: 'campus_c', to: 'campus_sw', length: 60, speedLimit: 20, congestion: 0.08, type: 'ground' },
  { id: 'cp_6', from: 'campus_sw', to: 'bjfu_south', length: 74, speedLimit: 20, congestion: 0.12, type: 'ground' },
  { id: 'cp_7', from: 'campus_c', to: 'campus_se', length: 60, speedLimit: 20, congestion: 0.08, type: 'ground' },
  { id: 'cp_8', from: 'campus_se', to: 'bjfu_south', length: 70, speedLimit: 20, congestion: 0.12, type: 'ground' },
  { id: 'cp_9', from: 'campus_ne', to: 'bjfu_east', length: 48, speedLimit: 20, congestion: 0.12, type: 'ground' },
  { id: 'cp_10', from: 'campus_se', to: 'bjfu_east', length: 72, speedLimit: 20, congestion: 0.12, type: 'ground' },
  { id: 'cp_11', from: 'campus_nw', to: 'bjfu_west', length: 58, speedLimit: 20, congestion: 0.1, type: 'ground' },
  { id: 'cp_12', from: 'campus_sw', to: 'bjfu_west', length: 64, speedLimit: 20, congestion: 0.1, type: 'ground' },

  // 枢纽地面连接
  { id: 'ic_1', from: 'south_road_e', to: 'interchange_sw', length: 56, speedLimit: 40, congestion: 0.24, type: 'ground' },
  { id: 'ic_2', from: 'sihuan_e', to: 'interchange_sw', length: 62, speedLimit: 45, congestion: 0.28, type: 'ground' },
  { id: 'ic_3', from: 'qinghua_e', to: 'interchange_nw', length: 44, speedLimit: 45, congestion: 0.24, type: 'ground' },
  { id: 'ic_4', from: 'interchange_nw', to: 'north_road', length: 88, speedLimit: 40, congestion: 0.2, type: 'ground' },
  { id: 'ic_5', from: 'interchange_nw', to: 'interchange_sw', length: 184, speedLimit: 45, congestion: 0.3, type: 'ground' },
  { id: 'nr_1', from: 'xueyuan_n1', to: 'north_road', length: 322, speedLimit: 50, congestion: 0.22, type: 'ground' },

  // 校园中心 → T 型立交（便于导航仿真驶入立交场景）
  {
    id: 'tic_link_campus',
    from: 'campus_c',
    to: 't_ic_hub',
    length: 50,
    speedLimit: 30,
    congestion: 0.12,
    type: 'ground',
    segmentName: '校园联络线—北林T型立交方向',
  },

  ...getTInterchangeDirectedEdges(),
]

/** 建筑物已清空（仅保留路网与立交演示）；若需恢复可在 App 中重新填入 Building[] */
export const buildings: Building[] = []

export const bidirectionalEdges: RoadEdge[] = edges.flatMap((edge) => [
  edge,
  {
    ...edge,
    id: `${edge.id}_rev`,
    from: edge.to,
    to: edge.from,
    geometryPath: edge.geometryPath ? [...edge.geometryPath].reverse() : undefined,
  },
])

export const roadNetwork: RoadNetwork = {
  nodes,
  edges: bidirectionalEdges,
  buildings,
}

export default roadNetwork
