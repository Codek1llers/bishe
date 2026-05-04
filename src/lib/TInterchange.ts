/**
 * 三向全互通 T 型立交（城市天际线风格）
 *
 * 坐标系：Three.js 标准，Y 轴向上；与项目路网一致时 RoadNode 为 (x=东, y=北, z=高)。
 * 本模块内部用 THREE.Vector3(x, y, z) 表示 (东, 高, 北)。
 */

import * as THREE from 'three'
import type { RoadEdge, RoadNode } from '../data/types'

// ————————————————————————————————————————————————————————————————
// 配色（与需求一致）
// ————————————————————————————————————————————————————————————————
export const T_IC_COLORS = {
  elevated: 0x00b8d4,
  ground: 0xfacc15,
  ramp: 0x9d4edd,
  pier: 0x424242,
  marking: 0xffffff,
  debugPoint: 0xffeb3b,
} as const

/** 曲线分段（≥50） */
const CURVE_SEGMENTS = 64
const DECK_THICK = 0.18
const RAMP_WIDTH = 9
const MAIN_WIDTH = 16
const PIER_SPACING_ELEVATED = 20
const PIER_SPACING_RAMP = 15
const PIER_RADIUS = 0.85

/**
 * 东西向高架桥面顶面（m）。与地面 GROUND_SURFACE_Y 的高差构成立交竖向层次（仅抬高架，地面主线贴地）。
 */
export const ELEVATED_SURFACE_Y = 30
/** 场景地坪：南北/西向主线、立交中心与地面路网同高 */
export const GROUND_SURFACE_Y = 0
/**
 * 与 GROUND_SURFACE_Y 相同，保留导出便于外部区分「立交地面层」语义
 */
export const T_IC_GROUND_MAIN_Y = GROUND_SURFACE_Y

/**
 * 手写匝道控制点采用「低 0 → 高 18」的相对尺度；映射到实际 [GROUND_SURFACE_Y, ELEVATED_SURFACE_Y]
 */
const LEGACY_RAMP_TOP_REF = 18

function liftInterchangeGroundY(y: number): number {
  const H = ELEVATED_SURFACE_Y
  const g = GROUND_SURFACE_Y
  if (y >= LEGACY_RAMP_TOP_REF - 1e-3) return H
  if (y <= GROUND_SURFACE_Y + 1e-3) return g
  return g + (y / LEGACY_RAMP_TOP_REF) * (H - g)
}

function liftPathToGroundMain(pts: THREE.Vector3[]): THREE.Vector3[] {
  return pts.map((p) => new THREE.Vector3(p.x, liftInterchangeGroundY(p.y), p.z))
}

/**
 * 实体沥青路面材质：不透明、深度写入、双面，避免透明穿模与排序错误
 * （配色仍由 color 传入：高架青蓝 / 地面深灰 / 匝道紫）
 */
function createAsphaltMaterial(color: number): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    color,
    transparent: false,
    opacity: 1,
    depthWrite: true,
    depthTest: true,
    side: THREE.DoubleSide,
    metalness: 0.2,
    roughness: 0.8,
  })
}

// ————————————————————————————————————————————————————————————————
// 可编辑路径：三条主线 + 6 条转向（单位：米）
// 控制点已做缓坡、大半径弯，经 Catmull-Rom 后无折线感；西向主线西端 x=-200（总长 200m）
// ————————————————————————————————————————————————————————————————

/** 东西高架主线 A：桥面顶面 y=ELEVATED_SURFACE_Y，总长 300m */
export const PATH_MAIN_A: THREE.Vector3[] = [
  new THREE.Vector3(-150, ELEVATED_SURFACE_Y, 0),
  new THREE.Vector3(150, ELEVATED_SURFACE_Y, 0),
]

/** 南北地面主线 B：顶面与地面同高 y=0 */
export const PATH_MAIN_B: THREE.Vector3[] = [
  new THREE.Vector3(0, GROUND_SURFACE_Y, -150),
  new THREE.Vector3(0, GROUND_SURFACE_Y, 150),
]

/** 西向地面主线 C：顶面与地面同高 y=0 */
export const PATH_MAIN_C: THREE.Vector3[] = [
  new THREE.Vector3(0, GROUND_SURFACE_Y, 0),
  new THREE.Vector3(-200, GROUND_SURFACE_Y, 0),
]

/**
 * 以下匝道控制点：端部约 20m 水平段保持高程不变（缓入/缓出），中间段坡度控制在约 5% 内，
 * 经 Catmull-Rom 平滑后无台阶感。
 */
/** 东→南 右转下坡（落地接地面 y=0；内部相对尺度经 lift 映射到 ELEVATED_SURFACE_Y） */
export const PATH_EAST_TO_SOUTH: THREE.Vector3[] = liftPathToGroundMain([
  new THREE.Vector3(150, ELEVATED_SURFACE_Y, 0),
  new THREE.Vector3(125, ELEVATED_SURFACE_Y, -9),
  new THREE.Vector3(90, 14.2, -30),
  new THREE.Vector3(55, 9.6, -52),
  new THREE.Vector3(22, 4.8, -78),
  new THREE.Vector3(-5, 1.2, -108),
  new THREE.Vector3(-6, 0.15, -135),
  new THREE.Vector3(0, GROUND_SURFACE_Y, -150),
])

/** 东→西 左转下坡 */
export const PATH_EAST_TO_WEST: THREE.Vector3[] = liftPathToGroundMain([
  new THREE.Vector3(150, ELEVATED_SURFACE_Y, 0),
  new THREE.Vector3(124, ELEVATED_SURFACE_Y, 14),
  new THREE.Vector3(82, 13.5, 38),
  new THREE.Vector3(32, 8.2, 58),
  new THREE.Vector3(-22, 3.6, 62),
  new THREE.Vector3(-78, 1.0, 52),
  new THREE.Vector3(-138, 0.25, 28),
  new THREE.Vector3(-200, GROUND_SURFACE_Y, 0),
])

/** 南→东 左转上坡 */
export const PATH_SOUTH_TO_EAST: THREE.Vector3[] = liftPathToGroundMain([
  new THREE.Vector3(0, GROUND_SURFACE_Y, -150),
  new THREE.Vector3(24, GROUND_SURFACE_Y, -124),
  new THREE.Vector3(52, 2.4, -96),
  new THREE.Vector3(80, 6.8, -68),
  new THREE.Vector3(108, 11.5, -40),
  new THREE.Vector3(132, 15.5, -14),
  new THREE.Vector3(147, 17.6, -2),
  new THREE.Vector3(150, ELEVATED_SURFACE_Y, 0),
])

/** 南→西 右转平路 */
export const PATH_SOUTH_TO_WEST: THREE.Vector3[] = liftPathToGroundMain([
  new THREE.Vector3(0, GROUND_SURFACE_Y, -150),
  new THREE.Vector3(-32, GROUND_SURFACE_Y, -125),
  new THREE.Vector3(-68, GROUND_SURFACE_Y, -95),
  new THREE.Vector3(-105, GROUND_SURFACE_Y, -62),
  new THREE.Vector3(-145, GROUND_SURFACE_Y, -28),
  new THREE.Vector3(-200, GROUND_SURFACE_Y, 0),
])

/** 西→东 直行上坡 */
export const PATH_WEST_TO_EAST: THREE.Vector3[] = liftPathToGroundMain([
  new THREE.Vector3(-200, GROUND_SURFACE_Y, 0),
  new THREE.Vector3(-172, GROUND_SURFACE_Y, 0),
  new THREE.Vector3(-130, 2.2, 0),
  new THREE.Vector3(-85, 6.5, 0),
  new THREE.Vector3(-38, 11.0, 0),
  new THREE.Vector3(12, 14.8, 0),
  new THREE.Vector3(70, 16.9, 0),
  new THREE.Vector3(120, 17.7, 0),
  new THREE.Vector3(150, ELEVATED_SURFACE_Y, 0),
])

/** 西→南 右转平路 */
export const PATH_WEST_TO_SOUTH: THREE.Vector3[] = liftPathToGroundMain([
  new THREE.Vector3(-200, GROUND_SURFACE_Y, 0),
  new THREE.Vector3(-165, GROUND_SURFACE_Y, -28),
  new THREE.Vector3(-125, GROUND_SURFACE_Y, -58),
  new THREE.Vector3(-82, GROUND_SURFACE_Y, -88),
  new THREE.Vector3(-38, GROUND_SURFACE_Y, -118),
  new THREE.Vector3(0, GROUND_SURFACE_Y, -150),
])

// ————————————————————————————————————————————————————————————————
// 节点 ID（导航/地名）
// ————————————————————————————————————————————————————————————————
export const T_IC_NODE = {
  hub: 't_ic_hub',
  aWest: 't_ic_a_w',
  aEast: 't_ic_a_e',
  bSouth: 't_ic_b_s',
  bNorth: 't_ic_b_n',
  cWest: 't_ic_c_w',
  /** 东向匝道桥下集散（地面） */
  underE: 't_ic_under_e',
  /** 南侧青蓝高架桥下辅路（地面） */
  underS: 't_ic_under_s',
  /** 西段青蓝高架桥下辅路（地面） */
  underW: 't_ic_under_w',
} as const

/** 立交路网节点（可并入 roadNetwork.nodes） */
export function getTInterchangeNodes(): RoadNode[] {
  return [
    {
      id: T_IC_NODE.hub,
      x: 0,
      y: 0,
      z: GROUND_SURFACE_Y,
      layer: 0,
      name: '北林T型立交中心',
      isLandmark: true,
      landmarkType: 'intersection',
    },
    {
      id: T_IC_NODE.aWest,
      x: -150,
      y: 0,
      z: ELEVATED_SURFACE_Y,
      layer: 1,
      name: '立交东西主线西端(高架)',
      isLandmark: true,
      landmarkType: 'intersection',
    },
    {
      id: T_IC_NODE.aEast,
      x: 150,
      y: 0,
      z: ELEVATED_SURFACE_Y,
      layer: 1,
      name: '立交东西主线东端(高架)',
      isLandmark: true,
      landmarkType: 'intersection',
    },
    {
      id: T_IC_NODE.bSouth,
      x: 0,
      y: -150,
      z: GROUND_SURFACE_Y,
      layer: 0,
      name: '立交南北主线南端',
      isLandmark: true,
      landmarkType: 'intersection',
    },
    {
      id: T_IC_NODE.bNorth,
      x: 0,
      y: 150,
      z: GROUND_SURFACE_Y,
      layer: 0,
      name: '立交南北主线北端',
      isLandmark: true,
      landmarkType: 'intersection',
    },
    {
      id: T_IC_NODE.cWest,
      x: -200,
      y: 0,
      z: GROUND_SURFACE_Y,
      layer: 0,
      name: '立交西向主线西端',
      isLandmark: true,
      landmarkType: 'intersection',
    },
    {
      id: T_IC_NODE.underE,
      x: 68,
      y: -40,
      z: GROUND_SURFACE_Y,
      layer: 0,
      name: '东向匝道桥下集散点',
      isLandmark: true,
      landmarkType: 'intersection',
    },
    {
      id: T_IC_NODE.underS,
      x: 14,
      y: -108,
      z: GROUND_SURFACE_Y,
      layer: 0,
      name: '南侧青蓝高架桥下辅路',
      isLandmark: true,
      landmarkType: 'intersection',
    },
    {
      id: T_IC_NODE.underW,
      x: -92,
      y: 14,
      z: GROUND_SURFACE_Y,
      layer: 0,
      name: '西段青蓝高架桥下辅路',
      isLandmark: true,
      landmarkType: 'intersection',
    },
  ]
}

/** 立交桥下地面联络（由 Scene3D 常规拉直路段绘制，非立交组内 ribbon） */
function makeUnderpassGroundEdge(
  id: string,
  from: string,
  to: string,
  length: number,
  segmentName: string
): RoadEdge {
  return {
    id,
    from,
    to,
    length,
    speedLimit: 40,
    congestion: 0.2,
    type: 'ground',
    segmentName,
  }
}

function vec3ToGeometryPath(p: THREE.Vector3[]): Array<{ x: number; y: number; z: number }> {
  return p.map((v) => ({ x: v.x, y: v.z, z: v.y }))
}

function makeRampEdge(
  id: string,
  from: string,
  to: string,
  path: THREE.Vector3[],
  type: 'ramp' | 'overpass' | 'ground',
  segmentName: string
): RoadEdge {
  const curve = new THREE.CatmullRomCurve3(path, false, 'catmullrom', 0.5)
  return {
    id,
    from,
    to,
    length: Math.round(curve.getLength() * 10) / 10,
    speedLimit: 40,
    congestion: 0.18,
    type,
    segmentName,
    geometryPath: vec3ToGeometryPath(path),
    renderInScene: false,
  }
}

function makeStraightEdge(
  id: string,
  from: string,
  to: string,
  length: number,
  type: 'overpass' | 'ground',
  segmentName: string
): RoadEdge {
  return {
    id,
    from,
    to,
    length,
    speedLimit: type === 'overpass' ? 80 : 60,
    congestion: 0.15,
    type,
    segmentName,
    renderInScene: false,
  }
}

/** 立交专用边（单向定义；与 bidirectionalEdges 合并时自动生成反向边） */
export function getTInterchangeDirectedEdges(): RoadEdge[] {
  return [
    makeStraightEdge('t_ic_e_main', T_IC_NODE.aWest, T_IC_NODE.aEast, 300, 'overpass', '青蓝高架主线（东西向）'),
    /** 南北向拆成两段，必经 hub，否则中心节点无法参与路径规划 */
    makeStraightEdge('t_ic_ns_s', T_IC_NODE.bSouth, T_IC_NODE.hub, 150, 'ground', '南北地面主线（南—立交中心）'),
    makeStraightEdge('t_ic_ns_n', T_IC_NODE.hub, T_IC_NODE.bNorth, 150, 'ground', '南北地面主线（立交中心—北）'),
    makeStraightEdge('t_ic_c_main', T_IC_NODE.cWest, T_IC_NODE.hub, 200, 'ground', '西向地面主线（西端—立交中心）'),
    makeRampEdge('t_ic_r_es', T_IC_NODE.aEast, T_IC_NODE.bSouth, PATH_EAST_TO_SOUTH, 'ramp', '东→南下匝道'),
    makeRampEdge('t_ic_r_ew', T_IC_NODE.aEast, T_IC_NODE.cWest, PATH_EAST_TO_WEST, 'ramp', '东→西下匝道'),
    makeRampEdge('t_ic_r_se', T_IC_NODE.bSouth, T_IC_NODE.aEast, PATH_SOUTH_TO_EAST, 'ramp', '南→东上匝道'),
    makeRampEdge('t_ic_r_sw', T_IC_NODE.bSouth, T_IC_NODE.cWest, PATH_SOUTH_TO_WEST, 'ramp', '南→西地面转向匝道'),
    makeRampEdge('t_ic_r_we', T_IC_NODE.cWest, T_IC_NODE.aEast, PATH_WEST_TO_EAST, 'ramp', '西→东上匝道'),
    makeRampEdge('t_ic_r_ws', T_IC_NODE.cWest, T_IC_NODE.bSouth, PATH_WEST_TO_SOUTH, 'ramp', '西→南地面转向匝道'),
    // 桥下地面辅路：与上/下匝道投影接近、全程贴地，便于对比「同区不同层」
    makeUnderpassGroundEdge('t_ic_g_hub_ue', T_IC_NODE.hub, T_IC_NODE.underE, 79, '立交中心—东匝道桥下集散联络道'),
    makeUnderpassGroundEdge('t_ic_g_ue_us', T_IC_NODE.underE, T_IC_NODE.underS, 87, '东→南匝道投影下地面辅路'),
    makeUnderpassGroundEdge('t_ic_g_us_bs', T_IC_NODE.underS, T_IC_NODE.bSouth, 44, '南侧桥下辅路—南北主线南端'),
    makeUnderpassGroundEdge('t_ic_g_cw_uw', T_IC_NODE.cWest, T_IC_NODE.underW, 109, '西向地面主线—西段桥下辅路'),
    makeUnderpassGroundEdge('t_ic_g_uw_hub', T_IC_NODE.underW, T_IC_NODE.hub, 93, '西段桥下辅路—立交中心'),
    makeUnderpassGroundEdge('t_ic_g_uw_ue', T_IC_NODE.underW, T_IC_NODE.underE, 169, '青蓝高架桥下东西向地面辅路'),
  ]
}

// ————————————————————————————————————————————————————————————————
// 几何：带状路面 + 法线
// ————————————————————————————————————————————————————————————————

function buildRibbonGeometry(curve: THREE.CatmullRomCurve3, width: number, segments: number): THREE.BufferGeometry {
  const halfW = width * 0.5
  const up = new THREE.Vector3(0, 1, 0)
  const positions: number[] = []
  const uvs: number[] = []
  const indices: number[] = []

  for (let i = 0; i <= segments; i++) {
    const u = i / segments
    const p = curve.getPointAt(u)
    const tan = curve.getTangentAt(u).normalize()
    let side = new THREE.Vector3().crossVectors(tan, up)
    if (side.lengthSq() < 1e-10) {
      side = new THREE.Vector3().crossVectors(new THREE.Vector3(1, 0, 0), tan)
    }
    side.normalize()
    const l = p.clone().add(side.clone().multiplyScalar(halfW))
    const r = p.clone().add(side.clone().multiplyScalar(-halfW))
    positions.push(l.x, l.y, l.z, r.x, r.y, r.z)
    uvs.push(0, u, 1, u)
  }

  for (let i = 0; i < segments; i++) {
    const b = i * 2
    indices.push(b, b + 1, b + 2)
    indices.push(b + 1, b + 3, b + 2)
  }

  const geom = new THREE.BufferGeometry()
  geom.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
  geom.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2))
  geom.setIndex(indices)
  geom.computeVertexNormals()
  return geom
}

function createRoadMesh(geometry: THREE.BufferGeometry, color: number, yOffset = 0): THREE.Mesh {
  const mat = createAsphaltMaterial(color)
  const mesh = new THREE.Mesh(geometry, mat)
  mesh.position.y += yOffset
  mesh.castShadow = true
  mesh.receiveShadow = true
  /** 路径清除高亮时恢复本色（Scene3D 读取） */
  mesh.userData.restColor = color
  mesh.renderOrder = 0
  return mesh
}

/**
 * 直线主线：Box 顶面与 path 中点 mid.y 对齐为「行车道顶面」，
 * 箱体中心在顶面下厚度的一半；高架顶面为 mid.y，地面主线 mid.y=0 时顶面贴地。
 */
function createStraightMainMesh(
  start: THREE.Vector3,
  end: THREE.Vector3,
  width: number,
  thickness: number,
  color: number
): THREE.Mesh {
  const dir = new THREE.Vector3().subVectors(end, start)
  const len = dir.length()
  const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5)
  const angle = Math.atan2(dir.z, dir.x)
  const geom = new THREE.BoxGeometry(len, thickness, width)
  const mesh = createRoadMesh(geom, color, 0)
  mesh.position.copy(mid)
  mesh.position.y = mid.y - thickness / 2
  mesh.rotation.y = -angle
  return mesh
}

function addPier(group: THREE.Group, x: number, z: number, topY: number) {
  const bottomY = 0
  const h = Math.max(0.5, topY - bottomY)
  const geom = new THREE.CylinderGeometry(PIER_RADIUS, PIER_RADIUS * 1.05, h, 16)
  const mat = new THREE.MeshStandardMaterial({
    color: T_IC_COLORS.pier,
    transparent: false,
    opacity: 1,
    depthWrite: true,
    depthTest: true,
    side: THREE.DoubleSide,
    metalness: 0.2,
    roughness: 0.75,
  })
  const m = new THREE.Mesh(geom, mat)
  m.position.set(x, bottomY + h / 2, z)
  m.castShadow = true
  m.receiveShadow = true
  group.add(m)
}

/** 沿曲线按弧长近似等距放置桥墩（避免用 u∝弧长 的误差） */
function addPiersAlongCurveArcLength(group: THREE.Group, curve: THREE.CatmullRomCurve3, spacing: number) {
  const totalLen = curve.getLength()
  if (totalLen < 2) return
  let targetDist = spacing * 0.4
  let accumulated = 0
  const subdiv = 500
  let last = curve.getPointAt(0)
  for (let i = 1; i <= subdiv; i++) {
    const u = i / subdiv
    const p = curve.getPointAt(u)
    accumulated += last.distanceTo(p)
    last = p.clone()
    if (accumulated >= targetDist && targetDist < totalLen + spacing) {
      addPier(group, p.x, p.z, p.y - DECK_THICK * 0.35)
      targetDist += spacing
    }
  }
}

/** 白色虚线：沿中线左右偏移两条车道线 */
function addDashedLaneLines(
  group: THREE.Group,
  curve: THREE.CatmullRomCurve3,
  segments: number,
  offset: number,
  dashLen: number,
  gapLen: number
) {
  const mat = new THREE.LineDashedMaterial({
    color: T_IC_COLORS.marking,
    dashSize: dashLen,
    gapSize: gapLen,
    linewidth: 1,
    transparent: false,
    opacity: 1,
    depthWrite: true,
    depthTest: true,
  })
  const up = new THREE.Vector3(0, 1, 0)

  for (const sign of [-1, 1] as const) {
    const pts: THREE.Vector3[] = []
    for (let i = 0; i <= segments; i++) {
      const u = i / segments
      const p = curve.getPointAt(u)
      const tan = curve.getTangentAt(u).normalize()
      let side = new THREE.Vector3().crossVectors(tan, up)
      if (side.lengthSq() < 1e-10) side = new THREE.Vector3().crossVectors(new THREE.Vector3(1, 0, 0), tan)
      side.normalize()
      const o = p.clone().add(side.multiplyScalar(sign * offset))
      o.y += 0.14
      pts.push(o)
    }
    const geo = new THREE.BufferGeometry().setFromPoints(pts)
    const line = new THREE.Line(geo, mat)
    line.computeLineDistances()
    line.renderOrder = 10
    group.add(line)
  }
}

/** 行驶方向箭头（沿切线） */
function addDirectionArrows(group: THREE.Group, curve: THREE.CatmullRomCurve3, color: number, count = 3) {
  const coneGeom = new THREE.ConeGeometry(1.1, 3.2, 8)
  const coneMat = new THREE.MeshStandardMaterial({
    color,
    transparent: false,
    opacity: 1,
    depthWrite: true,
    depthTest: true,
    side: THREE.DoubleSide,
    metalness: 0.15,
    roughness: 0.75,
    emissive: 0x111111,
    emissiveIntensity: 0.02,
  })
  for (let k = 1; k <= count; k++) {
    const u = k / (count + 1)
    const p = curve.getPointAt(u)
    const tan = curve.getTangentAt(u).normalize()
    p.y += 0.22
    const mesh = new THREE.Mesh(coneGeom.clone(), coneMat)
    mesh.position.copy(p)
    const q = new THREE.Quaternion()
    q.setFromUnitVectors(new THREE.Vector3(0, 1, 0), tan)
    mesh.quaternion.copy(q)
    mesh.castShadow = true
    mesh.renderOrder = 11
    group.add(mesh)
  }
}

function addDebugSpheres(group: THREE.Group, points: THREE.Vector3[]) {
  const g = new THREE.SphereGeometry(1.2, 12, 12)
  const m = new THREE.MeshStandardMaterial({
    color: T_IC_COLORS.debugPoint,
    transparent: false,
    opacity: 1,
    depthWrite: true,
    side: THREE.DoubleSide,
    metalness: 0.2,
    roughness: 0.6,
    emissive: T_IC_COLORS.debugPoint,
    emissiveIntensity: 0.15,
  })
  for (const p of points) {
    const mesh = new THREE.Mesh(g, m)
    mesh.position.copy(p)
    group.add(mesh)
  }
}

export interface TInterchangeBuildResult {
  /** 根组，可直接 scene.add */
  group: THREE.Group
  /** 边 id → 路面 Mesh，用于路径高亮 */
  edgeMeshes: Map<string, THREE.Mesh>
}

/** 可编辑路径集：修改后调用 TInterchange.build() 或 buildTInterchangeFromPaths */
export type TInterchangePathSet = {
  mainA: THREE.Vector3[]
  mainB: THREE.Vector3[]
  mainC: THREE.Vector3[]
  eastToSouth: THREE.Vector3[]
  eastToWest: THREE.Vector3[]
  southToEast: THREE.Vector3[]
  southToWest: THREE.Vector3[]
  westToEast: THREE.Vector3[]
  westToSouth: THREE.Vector3[]
}

function clonePathSet(paths: TInterchangePathSet): TInterchangePathSet {
  const c = (arr: THREE.Vector3[]) => arr.map((p) => p.clone())
  return {
    mainA: c(paths.mainA),
    mainB: c(paths.mainB),
    mainC: c(paths.mainC),
    eastToSouth: c(paths.eastToSouth),
    eastToWest: c(paths.eastToWest),
    southToEast: c(paths.southToEast),
    southToWest: c(paths.southToWest),
    westToEast: c(paths.westToEast),
    westToSouth: c(paths.westToSouth),
  }
}

export const DEFAULT_T_INTERCHANGE_PATHS: TInterchangePathSet = {
  mainA: PATH_MAIN_A,
  mainB: PATH_MAIN_B,
  mainC: PATH_MAIN_C,
  eastToSouth: PATH_EAST_TO_SOUTH,
  eastToWest: PATH_EAST_TO_WEST,
  southToEast: PATH_SOUTH_TO_EAST,
  southToWest: PATH_SOUTH_TO_WEST,
  westToEast: PATH_WEST_TO_EAST,
  westToSouth: PATH_WEST_TO_SOUTH,
}

/**
 * 生成立交三维组：主线盒体 + 匝道 ribbon + 桥墩 + 虚线 + 箭头 + 调试用控制点球
 * @param paths 控制点（可编辑）；默认使用内置 DEFAULT_T_INTERCHANGE_PATHS
 */
export function buildTInterchangeFromPaths(paths: TInterchangePathSet): TInterchangeBuildResult {
  const root = new THREE.Group()
  root.name = 'TInterchange'
  const edgeMeshes = new Map<string, THREE.Mesh>()

  const aStart = paths.mainA[0].clone()
  const aEnd = paths.mainA[paths.mainA.length - 1].clone()
  const meshA = createStraightMainMesh(aStart, aEnd, MAIN_WIDTH, DECK_THICK, T_IC_COLORS.elevated)
  meshA.userData.edgeId = 't_ic_e_main'
  root.add(meshA)
  edgeMeshes.set('t_ic_e_main', meshA)

  /** 桥墩顶应与箱梁底贴合：行车面在 aStart.y，梁底在其下 DECK_THICK */
  const deckUndersideA = aStart.y - DECK_THICK
  for (let x = -140; x <= 140; x += PIER_SPACING_ELEVATED) {
    addPier(root, x, 0, deckUndersideA)
  }

  const bStart = paths.mainB[0].clone()
  const bEnd = paths.mainB[paths.mainB.length - 1].clone()
  const meshB = createStraightMainMesh(bStart, bEnd, MAIN_WIDTH, DECK_THICK, T_IC_COLORS.ground)
  meshB.userData.edgeId = 't_ic_ns_s'
  root.add(meshB)
  edgeMeshes.set('t_ic_ns_s', meshB)
  edgeMeshes.set('t_ic_ns_n', meshB)

  const cStart = paths.mainC[0].clone()
  const cEnd = paths.mainC[paths.mainC.length - 1].clone()
  const meshC = createStraightMainMesh(cStart, cEnd, MAIN_WIDTH, DECK_THICK, T_IC_COLORS.ground)
  meshC.userData.edgeId = 't_ic_c_main'
  root.add(meshC)
  edgeMeshes.set('t_ic_c_main', meshC)

  const rampDefs: { id: string; path: THREE.Vector3[] }[] = [
    { id: 't_ic_r_es', path: paths.eastToSouth },
    { id: 't_ic_r_ew', path: paths.eastToWest },
    { id: 't_ic_r_se', path: paths.southToEast },
    { id: 't_ic_r_sw', path: paths.southToWest },
    { id: 't_ic_r_we', path: paths.westToEast },
    { id: 't_ic_r_ws', path: paths.westToSouth },
  ]

  for (const { id, path } of rampDefs) {
    const curve = new THREE.CatmullRomCurve3(path, false, 'catmullrom', 0.5)
    const geo = buildRibbonGeometry(curve, RAMP_WIDTH, CURVE_SEGMENTS)
    const mesh = createRoadMesh(geo, T_IC_COLORS.ramp, 0)
    mesh.userData.edgeId = id
    root.add(mesh)
    edgeMeshes.set(id, mesh)

    addDashedLaneLines(root, curve, CURVE_SEGMENTS, RAMP_WIDTH * 0.22, 4, 3.5)
    addDirectionArrows(root, curve, T_IC_COLORS.marking, 3)
    addPiersAlongCurveArcLength(root, curve, PIER_SPACING_RAMP)
    addDebugSpheres(root, path)
  }

  const curveA = new THREE.CatmullRomCurve3(paths.mainA, false, 'catmullrom', 0.5)
  addDashedLaneLines(root, curveA, 48, MAIN_WIDTH * 0.22, 6, 4)
  addDirectionArrows(root, curveA, T_IC_COLORS.marking, 2)
  const curveB = new THREE.CatmullRomCurve3(paths.mainB, false, 'catmullrom', 0.5)
  addDashedLaneLines(root, curveB, 48, MAIN_WIDTH * 0.22, 6, 4)
  addDirectionArrows(root, curveB, T_IC_COLORS.marking, 2)
  const curveC = new THREE.CatmullRomCurve3(paths.mainC, false, 'catmullrom', 0.5)
  addDashedLaneLines(root, curveC, 36, MAIN_WIDTH * 0.22, 6, 4)
  addDirectionArrows(root, curveC, T_IC_COLORS.marking, 2)

  addDebugSpheres(root, [...paths.mainA, ...paths.mainB, ...paths.mainC])

  return { group: root, edgeMeshes }
}

export function buildTInterchange(): TInterchangeBuildResult {
  return buildTInterchangeFromPaths(clonePathSet(DEFAULT_T_INTERCHANGE_PATHS))
}

/**
 * 封装类：路径数组可直接在外部修改后调用 build()
 */
export class TInterchange {
  paths: TInterchangePathSet = clonePathSet(DEFAULT_T_INTERCHANGE_PATHS)

  build(): TInterchangeBuildResult {
    return buildTInterchangeFromPaths(this.paths)
  }
}
