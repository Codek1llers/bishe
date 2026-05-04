import type { RoadEdge, RoadNetwork, RoadNode } from '@/data/types'
import { roadNetwork as currentRoadTemplate } from '@/data/roadNetwork'

export type SceneTemplateKind = 'current-campus' | 'stacked-overpass' | 'diamond-interchange' | 'bridge-underpass' | 'multi-level-express-hub'

export type TemplateRoutePreset = {
  start: string
  end: string
  label: string
}

type TemplateMeta = {
  kind: SceneTemplateKind
  title: string
  description: string
  recommendedRoute: TemplateRoutePreset
}

export const SCENE_TEMPLATE_META: TemplateMeta[] = [
  {
    kind: 'current-campus',
    title: '当前校园+T型立交主场景',
    description: '保留你现有顺滑曲线、匝道起伏和桥下道路，是系统默认主模板。',
    recommendedRoute: { start: 'campus_c', end: 't_ic_a_e', label: '校园中心 → 高架东端' },
  },
  {
    kind: 'stacked-overpass',
    title: '高架主路 + 桥下辅路',
    description: '东西向高架与桥下辅路在 2D 投影重合，突出 3D 立体识别价值。',
    recommendedRoute: { start: 'so_south', end: 'so_over_e', label: '南侧地面入口 → 高架东段' },
  },
  {
    kind: 'diamond-interchange',
    title: '菱形互通',
    description: '包含高架、桥下地面路和上下匝道，适合演示匝道切换。',
    recommendedRoute: { start: 'di_ground_w', end: 'di_over_n', label: '地面西口 → 高架北口' },
  },
  {
    kind: 'bridge-underpass',
    title: '桥梁跨越 + 桥下通道',
    description: '桥面直行与桥下穿行平面重叠，适合做 2D/3D 对比演示。',
    recommendedRoute: { start: 'bu_north', end: 'bu_ground_e', label: '北侧接入 → 桥下东口' },
  },
  {
    kind: 'multi-level-express-hub',
    title: '城市快速路复合枢纽',
    description: '参考主流城市高架快速路枢纽抽象化设计，包含双主线、半定向匝道、桥下辅路与多层投影重叠。',
    recommendedRoute: { start: 'meh_sw_ground', end: 'meh_ground_ne', label: '西南地面入口 → 东北地面出城口' },
  },
]

function edgePair(base: Omit<RoadEdge, 'id' | 'from' | 'to'> & { id: string; from: string; to: string }): RoadEdge[] {
  const edge: RoadEdge = { ...base }
  return [
    edge,
    {
      ...edge,
      id: `${edge.id}_rev`,
      from: edge.to,
      to: edge.from,
      geometryPath: edge.geometryPath ? [...edge.geometryPath].reverse() : undefined,
    },
  ]
}

function cloneRoadNetwork(network: RoadNetwork): RoadNetwork {
  return {
    nodes: network.nodes.map((node) => ({ ...node })),
    edges: network.edges.map((edge) => ({
      ...edge,
      geometryPath: edge.geometryPath ? edge.geometryPath.map((point) => ({ ...point })) : undefined,
    })),
    buildings: network.buildings ? network.buildings.map((building) => ({ ...building })) : [],
  }
}

function stackedOverpassTemplate(): RoadNetwork {
  const nodes: RoadNode[] = [
    { id: 'so_ground_w', name: '桥下西段', x: -180, y: 0, z: 0, layer: 0 },
    { id: 'so_ground_mid', name: '桥下中心', x: 0, y: 0, z: 0, layer: 0, isLandmark: true, landmarkType: 'intersection' },
    { id: 'so_ground_e', name: '桥下东段', x: 180, y: 0, z: 0, layer: 0 },
    { id: 'so_over_w', name: '高架西段', x: -180, y: 0, z: 18, layer: 1 },
    { id: 'so_over_mid', name: '高架中心', x: 0, y: 0, z: 18, layer: 1 },
    { id: 'so_over_e', name: '高架东段', x: 180, y: 0, z: 18, layer: 1 },
    { id: 'so_south', name: '南侧地面入口', x: 0, y: -180, z: 0, layer: 0 },
    { id: 'so_ramp_w', name: '西向上桥匝道', x: -72, y: -92, z: 9, layer: 0.5 },
    { id: 'so_ramp_e', name: '东向上桥匝道', x: 72, y: -92, z: 9, layer: 0.5 },
  ]

  const edges: RoadEdge[] = [
    ...edgePair({ id: 'so_ground_a', from: 'so_ground_w', to: 'so_ground_mid', length: 180, speedLimit: 35, congestion: 0.24, type: 'ground', segmentName: '桥下辅路西段', geometryPath: [{ x: -180, y: -12, z: 0 }, { x: -110, y: -6, z: 0 }, { x: -35, y: -2, z: 0 }, { x: 0, y: 0, z: 0 }] }),
    ...edgePair({ id: 'so_ground_b', from: 'so_ground_mid', to: 'so_ground_e', length: 180, speedLimit: 35, congestion: 0.2, type: 'ground', segmentName: '桥下辅路东段', geometryPath: [{ x: 0, y: 0, z: 0 }, { x: 35, y: 2, z: 0 }, { x: 110, y: 6, z: 0 }, { x: 180, y: 12, z: 0 }] }),
    ...edgePair({ id: 'so_over_a', from: 'so_over_w', to: 'so_over_mid', length: 180, speedLimit: 60, congestion: 0.08, type: 'overpass', segmentName: '高架主路西段', geometryPath: [{ x: -180, y: -8, z: 18 }, { x: -120, y: -4, z: 18 }, { x: -48, y: -1, z: 18 }, { x: 0, y: 0, z: 18 }] }),
    ...edgePair({ id: 'so_over_b', from: 'so_over_mid', to: 'so_over_e', length: 180, speedLimit: 60, congestion: 0.08, type: 'overpass', segmentName: '高架主路东段', geometryPath: [{ x: 0, y: 0, z: 18 }, { x: 48, y: 1, z: 18 }, { x: 120, y: 4, z: 18 }, { x: 180, y: 8, z: 18 }] }),
    ...edgePair({ id: 'so_south_link', from: 'so_south', to: 'so_ground_mid', length: 180, speedLimit: 35, congestion: 0.18, type: 'ground', segmentName: '南侧桥下接入', geometryPath: [{ x: 0, y: -180, z: 0 }, { x: -6, y: -120, z: 0 }, { x: -4, y: -48, z: 0 }, { x: 0, y: 0, z: 0 }] }),
    ...edgePair({ id: 'so_ramp_w', from: 'so_south', to: 'so_over_mid', length: 230, speedLimit: 30, congestion: 0.16, type: 'ramp', segmentName: '西侧上桥匝道', geometryPath: [{ x: 0, y: -180, z: 0 }, { x: -32, y: -145, z: 2 }, { x: -72, y: -92, z: 9 }, { x: -65, y: -40, z: 14 }, { x: -28, y: -10, z: 17 }, { x: 0, y: 0, z: 18 }] }),
    ...edgePair({ id: 'so_ramp_e', from: 'so_south', to: 'so_over_mid', length: 230, speedLimit: 30, congestion: 0.16, type: 'ramp', segmentName: '东侧上桥匝道', geometryPath: [{ x: 0, y: -180, z: 0 }, { x: 32, y: -145, z: 2 }, { x: 72, y: -92, z: 9 }, { x: 65, y: -40, z: 14 }, { x: 28, y: -10, z: 17 }, { x: 0, y: 0, z: 18 }] }),
  ]

  return { nodes, edges, buildings: [] }
}

function diamondInterchangeTemplate(): RoadNetwork {
  const nodes: RoadNode[] = [
    { id: 'di_ground_w', name: '地面西口', x: -170, y: 0, z: 0, layer: 0 },
    { id: 'di_ground_c', name: '桥下中心', x: 0, y: 0, z: 0, layer: 0, isLandmark: true, landmarkType: 'intersection' },
    { id: 'di_ground_e', name: '地面东口', x: 170, y: 0, z: 0, layer: 0 },
    { id: 'di_over_n', name: '高架北口', x: 0, y: 180, z: 20, layer: 1 },
    { id: 'di_over_s', name: '高架南口', x: 0, y: -180, z: 20, layer: 1 },
    { id: 'di_ramp_nw', name: '西北匝道', x: -88, y: 84, z: 10, layer: 0.5 },
    { id: 'di_ramp_ne', name: '东北匝道', x: 88, y: 84, z: 10, layer: 0.5 },
    { id: 'di_ramp_sw', name: '西南匝道', x: -88, y: -84, z: 10, layer: 0.5 },
    { id: 'di_ramp_se', name: '东南匝道', x: 88, y: -84, z: 10, layer: 0.5 },
  ]

  const edges: RoadEdge[] = [
    ...edgePair({ id: 'di_ground_a', from: 'di_ground_w', to: 'di_ground_c', length: 170, speedLimit: 40, congestion: 0.24, type: 'ground', segmentName: '桥下地面西段', geometryPath: [{ x: -170, y: -8, z: 0 }, { x: -92, y: -4, z: 0 }, { x: -28, y: -1, z: 0 }, { x: 0, y: 0, z: 0 }] }),
    ...edgePair({ id: 'di_ground_b', from: 'di_ground_c', to: 'di_ground_e', length: 170, speedLimit: 40, congestion: 0.24, type: 'ground', segmentName: '桥下地面东段', geometryPath: [{ x: 0, y: 0, z: 0 }, { x: 28, y: 1, z: 0 }, { x: 92, y: 4, z: 0 }, { x: 170, y: 8, z: 0 }] }),
    ...edgePair({ id: 'di_over', from: 'di_over_s', to: 'di_over_n', length: 360, speedLimit: 65, congestion: 0.08, type: 'overpass', segmentName: '南北向高架主路', geometryPath: [{ x: 0, y: -180, z: 20 }, { x: -10, y: -90, z: 20 }, { x: -6, y: 0, z: 20 }, { x: 8, y: 92, z: 20 }, { x: 0, y: 180, z: 20 }] }),
    ...edgePair({ id: 'di_nw', from: 'di_ground_w', to: 'di_over_n', length: 240, speedLimit: 30, congestion: 0.18, type: 'ramp', segmentName: '西向北上匝道', geometryPath: [{ x: -170, y: 0, z: 0 }, { x: -138, y: 18, z: 2 }, { x: -88, y: 84, z: 10 }, { x: -42, y: 140, z: 17 }, { x: 0, y: 180, z: 20 }] }),
    ...edgePair({ id: 'di_ne', from: 'di_ground_e', to: 'di_over_n', length: 240, speedLimit: 30, congestion: 0.18, type: 'ramp', segmentName: '东向北上匝道', geometryPath: [{ x: 170, y: 0, z: 0 }, { x: 138, y: 18, z: 2 }, { x: 88, y: 84, z: 10 }, { x: 42, y: 140, z: 17 }, { x: 0, y: 180, z: 20 }] }),
    ...edgePair({ id: 'di_sw', from: 'di_ground_w', to: 'di_over_s', length: 240, speedLimit: 30, congestion: 0.18, type: 'ramp', segmentName: '西向南上匝道', geometryPath: [{ x: -170, y: 0, z: 0 }, { x: -138, y: -18, z: 2 }, { x: -88, y: -84, z: 10 }, { x: -42, y: -140, z: 17 }, { x: 0, y: -180, z: 20 }] }),
    ...edgePair({ id: 'di_se', from: 'di_ground_e', to: 'di_over_s', length: 240, speedLimit: 30, congestion: 0.18, type: 'ramp', segmentName: '东向南上匝道', geometryPath: [{ x: 170, y: 0, z: 0 }, { x: 138, y: -18, z: 2 }, { x: 88, y: -84, z: 10 }, { x: 42, y: -140, z: 17 }, { x: 0, y: -180, z: 20 }] }),
  ]

  return { nodes, edges, buildings: [] }
}

function bridgeUnderpassTemplate(): RoadNetwork {
  const nodes: RoadNode[] = [
    { id: 'bu_ground_w', name: '桥下西口', x: -160, y: -10, z: 0, layer: 0 },
    { id: 'bu_ground_c', name: '桥下中段', x: 0, y: -10, z: 0, layer: 0, isLandmark: true, landmarkType: 'intersection' },
    { id: 'bu_ground_e', name: '桥下东口', x: 160, y: -10, z: 0, layer: 0 },
    { id: 'bu_over_w', name: '桥面西侧', x: -160, y: 18, z: 16, layer: 1 },
    { id: 'bu_over_c', name: '桥面中段', x: 0, y: 18, z: 16, layer: 1 },
    { id: 'bu_over_e', name: '桥面东侧', x: 160, y: 18, z: 16, layer: 1 },
    { id: 'bu_north', name: '北侧接入', x: 0, y: 150, z: 0, layer: 0 },
  ]

  const edges: RoadEdge[] = [
    ...edgePair({ id: 'bu_ground_a', from: 'bu_ground_w', to: 'bu_ground_c', length: 160, speedLimit: 35, congestion: 0.22, type: 'ground', segmentName: '桥下通道西段', geometryPath: [{ x: -160, y: -24, z: 0 }, { x: -92, y: -18, z: 0 }, { x: -28, y: -12, z: 0 }, { x: 0, y: -10, z: 0 }] }),
    ...edgePair({ id: 'bu_ground_b', from: 'bu_ground_c', to: 'bu_ground_e', length: 160, speedLimit: 35, congestion: 0.22, type: 'ground', segmentName: '桥下通道东段', geometryPath: [{ x: 0, y: -10, z: 0 }, { x: 28, y: -8, z: 0 }, { x: 92, y: -2, z: 0 }, { x: 160, y: 4, z: 0 }] }),
    ...edgePair({ id: 'bu_over_a', from: 'bu_over_w', to: 'bu_over_c', length: 160, speedLimit: 55, congestion: 0.1, type: 'overpass', segmentName: '桥面西段', geometryPath: [{ x: -160, y: 0, z: 16 }, { x: -90, y: 8, z: 16 }, { x: -32, y: 14, z: 16 }, { x: 0, y: 18, z: 16 }] }),
    ...edgePair({ id: 'bu_over_b', from: 'bu_over_c', to: 'bu_over_e', length: 160, speedLimit: 55, congestion: 0.1, type: 'overpass', segmentName: '桥面东段', geometryPath: [{ x: 0, y: 18, z: 16 }, { x: 32, y: 14, z: 16 }, { x: 90, y: 8, z: 16 }, { x: 160, y: 0, z: 16 }] }),
    ...edgePair({ id: 'bu_north_link', from: 'bu_north', to: 'bu_ground_c', length: 160, speedLimit: 35, congestion: 0.18, type: 'ground', segmentName: '北侧桥下接入', geometryPath: [{ x: 0, y: 150, z: 0 }, { x: -8, y: 90, z: 0 }, { x: -6, y: 28, z: 0 }, { x: 0, y: -10, z: 0 }] }),
  ]

  return { nodes, edges, buildings: [] }
}

function multiLevelExpressHubTemplate(): RoadNetwork {
  const nodes: RoadNode[] = [
    { id: 'meh_w_over', name: '西向高架入口', x: -260, y: 20, z: 22, layer: 1 },
    { id: 'meh_center_over', name: '中央高架转换枢纽', x: 0, y: 0, z: 24, layer: 1, isLandmark: true, landmarkType: 'intersection' },
    { id: 'meh_e_over', name: '东向高架主出口', x: 260, y: -10, z: 22, layer: 1 },
    { id: 'meh_s_over', name: '南向快速路入口', x: -20, y: -260, z: 20, layer: 1 },
    { id: 'meh_ne_over', name: '东北高架分流口', x: 220, y: 180, z: 24, layer: 1 },
    { id: 'meh_ground_w', name: '西侧桥下辅路', x: -250, y: -35, z: 0, layer: 0 },
    { id: 'meh_ground_c', name: '桥下集散中心', x: 0, y: -30, z: 0, layer: 0, isLandmark: true, landmarkType: 'intersection' },
    { id: 'meh_ground_e', name: '东侧桥下辅路', x: 250, y: -25, z: 0, layer: 0 },
    { id: 'meh_sw_ground', name: '西南城区入口', x: -180, y: -220, z: 0, layer: 0 },
    { id: 'meh_se_ground', name: '东南城区入口', x: 180, y: -220, z: 0, layer: 0 },
    { id: 'meh_n_ground', name: '北侧桥下出口', x: 20, y: 220, z: 0, layer: 0 },
    { id: 'meh_ground_ne', name: '东北出城地面口', x: 210, y: 240, z: 0, layer: 0, isLandmark: true, landmarkType: 'intersection' },
    { id: 'meh_under_west_hub', name: '西桥下转换点', x: -120, y: -50, z: 0, layer: 0, isLandmark: true, landmarkType: 'intersection' },
    { id: 'meh_under_east_hub', name: '东桥下转换点', x: 128, y: -34, z: 0, layer: 0, isLandmark: true, landmarkType: 'intersection' },
    { id: 'meh_service_south', name: '南侧服务路口', x: 0, y: -260, z: 0, layer: 0, isLandmark: true, landmarkType: 'intersection' },
  ]

  const edges: RoadEdge[] = [
    ...edgePair({ id: 'meh_over_main_w', from: 'meh_w_over', to: 'meh_center_over', length: 265, speedLimit: 70, congestion: 0.12, type: 'overpass', segmentName: '城市快速路高架西段', geometryPath: [{ x: -260, y: 20, z: 22 }, { x: -180, y: 18, z: 23 }, { x: -90, y: 8, z: 24 }, { x: 0, y: 0, z: 24 }] }),
    ...edgePair({ id: 'meh_over_main_e', from: 'meh_center_over', to: 'meh_e_over', length: 265, speedLimit: 70, congestion: 0.12, type: 'overpass', segmentName: '城市快速路高架东段', geometryPath: [{ x: 0, y: 0, z: 24 }, { x: 90, y: -6, z: 24 }, { x: 180, y: -8, z: 23 }, { x: 260, y: -10, z: 22 }] }),
    ...edgePair({ id: 'meh_over_branch_s', from: 'meh_s_over', to: 'meh_center_over', length: 270, speedLimit: 65, congestion: 0.14, type: 'overpass', segmentName: '南向高架主接入', geometryPath: [{ x: -20, y: -260, z: 20 }, { x: -28, y: -180, z: 20 }, { x: -20, y: -92, z: 22 }, { x: -8, y: -30, z: 24 }, { x: 0, y: 0, z: 24 }] }),
    ...edgePair({ id: 'meh_over_branch_ne', from: 'meh_center_over', to: 'meh_ne_over', length: 305, speedLimit: 65, congestion: 0.12, type: 'overpass', segmentName: '高架东北向分流主线', geometryPath: [{ x: 0, y: 0, z: 24 }, { x: 55, y: 28, z: 24 }, { x: 120, y: 90, z: 24 }, { x: 172, y: 138, z: 24 }, { x: 220, y: 180, z: 24 }] }),
    ...edgePair({ id: 'meh_ground_main_w', from: 'meh_ground_w', to: 'meh_under_west_hub', length: 130, speedLimit: 40, congestion: 0.28, type: 'ground', segmentName: '西桥下辅路主段', geometryPath: [{ x: -250, y: -35, z: 0 }, { x: -200, y: -40, z: 0 }, { x: -155, y: -42, z: 0 }, { x: -120, y: -50, z: 0 }] }),
    ...edgePair({ id: 'meh_ground_mid', from: 'meh_under_west_hub', to: 'meh_ground_c', length: 122, speedLimit: 35, congestion: 0.26, type: 'ground', segmentName: '西桥下转换点至集散中心', geometryPath: [{ x: -120, y: -50, z: 0 }, { x: -85, y: -45, z: 0 }, { x: -42, y: -36, z: 0 }, { x: 0, y: -30, z: 0 }] }),
    ...edgePair({ id: 'meh_ground_main_e', from: 'meh_ground_c', to: 'meh_under_east_hub', length: 130, speedLimit: 35, congestion: 0.24, type: 'ground', segmentName: '集散中心至东桥下转换点', geometryPath: [{ x: 0, y: -30, z: 0 }, { x: 38, y: -28, z: 0 }, { x: 82, y: -30, z: 0 }, { x: 128, y: -34, z: 0 }] }),
    ...edgePair({ id: 'meh_ground_main_e2', from: 'meh_under_east_hub', to: 'meh_ground_e', length: 124, speedLimit: 40, congestion: 0.22, type: 'ground', segmentName: '东桥下辅路主段', geometryPath: [{ x: 128, y: -34, z: 0 }, { x: 168, y: -32, z: 0 }, { x: 210, y: -28, z: 0 }, { x: 250, y: -25, z: 0 }] }),
    ...edgePair({ id: 'meh_ground_sw', from: 'meh_sw_ground', to: 'meh_under_west_hub', length: 265, speedLimit: 35, congestion: 0.22, type: 'ground', segmentName: '西南城区入口联络道', geometryPath: [{ x: -180, y: -220, z: 0 }, { x: -150, y: -180, z: 0 }, { x: -128, y: -120, z: 0 }, { x: -120, y: -50, z: 0 }] }),
    ...edgePair({ id: 'meh_ground_se', from: 'meh_se_ground', to: 'meh_under_east_hub', length: 250, speedLimit: 35, congestion: 0.24, type: 'ground', segmentName: '东南城区入口联络道', geometryPath: [{ x: 180, y: -220, z: 0 }, { x: 162, y: -175, z: 0 }, { x: 142, y: -110, z: 0 }, { x: 128, y: -34, z: 0 }] }),
    ...edgePair({ id: 'meh_ground_center_n', from: 'meh_ground_c', to: 'meh_n_ground', length: 255, speedLimit: 40, congestion: 0.2, type: 'ground', segmentName: '桥下北向出城辅路', geometryPath: [{ x: 0, y: -30, z: 0 }, { x: 5, y: 32, z: 0 }, { x: 10, y: 102, z: 0 }, { x: 20, y: 220, z: 0 }] }),
    ...edgePair({ id: 'meh_ground_ne_link', from: 'meh_n_ground', to: 'meh_ground_ne', length: 195, speedLimit: 40, congestion: 0.18, type: 'ground', segmentName: '北侧地面联络至东北出城口', geometryPath: [{ x: 20, y: 220, z: 0 }, { x: 72, y: 225, z: 0 }, { x: 138, y: 232, z: 0 }, { x: 210, y: 240, z: 0 }] }),
    ...edgePair({ id: 'meh_service_road', from: 'meh_service_south', to: 'meh_ground_c', length: 235, speedLimit: 30, congestion: 0.2, type: 'ground', segmentName: '南侧服务路进桥下集散区', geometryPath: [{ x: 0, y: -260, z: 0 }, { x: 0, y: -188, z: 0 }, { x: 0, y: -112, z: 0 }, { x: 0, y: -30, z: 0 }] }),
    ...edgePair({ id: 'meh_ramp_sw_to_over', from: 'meh_sw_ground', to: 'meh_center_over', length: 330, speedLimit: 30, congestion: 0.18, type: 'ramp', segmentName: '西南半定向上桥匝道', geometryPath: [{ x: -180, y: -220, z: 0 }, { x: -165, y: -180, z: 2 }, { x: -120, y: -120, z: 10 }, { x: -72, y: -68, z: 16 }, { x: -30, y: -25, z: 21 }, { x: 0, y: 0, z: 24 }] }),
    ...edgePair({ id: 'meh_ramp_se_to_over', from: 'meh_se_ground', to: 'meh_center_over', length: 330, speedLimit: 30, congestion: 0.18, type: 'ramp', segmentName: '东南半定向上桥匝道', geometryPath: [{ x: 180, y: -220, z: 0 }, { x: 165, y: -178, z: 2 }, { x: 120, y: -120, z: 10 }, { x: 70, y: -66, z: 16 }, { x: 28, y: -22, z: 21 }, { x: 0, y: 0, z: 24 }] }),
    ...edgePair({ id: 'meh_ramp_over_to_ne', from: 'meh_e_over', to: 'meh_ne_over', length: 295, speedLimit: 40, congestion: 0.16, type: 'ramp', segmentName: '东向高架转东北分流匝道', geometryPath: [{ x: 260, y: -10, z: 22 }, { x: 225, y: 8, z: 22 }, { x: 180, y: 40, z: 23 }, { x: 120, y: 90, z: 24 }, { x: 170, y: 138, z: 24 }, { x: 220, y: 180, z: 24 }] }),
    ...edgePair({ id: 'meh_ramp_center_to_ground', from: 'meh_center_over', to: 'meh_ground_e', length: 305, speedLimit: 35, congestion: 0.18, type: 'ramp', segmentName: '高架汇聚后下桥至东辅路', geometryPath: [{ x: 0, y: 0, z: 24 }, { x: 40, y: -18, z: 22 }, { x: 82, y: -45, z: 16 }, { x: 132, y: -52, z: 9 }, { x: 190, y: -40, z: 3 }, { x: 250, y: -25, z: 0 }] }),
    ...edgePair({ id: 'meh_ramp_ne_to_ground', from: 'meh_ne_over', to: 'meh_ground_ne', length: 278, speedLimit: 35, congestion: 0.16, type: 'ramp', segmentName: '东北高架出口下坡至地面', geometryPath: [{ x: 220, y: 180, z: 24 }, { x: 190, y: 190, z: 22 }, { x: 150, y: 205, z: 18 }, { x: 105, y: 220, z: 12 }, { x: 58, y: 232, z: 6 }, { x: 210, y: 240, z: 0 }] }),
  ]

  return { nodes, edges, buildings: [] }
}

export function getTemplateRoutePreset(kind: SceneTemplateKind): TemplateRoutePreset {
  return SCENE_TEMPLATE_META.find((item) => item.kind === kind)?.recommendedRoute ?? SCENE_TEMPLATE_META[0].recommendedRoute
}

export function shouldMountBuiltInInterchange(network: RoadNetwork): boolean {
  return network.nodes.some((node) => node.id === 't_ic_hub')
}

export function createSceneTemplate(kind: SceneTemplateKind): RoadNetwork {
  switch (kind) {
    case 'current-campus':
      return cloneRoadNetwork(currentRoadTemplate)
    case 'stacked-overpass':
      return stackedOverpassTemplate()
    case 'diamond-interchange':
      return diamondInterchangeTemplate()
    case 'bridge-underpass':
      return bridgeUnderpassTemplate()
    case 'multi-level-express-hub':
      return multiLevelExpressHubTemplate()
    default:
      return cloneRoadNetwork(currentRoadTemplate)
  }
}
