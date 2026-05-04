/**
 * 导航提示面板组件
 * 显示当前导航指令和接下来的提示
 */

import React from 'react'
import { NavigationHint, NavHintType, RoadNode } from '@/data/types'
import { 
  ArrowUp, 
  ArrowLeft, 
  ArrowRight, 
  ArrowUpRight,
  ArrowDownRight,
  MapPin,
  Navigation
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card'

interface NavigationPanelProps {
  currentHint: NavigationHint | null
  nextHint: NavigationHint | null
  currentNode: RoadNode | null
  remainingDistance: number
  remainingTime: number
}

// 获取导航图标
function getNavIcon(type: NavHintType) {
  switch (type) {
    case 'straight':
      return <ArrowUp className="h-8 w-8" />
    case 'turn_left':
      return <ArrowLeft className="h-8 w-8" />
    case 'turn_right':
      return <ArrowRight className="h-8 w-8" />
    case 'ramp_up':
      return <ArrowUpRight className="h-8 w-8" />
    case 'ramp_down':
      return <ArrowDownRight className="h-8 w-8" />
    case 'overpass_enter':
      return <ArrowUpRight className="h-8 w-8" />
    case 'overpass_exit':
      return <ArrowDownRight className="h-8 w-8" />
    case 'destination':
      return <MapPin className="h-8 w-8" />
    default:
      return <Navigation className="h-8 w-8" />
  }
}

// 获取提示背景颜色
function getHintBgClass(type: NavHintType): string {
  switch (type) {
    case 'ramp_up':
    case 'overpass_enter':
      return 'bg-road-overpass/20 border-road-overpass'
    case 'ramp_down':
    case 'overpass_exit':
      return 'bg-road-ramp/20 border-road-ramp'
    case 'destination':
      return 'bg-success/20 border-success'
    default:
      return 'bg-primary/20 border-primary'
  }
}

// 格式化时间
function formatTime(seconds: number): string {
  if (seconds < 60) {
    return `${Math.round(seconds)}秒`
  }
  const minutes = Math.floor(seconds / 60)
  const secs = Math.round(seconds % 60)
  return `${minutes}分${secs}秒`
}

// 格式化距离
function formatDistance(meters: number): string {
  if (meters < 1000) {
    return `${Math.round(meters)}米`
  }
  return `${(meters / 1000).toFixed(1)}公里`
}

export const NavigationPanel: React.FC<NavigationPanelProps> = ({
  currentHint,
  nextHint,
  currentNode,
  remainingDistance,
  remainingTime,
}) => {
  if (!currentHint) {
    return (
      <Card className="w-full animate-fade-in">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Navigation className="h-5 w-5 text-primary" />
            导航提示
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm">
            请选择起点和终点开始导航
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full animate-fade-in">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2">
          <Navigation className="h-5 w-5 text-primary" />
          导航提示
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* 当前提示 */}
        <div className={`rounded-lg border-2 p-4 ${getHintBgClass(currentHint.type)}`}>
          <div className="flex items-center gap-4">
            <div className="text-primary">
              {getNavIcon(currentHint.type)}
            </div>
            <div className="flex-1">
              <p className="font-medium text-foreground">
                {currentHint.message}
              </p>
              {currentHint.distance > 0 && (
                <p className="text-sm text-muted-foreground mt-1">
                  距离: {formatDistance(currentHint.distance)}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* 当前位置 */}
        {currentNode && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-accent" />
            <span>当前位置: {currentNode.name}</span>
          </div>
        )}

        {/* 下一个提示预览 */}
        {nextHint && nextHint.type !== 'destination' && (
          <div className="border-t border-border pt-3">
            <p className="text-xs text-muted-foreground mb-2">接下来:</p>
            <div className="flex items-center gap-3 text-sm">
              <div className="text-muted-foreground">
                {getNavIcon(nextHint.type)}
              </div>
              <span className="text-muted-foreground">{nextHint.message}</span>
            </div>
          </div>
        )}

        {/* 剩余信息 */}
        <div className="grid grid-cols-2 gap-4 border-t border-border pt-3">
          <div>
            <p className="text-xs text-muted-foreground">剩余距离</p>
            <p className="text-lg font-semibold text-primary">
              {formatDistance(remainingDistance)}
            </p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">预计时间</p>
            <p className="text-lg font-semibold text-accent">
              {formatTime(remainingTime)}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default NavigationPanel
