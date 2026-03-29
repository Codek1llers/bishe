/**
 * 控制面板组件
 * 包含路径规划、视图切换、仿真控制等功能
 */

import React, { useState, useEffect } from 'react'
import { Button } from './ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card'
import { LocationSearch } from './LocationSearch'
import { 
  Play, 
  Pause, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight,
  FastForward,
  Rewind,
  Eye,
  Box,
  Car,
  Route,
  Settings,
  Gauge,
  Navigation,
  Star,
  Clock,
  Sparkles,
  Layers,
} from 'lucide-react'
import { RoadNode, SimulationConfig } from '@/data/types'

/** 单条推荐路线 */
type RecommendedRoute = {
  id: number
  name: string
  start: string
  end: string
  desc: string
}

/**
 * 推荐路线分组：
 * - 常规：城市路网驾驶
 * - 立体对比：突出「传统二维俯视难以分清车辆所在层/匝道」、本系统在 3D/跟车下可明确高程与轨迹
 */
const RECOMMENDED_ROUTE_SECTIONS: {
  title: string
  hint?: string
  routes: RecommendedRoute[]
}[] = [
  {
    title: '常规出行',
    routes: [
      { id: 1, name: '东门→肯德基', start: 'bjfu_east', end: 'kfc_south', desc: '从东门出发到南门肯德基' },
      { id: 2, name: '学院路→立交南侧', start: 'xueyuan_s1', end: 'interchange_sw', desc: '经北四环辅路进入东南侧立交地面枢纽' },
      { id: 3, name: '西门→东门', start: 'bjfu_west', end: 'bjfu_east', desc: '横穿校园与成府路地面段' },
      { id: 4, name: '北门→清华东路东', start: 'bjfu_north', end: 'qinghua_e', desc: '沿清华东路地面向东' },
      { id: 5, name: '南门→四环东', start: 'bjfu_south', end: 'sihuan_e', desc: '经校园东南角至北四环辅路东段' },
      { id: 6, name: '东门→公交站', start: 'bjfu_east', end: 'bus_east', desc: '东门附近至林业大学东门公交站' },
    ],
  },
  {
    title: '立体导航演示（对比二维俯视）',
    hint:
      '传统 2D 地图俯视时，叠在一起的高架与地面、相邻匝道投影重叠，不易判断车辆在哪一层。以下包含上匝道、下匝道与「匝道桥下地面辅路」对照；请切换 2D/3D 与跟车视角对比。',
    routes: [
      {
        id: 7,
        name: '校园中心→高架东端（上桥）',
        start: 'campus_c',
        end: 't_ic_a_e',
        desc: '经 hub、西向地面主线，再沿西→东匝道升上青蓝高架；俯视时易与桥下地面路混淆，3D 可看清爬升。',
      },
      {
        id: 8,
        name: '校园中心→立交西端（全程贴地）',
        start: 'campus_c',
        end: 't_ic_c_w',
        desc: '与路线7对照：终点在同一立交区西侧、全程深色地面层；与「上桥」在俯视投影上有重叠感，高度完全不同。',
      },
      {
        id: 9,
        name: '南端→西端（地面转向）',
        start: 't_ic_b_s',
        end: 't_ic_c_w',
        desc: '南→西紫色匝道贴地绕行；俯视与高架桥投影交叉，2D 难辨是否在桥面。',
      },
      {
        id: 10,
        name: '南端→东端（上高架）',
        start: 't_ic_b_s',
        end: 't_ic_a_e',
        desc: '与路线9同起点：本线南→东爬升为高架；演示「同一出发点、一层上一平面」在 2D 上难区分。',
      },
      {
        id: 11,
        name: '西端→高架东端（长距离爬升）',
        start: 't_ic_c_w',
        end: 't_ic_a_e',
        desc: '典型平面近东西向、实际持续上坡；二维难表现纵坡，侧视/3D 可体现高差。',
      },
      {
        id: 12,
        name: '高架西端→西端地面（下地）',
        start: 't_ic_a_w',
        end: 't_ic_c_w',
        desc: '先沿青蓝高架再经东→西下地匝道；俯视轨迹与高架上车辆投影相近，3D 可区分层位。',
      },
      {
        id: 13,
        name: '高架东端→南端（下坡）',
        start: 't_ic_a_e',
        end: 't_ic_b_s',
        desc: '东→南下坡入地面主线；用于演示「下桥」过程，跟车视角优于平面箭头。',
      },
      {
        id: 14,
        name: '北端→东端（地面+上桥）',
        start: 't_ic_b_n',
        end: 't_ic_a_e',
        desc: '经 hub、西向地面再汇上匝道；多段高度变化，平面导航条不易传达，3D 路径更完整。',
      },
      {
        id: 15,
        name: '东端→西端地面（高架转地面）',
        start: 't_ic_a_e',
        end: 't_ic_c_w',
        desc: '东→西定向匝道下落：与纯地面东西向在投影上部分重叠，突出分层认知需求。',
      },
      {
        id: 16,
        name: '西段桥下→南侧桥下（横穿·地面）',
        start: 't_ic_under_w',
        end: 't_ic_under_s',
        desc: '沿「青蓝高架桥下东西向地面辅路」再折向东南侧桥下，全程无上下匝道；与上桥路线平面投影接近，强调分层。',
      },
      {
        id: 17,
        name: '高架东端→南侧桥下（下匝道+桥下）',
        start: 't_ic_a_e',
        end: 't_ic_under_s',
        desc: '先走东→南下匝道落地，再经南侧桥下集散点；突出「下匝道」与「匝道正下方地面」在 2D 上的易混性。',
      },
      {
        id: 18,
        name: '校园中心→南侧桥下（全程贴地）',
        start: 'campus_c',
        end: 't_ic_under_s',
        desc: '经校园联络线进立交中心，再沿桥下联络道至南侧桥下辅路；与从高架驶来的车流在俯视上易重叠。',
      },
    ],
  },
]

// 历史记录存储key
const HISTORY_KEY = 'nav_route_history'

interface HistoryRoute {
  start: string
  end: string
  startName: string
  endName: string
  timestamp: number
}

interface ControlPanelProps {
  // 节点选择
  nodes: RoadNode[]
  startNode: string | null
  endNode: string | null
  onStartNodeChange: (nodeId: string | null) => void
  onEndNodeChange: (nodeId: string | null) => void
  onPlanPath: () => void
  
  // 仿真控制
  isPlaying: boolean
  onPlayPause: () => void
  onReset: () => void
  onPrevNode: () => void
  onNextNode: () => void
  onSpeedUp: () => void
  onSpeedDown: () => void
  speedMultiplier: number
  
  // 视图控制
  is3DMode: boolean
  onToggleViewMode: () => void
  isFollowMode: boolean
  onToggleFollowMode: () => void
  
  // 配置
  config: SimulationConfig
  onConfigChange: (config: SimulationConfig) => void
  
  // 状态
  hasPath: boolean
  currentNodeIndex: number
  totalNodes: number
}

export const ControlPanel: React.FC<ControlPanelProps> = ({
  nodes,
  startNode,
  endNode,
  onStartNodeChange,
  onEndNodeChange,
  onPlanPath,
  isPlaying,
  onPlayPause,
  onReset,
  onPrevNode,
  onNextNode,
  onSpeedUp,
  onSpeedDown,
  speedMultiplier,
  is3DMode,
  onToggleViewMode,
  isFollowMode,
  onToggleFollowMode,
  config,
  onConfigChange,
  hasPath,
  currentNodeIndex,
  totalNodes,
}) => {
  const [showSettings, setShowSettings] = useState(false)
  const [showRecommended, setShowRecommended] = useState(true)
  const [history, setHistory] = useState<HistoryRoute[]>([])
  
  // 加载历史记录
  useEffect(() => {
    try {
      const saved = localStorage.getItem(HISTORY_KEY)
      if (saved) {
        setHistory(JSON.parse(saved))
      }
    } catch (e) {
      console.error('加载历史记录失败', e)
    }
  }, [])
  
  // 保存历史记录
  const saveToHistory = () => {
    if (!startNode || !endNode) return
    
    const startNodeData = nodes.find(n => n.id === startNode)
    const endNodeData = nodes.find(n => n.id === endNode)
    if (!startNodeData || !endNodeData) return
    
    const newRoute: HistoryRoute = {
      start: startNode,
      end: endNode,
      startName: startNodeData.name,
      endName: endNodeData.name,
      timestamp: Date.now()
    }
    
    // 去重并限制数量
    const newHistory = [newRoute, ...history.filter(
      h => !(h.start === startNode && h.end === endNode)
    )].slice(0, 5)
    
    setHistory(newHistory)
    try {
      localStorage.setItem(HISTORY_KEY, JSON.stringify(newHistory))
    } catch (e) {
      console.error('保存历史记录失败', e)
    }
  }
  
  // 选择推荐路线
  const selectRecommended = (route: RecommendedRoute) => {
    onStartNodeChange(route.start)
    onEndNodeChange(route.end)
  }
  
  // 选择历史路线
  const selectHistory = (route: HistoryRoute) => {
    onStartNodeChange(route.start)
    onEndNodeChange(route.end)
  }
  
  // 清除历史记录
  const clearHistory = () => {
    setHistory([])
    localStorage.removeItem(HISTORY_KEY)
  }
  
  // 开始导航并保存历史
  const handlePlanPath = () => {
    saveToHistory()
    onPlanPath()
  }

  return (
    <div className="space-y-3 w-80">
      {/* 路径规划 - 最高层级 */}
      <Card className="relative" style={{ zIndex: 100 }}>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-base">
            <Route className="h-4 w-4 text-primary" />
            路径规划
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {/* 起点搜索 */}
          <LocationSearch
            label="起点"
            placeholder="搜索起点..."
            nodes={nodes}
            selectedId={startNode}
            onChange={onStartNodeChange}
            icon="start"
          />

          {/* 终点搜索 */}
          <LocationSearch
            label="终点"
            placeholder="搜索终点..."
            nodes={nodes}
            selectedId={endNode}
            onChange={onEndNodeChange}
            icon="end"
          />

          {/* 规划按钮 */}
          <Button 
            onClick={handlePlanPath}
            disabled={!startNode || !endNode}
            className="w-full"
            variant="glow"
          >
            <Navigation className="h-4 w-4 mr-2" />
            开始导航
          </Button>
          
          {/* 推荐路线 */}
          <div className="pt-2 border-t border-border">
            <div 
              className="flex items-center justify-between cursor-pointer mb-2"
              onClick={() => setShowRecommended(!showRecommended)}
            >
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Sparkles className="h-3 w-3 text-yellow-500" />
                推荐路线
              </span>
              <ChevronRight className={`h-3 w-3 text-muted-foreground transition-transform ${showRecommended ? 'rotate-90' : ''}`} />
            </div>
            
            {showRecommended && (
              <div className="space-y-3">
                {RECOMMENDED_ROUTE_SECTIONS.map((section) => (
                  <div key={section.title} className="space-y-1.5">
                    <div className="text-[10px] font-semibold text-foreground/85 uppercase tracking-wide">
                      {section.title}
                    </div>
                    {section.hint ? (
                      <p className="text-[10px] text-muted-foreground leading-snug pl-0.5">{section.hint}</p>
                    ) : null}
                    {section.routes.map((route) => (
                      <button
                        key={route.id}
                        type="button"
                        onClick={() => selectRecommended(route)}
                        className="w-full text-left px-2.5 py-2 rounded-lg bg-primary/5 hover:bg-primary/10 border border-primary/20 transition-colors group"
                      >
                        <div className="flex items-center gap-2">
                          <Star className="h-3 w-3 text-yellow-500 shrink-0" />
                          <span className="text-xs font-medium text-foreground group-hover:text-primary">
                            {route.name}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5 pl-5 leading-snug">{route.desc}</p>
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* 历史记录 */}
          {history.length > 0 && (
            <div className="pt-2 border-t border-border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  历史记录
                </span>
                <button 
                  onClick={clearHistory}
                  className="text-xs text-muted-foreground hover:text-destructive"
                >
                  清除
                </button>
              </div>
              <div className="space-y-1">
                {history.map((route, idx) => (
                  <button
                    key={idx}
                    onClick={() => selectHistory(route)}
                    className="w-full text-left px-2.5 py-1.5 rounded-md hover:bg-muted transition-colors flex items-center justify-between group"
                  >
                    <span className="text-xs truncate">
                      <span className="text-green-500">●</span> {route.startName} → <span className="text-red-500">●</span> {route.endName}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* 仿真控制 - 紧凑布局 */}
      <Card style={{ zIndex: 50 }}>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-base">
            <Car className="h-4 w-4 text-primary" />
            仿真控制
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {/* 播放控制 */}
          <div className="flex items-center justify-center gap-1.5">
            <Button 
              variant="outline" 
              size="icon"
              onClick={onPrevNode}
              disabled={!hasPath}
              title="上一节点 (←)"
              className="h-8 w-8"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <Button 
              variant="outline" 
              size="icon"
              onClick={onSpeedDown}
              disabled={!hasPath}
              title="减速 (↓)"
              className="h-8 w-8"
            >
              <Rewind className="h-3 w-3" />
            </Button>
            
            <Button 
              variant={isPlaying ? 'accent' : 'glow'}
              size="icon"
              onClick={onPlayPause}
              disabled={!hasPath}
              title="播放/暂停 (空格)"
              className="h-10 w-10"
            >
              {isPlaying ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4" />
              )}
            </Button>
            
            <Button 
              variant="outline" 
              size="icon"
              onClick={onSpeedUp}
              disabled={!hasPath}
              title="加速 (↑)"
              className="h-8 w-8"
            >
              <FastForward className="h-3 w-3" />
            </Button>
            
            <Button 
              variant="outline" 
              size="icon"
              onClick={onNextNode}
              disabled={!hasPath}
              title="下一节点 (→)"
              className="h-8 w-8"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            
            <Button 
              variant="outline" 
              size="icon"
              onClick={onReset}
              disabled={!hasPath}
              title="重置"
              className="h-8 w-8"
            >
              <RotateCcw className="h-3 w-3" />
            </Button>
          </div>

          {/* 速度和进度 */}
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">速度: <span className="text-primary font-medium">{speedMultiplier.toFixed(1)}x</span></span>
            {hasPath && (
              <span className="text-muted-foreground">进度: <span className="text-primary font-medium">{currentNodeIndex + 1}/{totalNodes}</span></span>
            )}
          </div>

          {/* 进度条 */}
          {hasPath && (
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${((currentNodeIndex + 1) / totalNodes) * 100}%` }}
              />
            </div>
          )}
        </CardContent>
      </Card>

      {/* 视图控制 - 更紧凑 */}
      <Card style={{ zIndex: 50 }}>
        <CardContent className="py-3">
          <div className="flex items-center gap-2">
            <div className="flex-1 grid grid-cols-2 gap-1.5">
              <Button 
                variant={is3DMode ? 'glow' : 'outline'}
                onClick={() => !is3DMode && onToggleViewMode()}
                size="sm"
                className="h-8"
              >
                <Box className="h-3 w-3 mr-1" />
                3D
              </Button>
              <Button 
                variant={!is3DMode ? 'glow' : 'outline'}
                onClick={() => is3DMode && onToggleViewMode()}
                size="sm"
                className="h-8"
              >
                <Eye className="h-3 w-3 mr-1" />
                2D
              </Button>
            </div>
            <Button 
              variant={isFollowMode ? 'accent' : 'outline'}
              onClick={onToggleFollowMode}
              disabled={!hasPath}
              size="sm"
              className="h-8"
            >
              <Car className="h-3 w-3 mr-1" />
              跟车
            </Button>
          </div>
          <p className="text-[11px] text-muted-foreground leading-snug mt-2 flex gap-1.5 items-start">
            <Layers className="h-3.5 w-3.5 shrink-0 text-emerald-500/90 mt-0.5" />
            <span>
              当前路网为<strong className="text-foreground/90">纯地面道路</strong>；2D 俯视便于看整体走向，3D 便于观察坡度与跟车。
            </span>
          </p>
        </CardContent>
      </Card>

      {/* 算法配置 - 折叠 */}
      <Card style={{ zIndex: 50 }}>
        <CardHeader className="py-2 cursor-pointer" onClick={() => setShowSettings(!showSettings)}>
          <CardTitle className="flex items-center gap-2 text-sm">
            <Settings className="h-3 w-3 text-primary" />
            算法配置
            <ChevronRight className={`h-3 w-3 ml-auto transition-transform ${showSettings ? 'rotate-90' : ''}`} />
          </CardTitle>
        </CardHeader>
        {showSettings && (
          <CardContent className="pt-0 space-y-2">
            {/* 基础车速 */}
            <div className="p-2 rounded-lg bg-primary/5 border border-primary/10">
              <label className="text-xs text-primary font-medium flex items-center gap-1 mb-1">
                <Gauge className="h-3 w-3" />
                车速: {config.baseSpeed.toFixed(1)}x
              </label>
              <input
                type="range"
                min="0.5"
                max="3"
                step="0.1"
                value={config.baseSpeed}
                onChange={(e) => onConfigChange({
                  ...config,
                  baseSpeed: parseFloat(e.target.value)
                })}
                className="w-full h-1"
              />
            </div>
            
            {/* 权重滑块 */}
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div>
                <label className="text-muted-foreground block mb-1">距离:{config.weights.length.toFixed(1)}</label>
                <input type="range" min="0" max="2" step="0.1" value={config.weights.length}
                  onChange={(e) => onConfigChange({ ...config, weights: { ...config.weights, length: parseFloat(e.target.value) }})}
                  className="w-full h-1"
                />
              </div>
              <div>
                <label className="text-muted-foreground block mb-1">时间:{config.weights.time.toFixed(1)}</label>
                <input type="range" min="0" max="2" step="0.1" value={config.weights.time}
                  onChange={(e) => onConfigChange({ ...config, weights: { ...config.weights, time: parseFloat(e.target.value) }})}
                  className="w-full h-1"
                />
              </div>
              <div>
                <label className="text-muted-foreground block mb-1">拥堵:{config.weights.congestion.toFixed(1)}</label>
                <input type="range" min="0" max="2" step="0.1" value={config.weights.congestion}
                  onChange={(e) => onConfigChange({ ...config, weights: { ...config.weights, congestion: parseFloat(e.target.value) }})}
                  className="w-full h-1"
                />
              </div>
            </div>
          </CardContent>
        )}
      </Card>

      {/* 快捷键提示 */}
      <div className="text-center">
        <p className="text-xs text-muted-foreground">
          快捷键: WASD 平移视角, 滚轮缩放, 空格播放, ↑↓调速, ←→切节点
        </p>
      </div>
    </div>
  )
}

export default ControlPanel
