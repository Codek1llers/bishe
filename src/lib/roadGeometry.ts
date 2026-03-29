/**
 * 道路中心线：普通边为线性插值；带 geometryPath 的边为 Catmull-Rom 样条（立交匝道）
 */

import * as THREE from 'three'
import { RoadEdge, RoadNode } from '../data/types'

const SEGMENTS_PER_EDGE = 32
const SPLINE_SEGMENTS = 64

export type RoadGeometryContext = {
  nodeMap: Map<string, RoadNode>
  networkEdges: import('../data/types').RoadEdge[]
  is3DMode: boolean
}

export function buildEdgeCenterlinePoints(
  edge: RoadEdge,
  fromNode: RoadNode,
  toNode: RoadNode,
  ctx: RoadGeometryContext
): THREE.Vector3[] {
  if (edge.geometryPath && edge.geometryPath.length >= 2) {
    const pts = edge.geometryPath.map((p) => new THREE.Vector3(p.x, p.z, p.y))
    const curve = new THREE.CatmullRomCurve3(pts, false, 'catmullrom', 0.5)
    const n = SPLINE_SEGMENTS
    const out: THREE.Vector3[] = []
    for (let i = 0; i <= n; i++) {
      out.push(curve.getPointAt(i / n))
    }
    if (!ctx.is3DMode) {
      return out.map((v) => new THREE.Vector3(v.x, 0, v.z))
    }
    return out
  }

  const startY = ctx.is3DMode ? fromNode.z : 0
  const endY = ctx.is3DMode ? toNode.z : 0
  const start = new THREE.Vector3(fromNode.x, startY, fromNode.y)
  const end = new THREE.Vector3(toNode.x, endY, toNode.y)
  const pts: THREE.Vector3[] = []
  const n = SEGMENTS_PER_EDGE
  for (let i = 0; i <= n; i++) {
    const t = i / n
    pts.push(
      new THREE.Vector3(
        THREE.MathUtils.lerp(start.x, end.x, t),
        THREE.MathUtils.lerp(start.y, end.y, t),
        THREE.MathUtils.lerp(start.z, end.z, t)
      )
    )
  }
  return pts
}

export function buildCumulativeLengths(points: THREE.Vector3[]): number[] {
  const cum: number[] = [0]
  for (let i = 0; i < points.length - 1; i++) {
    cum.push(cum[cum.length - 1] + points[i].distanceTo(points[i + 1]))
  }
  return cum
}

export function positionAtArcLength(
  points: THREE.Vector3[],
  cumulative: number[],
  arcDistance: number
): THREE.Vector3 {
  const total = cumulative[cumulative.length - 1]
  const s = Math.max(0, Math.min(arcDistance, total))
  if (points.length === 1) return points[0].clone()

  let i = 0
  while (i < cumulative.length - 2 && cumulative[i + 1] < s) i++

  const s0 = cumulative[i]
  const s1 = cumulative[i + 1]
  const segLen = s1 - s0
  const u = segLen < 1e-8 ? 0 : (s - s0) / segLen
  return new THREE.Vector3().lerpVectors(points[i], points[i + 1], u)
}
