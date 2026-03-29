/**
 * 路径信息面板
 * 显示规划路径的详细信息
 */

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card'
import { PathResult, RoadNode } from '@/data/types'
import { Route, Clock, Ruler, AlertTriangle, Sparkles } from 'lucide-react'

interface PathInfoPanelProps {
  pathResult: PathResult | null
  /** 用于显示途径地点名 */
  nodes: RoadNode[]
}

// 格式化时间
function formatTime(seconds: number): string {
  if (seconds < 60) {
    return `${Math.round(seconds)}秒`
  }
  const minutes = Math.floor(seconds / 60)
  const secs = Math.round(seconds % 60)
  if (minutes < 60) {
    return `${minutes}分${secs}秒`
  }
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  return `${hours}时${mins}分`
}

// 格式化距离
function formatDistance(meters: number): string {
  if (meters < 1000) {
    return `${Math.round(meters)}米`
  }
  return `${(meters / 1000).toFixed(2)}公里`
}

// 获取道路类型颜色
function getRoadTypeColor(type: string): string {
  switch (type) {
    case 'ground':
      return 'bg-road-ground'
    case 'overpass':
      return 'bg-road-overpass'
    case 'ramp':
      return 'bg-road-ramp'
    default:
      return 'bg-muted'
  }
}

// 获取道路类型名称
function getRoadTypeName(type: string): string {
  switch (type) {
    case 'ground':
      return '地面道路'
    case 'overpass':
      return '高架桥'
    case 'ramp':
      return '匝道'
    default:
      return '未知'
  }
}

function generateSmartInsight(pathResult: PathResult): string {
  const rampDistance = pathResult.edges
    .filter(edge => edge.type === 'ramp')
    .reduce((sum, edge) => sum + edge.length, 0)
  const overpassDistance = pathResult.edges
    .filter(edge => edge.type === 'overpass')
    .reduce((sum, edge) => sum + edge.length, 0)
  const avgCongestion = pathResult.edges.reduce((sum, e) => sum + e.congestion, 0) / pathResult.edges.length
  const highCongestionCount = pathResult.edges.filter(edge => edge.congestion >= 0.5).length

  if (highCongestionCount >= 2) {
    return '智能建议：这条路线存在连续拥堵路段，适合在拥堵设置里优先调高“时间”或“拥堵”权重，再重新规划。'
  }

  if (rampDistance + overpassDistance > pathResult.totalLength * 0.35) {
    return '智能建议：当前路线较多依赖高架与匝道，通行效率高，但跟车观察时更适合使用跟车视角查看上下层切换。'
  }

  if (avgCongestion < 0.25) {
    return '智能建议：这条路线整体较顺畅，适合用于演示路径规划与三维道路切换效果。'
  }

  return '智能建议：当前路线在长度与通行效率之间较均衡，可以继续通过拥堵面板做对比实验。'
}

export const PathInfoPanel: React.FC<PathInfoPanelProps> = ({ pathResult, nodes }) => {
  if (!pathResult) {
    return null
  }

  const nodeMap = new Map(nodes.map((n) => [n.id, n]))

  // 统计道路类型
  const roadTypeStats = pathResult.edges.reduce((acc, edge) => {
    acc[edge.type] = (acc[edge.type] || 0) + edge.length
    return acc
  }, {} as Record<string, number>)

  // 计算平均拥堵
  const avgCongestion = pathResult.edges.reduce((sum, e) => sum + e.congestion, 0) / pathResult.edges.length
  const smartInsight = generateSmartInsight(pathResult)

  return (
    <Card className="w-80 animate-fade-in">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-base">
          <Route className="h-4 w-4 text-primary" />
          路径信息
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* 基本信息 */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Ruler className="h-3 w-3" />
              总距离
            </div>
            <p className="text-lg font-semibold text-primary">
              {formatDistance(pathResult.totalLength)}
            </p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              预计时间
            </div>
            <p className="text-lg font-semibold text-accent">
              {formatTime(pathResult.estimatedTime)}
            </p>
          </div>
        </div>

        {/* 拥堵指数 */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground flex items-center gap-1">
              <AlertTriangle className="h-3 w-3" />
              平均拥堵
            </span>
            <span className={`font-medium ${
              avgCongestion > 0.5 ? 'text-destructive' : 
              avgCongestion > 0.3 ? 'text-accent' : 'text-success'
            }`}>
              {(avgCongestion * 100).toFixed(0)}%
            </span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all ${
                avgCongestion > 0.5 ? 'bg-destructive' : 
                avgCongestion > 0.3 ? 'bg-accent' : 'bg-success'
              }`}
              style={{ width: `${avgCongestion * 100}%` }}
            />
          </div>
        </div>

        {/* 道路类型统计 */}
        <div className="space-y-2">
          <p className="text-xs text-muted-foreground">道路构成</p>
          <div className="space-y-2">
            {Object.entries(roadTypeStats).map(([type, length]) => (
              <div key={type} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${getRoadTypeColor(type)}`} />
                <span className="text-sm flex-1">{getRoadTypeName(type)}</span>
                <span className="text-xs text-muted-foreground">
                  {formatDistance(length)}
                </span>
                <span className="text-xs text-muted-foreground">
                  ({((length / pathResult.totalLength) * 100).toFixed(0)}%)
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 节点数量 */}
        <div className="flex items-center justify-between text-sm border-t border-border pt-3">
          <span className="text-muted-foreground">经过地点</span>
          <span className="font-medium">{pathResult.path.length} 个</span>
        </div>

        {/* 路段明细：路段名 + 起讫地点 */}
        <div className="space-y-2 border-t border-border pt-3">
          <p className="text-xs text-muted-foreground">路段明细（含名称）</p>
          <ul className="max-h-40 overflow-y-auto space-y-1.5 text-xs pr-1">
            {pathResult.edges.map((edge, i) => {
              const fromN = nodeMap.get(pathResult.path[i])
              const toN = nodeMap.get(pathResult.path[i + 1])
              const title = edge.segmentName ?? edge.id
              return (
                <li
                  key={`${edge.id}-${i}`}
                  className="rounded border border-border/60 bg-muted/30 px-2 py-1.5 leading-relaxed"
                >
                  <span className="font-medium text-foreground/90">{title}</span>
                  <span className="text-muted-foreground">
                    {' '}
                    · {getRoadTypeName(edge.type)} · {formatDistance(edge.length)}
                  </span>
                  {(fromN || toN) && (
                    <div className="mt-0.5 text-muted-foreground">
                      {fromN?.name ?? '?'} → {toN?.name ?? '?'}
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        </div>

        <div className="rounded-lg border border-primary/20 bg-primary/5 p-3">
          <div className="mb-1 flex items-center gap-2 text-xs font-medium text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            智能导航建议
          </div>
          <p className="text-sm leading-6 text-foreground/85">
            {smartInsight}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export default PathInfoPanel
