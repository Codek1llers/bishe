/**
 * 道路拥堵设置面板
 * 允许用户选择道路并设置拥堵值
 */

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card'
import { Button } from './ui/Button'
import { RoadEdge } from '@/data/types'
import { AlertTriangle, MousePointer2, X } from 'lucide-react'

interface CongestionPanelProps {
  selectedEdge: RoadEdge | null
  isSelectingRoad: boolean
  onToggleSelectMode: () => void
  onCongestionChange: (edgeId: string, congestion: number) => void
  onClearSelection: () => void
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

// 获取拥堵状态描述
function getCongestionStatus(congestion: number): { text: string; color: string } {
  if (congestion >= 0.7) {
    return { text: '严重拥堵', color: 'text-destructive' }
  } else if (congestion >= 0.4) {
    return { text: '中度拥堵', color: 'text-accent' }
  } else if (congestion >= 0.2) {
    return { text: '轻度拥堵', color: 'text-primary' }
  }
  return { text: '畅通', color: 'text-success' }
}

export const CongestionPanel: React.FC<CongestionPanelProps> = ({
  selectedEdge,
  isSelectingRoad,
  onToggleSelectMode,
  onCongestionChange,
  onClearSelection,
}) => {
  return (
    <Card className="w-80 animate-fade-in">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-base">
          <AlertTriangle className="h-4 w-4 text-accent" />
          道路拥堵设置
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* 选择道路按钮 */}
        <Button
          variant={isSelectingRoad ? 'accent' : 'outline'}
          onClick={onToggleSelectMode}
          className="w-full"
        >
          <MousePointer2 className="h-4 w-4 mr-2" />
          {isSelectingRoad ? '点击地图选择道路...' : '选择道路设置拥堵'}
        </Button>

        {/* 已选择的道路信息 */}
        {selectedEdge ? (
          <div className="space-y-3 border border-border rounded-lg p-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">已选道路</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClearSelection}
                className="h-6 w-6"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* 道路信息 */}
            {selectedEdge.segmentName && (
              <div className="text-sm">
                <span className="text-muted-foreground">路段名:</span>
                <span className="ml-1 font-medium">{selectedEdge.segmentName}</span>
              </div>
            )}
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <span className="text-muted-foreground">类型:</span>
                <span className="ml-1">{getRoadTypeName(selectedEdge.type)}</span>
              </div>
              <div>
                <span className="text-muted-foreground">限速:</span>
                <span className="ml-1">{selectedEdge.speedLimit}km/h</span>
              </div>
              <div>
                <span className="text-muted-foreground">长度:</span>
                <span className="ml-1">{selectedEdge.length}m</span>
              </div>
              <div>
                <span className="text-muted-foreground">状态:</span>
                <span className={`ml-1 ${getCongestionStatus(selectedEdge.congestion).color}`}>
                  {getCongestionStatus(selectedEdge.congestion).text}
                </span>
              </div>
            </div>

            {/* 拥堵值滑块 */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm text-muted-foreground">拥堵系数</label>
                <span className="text-sm font-semibold text-primary">
                  {(selectedEdge.congestion * 100).toFixed(0)}%
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={selectedEdge.congestion * 100}
                onChange={(e) => onCongestionChange(selectedEdge.id, parseInt(e.target.value) / 100)}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, 
                    hsl(var(--success)) 0%, 
                    hsl(var(--accent)) 50%, 
                    hsl(var(--destructive)) 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>畅通</span>
                <span>中度</span>
                <span>严重</span>
              </div>
            </div>

            {/* 快捷设置按钮 */}
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onCongestionChange(selectedEdge.id, 0)}
                className="flex-1 text-xs"
              >
                畅通
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => onCongestionChange(selectedEdge.id, 0.4)}
                className="flex-1 text-xs"
              >
                中度
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => onCongestionChange(selectedEdge.id, 0.8)}
                className="flex-1 text-xs"
              >
                严重
              </Button>
            </div>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground text-center py-4">
            点击上方按钮，然后在地图上选择道路来设置拥堵值
          </p>
        )}

        {/* 说明 */}
        <div className="text-xs text-muted-foreground border-t border-border pt-3">
          <p>设置拥堵后重新规划路径，算法会根据距离和拥堵综合计算最优路线</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default CongestionPanel
