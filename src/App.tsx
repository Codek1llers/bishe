/**
 * 3D城市道路导航仿真系统 - 主应用
 * 
 * 功能:
 * 1. 三维道路网络可视化（含立交桥、高架桥、匝道）
 * 2. Dijkstra/A* 路径规划算法
 * 3. 车辆导航仿真动画
 * 4. 2D/3D视图切换
 * 5. 立交桥导航提示
 * 6. 键盘控制
 * 7. 道路拥堵设置
 */

import { useEffect, useRef, useState, useCallback, useMemo } from 'react'
import { Scene3D } from './components/Scene3D'
import { NavigationSimulator } from './lib/simulator'
import { dijkstra } from './lib/pathfinding'
import { generateNavigationHints } from './lib/navigationHints'
import { roadNetwork as initialRoadNetwork } from './data/roadNetwork'
import { buildTInterchange } from './lib/TInterchange'
import { createSceneTemplate, getTemplateRoutePreset, SCENE_TEMPLATE_META, shouldMountBuiltInInterchange } from './lib/sceneTemplates'
import { PathResult, VehicleState, RoadNode, RoadEdge, NavigationHint, SimulationConfig, RoadNetwork } from './data/types'

import ControlPanel from './components/ControlPanel'
import NavigationPanel from './components/NavigationPanel'
import PathInfoPanel from './components/PathInfoPanel'
import CongestionPanel from './components/CongestionPanel'
import SceneBuilderPanel from './components/SceneBuilderPanel'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/Card'
import { Button } from './components/ui/Button'
import { LayoutDashboard, Car, Route, BarChart3, Layers, Boxes, PanelLeftClose, PanelLeftOpen, PanelRightClose, PanelRightOpen } from 'lucide-react'

// 默认配置
const defaultConfig: SimulationConfig = {
  baseSpeed: 8,
  speedMultiplier: 1,
  weights: {
    length: 1,
    time: 0.8,
    congestion: 0.5,
  },
}

type AppPage = 'overview' | 'simulation' | 'builder'

function App() {
  // Refs
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<Scene3D | null>(null)
  const simulatorRef = useRef<NavigationSimulator | null>(null)
  
  // 节点映射
  const nodeMapRef = useRef<Map<string, RoadNode>>(new Map())
  
  // 道路网络状态（可修改拥堵值）
  const [roadNetwork, setRoadNetwork] = useState<RoadNetwork>(() => ({
    nodes: [...initialRoadNetwork.nodes],
    edges: initialRoadNetwork.edges.map(e => ({ ...e })),
    buildings: initialRoadNetwork.buildings ? [...initialRoadNetwork.buildings] : []
  }))

  // 页面导航
  const [activePage, setActivePage] = useState<AppPage>('overview')
  const [isLeftPanelVisible, setIsLeftPanelVisible] = useState(true)
  const [isRightPanelVisible, setIsRightPanelVisible] = useState(true)
  
  // 状态
  const [startNode, setStartNode] = useState<string | null>(null)
  const [endNode, setEndNode] = useState<string | null>(null)
  const [pathResult, setPathResult] = useState<PathResult | null>(null)
  const [navHints, setNavHints] = useState<NavigationHint[]>([])
  
  const [isPlaying, setIsPlaying] = useState(false)
  const [speedMultiplier, setSpeedMultiplier] = useState(1)
  const [is3DMode, setIs3DMode] = useState(true)
  const [isFollowMode, setIsFollowMode] = useState(false)
  const [config, setConfig] = useState<SimulationConfig>(defaultConfig)
  
  const [currentNodeIndex, setCurrentNodeIndex] = useState(0)
  const [currentNode, setCurrentNode] = useState<RoadNode | null>(null)
  const [currentHintIndex, setCurrentHintIndex] = useState(0)
  const [remainingDistance, setRemainingDistance] = useState(0)
  const [remainingTime, setRemainingTime] = useState(0)
  
  const [selectingFor, setSelectingFor] = useState<'start' | 'end' | null>(null)
  const [recommendedRoutes, setRecommendedRoutes] = useState<Array<{ id: number; name: string; start: string; end: string; desc: string }>>([])
  
  // 道路拥堵设置状态
  const [isSelectingRoad, setIsSelectingRoad] = useState(false)
  const [selectedEdge, setSelectedEdge] = useState<RoadEdge | null>(null)
  const [builderAddNodeMode, setBuilderAddNodeMode] = useState(false)
  const [builderDraggingNodeId, setBuilderDraggingNodeId] = useState<string | null>(null)
  
  // 使用 ref 存储最新状态，避免闭包问题
  const isSelectingRoadRef = useRef(false)
  const selectingForRef = useRef<'start' | 'end' | null>(null)
  const startNodeRef = useRef<string | null>(null)
  const endNodeRef = useRef<string | null>(null)
  const roadNetworkRef = useRef(roadNetwork)
  
  // 同步 ref 和 state
  useEffect(() => {
    isSelectingRoadRef.current = isSelectingRoad
  }, [isSelectingRoad])
  
  useEffect(() => {
    selectingForRef.current = selectingFor
  }, [selectingFor])
  
  useEffect(() => {
    startNodeRef.current = startNode
  }, [startNode])
  
  useEffect(() => {
    endNodeRef.current = endNode
  }, [endNode])
  
  useEffect(() => {
    roadNetworkRef.current = roadNetwork
  }, [roadNetwork])

  useEffect(() => {
    const templateMeta = SCENE_TEMPLATE_META.find((item) => {
      const preset = item.recommendedRoute
      return roadNetwork.nodes.some((node) => node.id === preset.start) && roadNetwork.nodes.some((node) => node.id === preset.end)
    })

    if (!templateMeta) {
      setRecommendedRoutes([])
      return
    }

    const preset = templateMeta.recommendedRoute
    const routes = [
      {
        id: 1000,
        name: preset.label,
        start: preset.start,
        end: preset.end,
        desc: '模板主推荐',
      },
    ]

    if (templateMeta.kind === 'multi-level-express-hub') {
      routes.push(
        { id: 1001, name: '南向快速路入口 → 东侧桥下辅路', start: 'meh_s_over', end: 'meh_ground_e', desc: '高架汇聚后下桥' },
        { id: 1002, name: '东南城区入口 → 东北高架分流口', start: 'meh_se_ground', end: 'meh_ne_over', desc: '上桥后分流演示' },
        { id: 1003, name: '西桥下转换点 → 东北出城地面口', start: 'meh_under_west_hub', end: 'meh_ground_ne', desc: '桥下联络对照' },
      )
    }

    setRecommendedRoutes(routes)
  }, [roadNetwork])

  // 初始化场景
  useEffect(() => {
    if (!containerRef.current) return
    
    // 创建节点映射
    nodeMapRef.current = new Map(roadNetwork.nodes.map(n => [n.id, n]))
    
    // 创建3D场景
    const scene = new Scene3D(containerRef.current)
    scene.loadRoadNetwork(roadNetwork)
    if (shouldMountBuiltInInterchange(roadNetwork)) {
      const { group: interGroup, edgeMeshes: interMeshes } = buildTInterchange()
      scene.addTInterchangeGroup(interGroup, interMeshes, roadNetwork.edges)
    }
    sceneRef.current = scene
    
    // 创建仿真器
    const simulator = new NavigationSimulator(
      nodeMapRef.current,
      config,
      roadNetwork.edges,
      is3DMode
    )
    simulatorRef.current = simulator
    
    // 设置仿真回调
    simulator.setOnUpdate((state: VehicleState) => {
      scene.updateVehiclePosition(state)
      updateRemainingInfo(state)
    })
    
    simulator.setOnNodeChange((nodeIndex: number, node: RoadNode) => {
      setCurrentNodeIndex(nodeIndex)
      setCurrentNode(node)
      updateCurrentHint(nodeIndex)
    })
    
    simulator.setOnComplete(() => {
      setIsPlaying(false)
    })
    
    // 点击事件
    const clickHandler = (event: MouseEvent) => handleSceneClick(event)
    containerRef.current.addEventListener('click', clickHandler)
    
    return () => {
      scene.dispose()
      simulator.dispose()
      containerRef.current?.removeEventListener('click', clickHandler)
    }
  }, [])

  useEffect(() => {
    simulatorRef.current?.setRoadGeometryContext(roadNetwork.edges, is3DMode)
  }, [roadNetwork, is3DMode])

  // 更新剩余信息
  const updateRemainingInfo = useCallback((state: VehicleState) => {
    if (!pathResult) return
    
    let remaining = 0
    for (let i = state.currentNodeIndex; i < pathResult.edges.length; i++) {
      const edge = pathResult.edges[i]
      if (i === state.currentNodeIndex) {
        remaining += edge.length * (1 - state.progress)
      } else {
        remaining += edge.length
      }
    }
    setRemainingDistance(remaining)
    
    // 估算剩余时间
    let time = 0
    for (let i = state.currentNodeIndex; i < pathResult.edges.length; i++) {
      const edge = pathResult.edges[i]
      const effectiveSpeed = edge.speedLimit * (1 - edge.congestion * 0.5)
      const dist = i === state.currentNodeIndex ? edge.length * (1 - state.progress) : edge.length
      time += (dist / 1000) / (effectiveSpeed / 3600) * 3600
    }
    setRemainingTime(time / config.speedMultiplier)
  }, [pathResult, config.speedMultiplier])

  // 更新当前提示
  const updateCurrentHint = useCallback((nodeIndex: number) => {
    if (!pathResult) return
    
    const nodeId = pathResult.path[nodeIndex]
    const hintIndex = navHints.findIndex(h => h.nodeId === nodeId)
    if (hintIndex >= 0) {
      setCurrentHintIndex(hintIndex)
    }
  }, [pathResult, navHints])

  // 处理场景点击 - 使用 ref 读取最新状态
  const handleSceneClick = useCallback((event: MouseEvent) => {
    if (!sceneRef.current) return

    if (activePage === 'builder' && builderDraggingNodeId) {
      const point = sceneRef.current.getGroundPoint(event)
      if (point) {
        setRoadNetwork(prev => {
          const next = {
            ...prev,
            nodes: prev.nodes.map(node => node.id === builderDraggingNodeId ? { ...node, x: Math.round(point.x), y: Math.round(point.z) } : node)
          }
          queueMicrotask(() => reloadNetworkInScene(next))
          return next
        })
        setBuilderDraggingNodeId(null)
      }
      return
    }

    if (activePage === 'builder' && builderAddNodeMode) {
      const point = sceneRef.current.getGroundPoint(event)
      if (point) {
        const nodeId = `custom_node_${Date.now()}`
        const node: RoadNode = {
          id: nodeId,
          name: `节点${roadNetworkRef.current.nodes.length + 1}`,
          x: Math.round(point.x),
          y: Math.round(point.z),
          z: 0,
          layer: 0,
        }
        setRoadNetwork(prev => {
          const next = { ...prev, nodes: [...prev.nodes, node] }
          queueMicrotask(() => {
            if (sceneRef.current) {
              sceneRef.current.loadRoadNetwork(next)
              const { group: interGroup, edgeMeshes: interMeshes } = buildTInterchange()
              sceneRef.current.addTInterchangeGroup(interGroup, interMeshes, next.edges)
            }
          })
          return next
        })
        setBuilderAddNodeMode(false)
      }
      return
    }
    
    const isRoadMode = isSelectingRoadRef.current
    
    // 只有在道路选择模式下才检测道路
    if (isRoadMode) {
      const edge = sceneRef.current.getClickedRoad(event)
      if (edge) {
        const currentEdge = roadNetworkRef.current.edges.find(e => e.id === edge.id)
        setSelectedEdge(currentEdge || edge)
        sceneRef.current.highlightSelectedRoad(edge.id)
      }
      return
    }
    
    // 非道路选择模式：检测节点点击（支持直接选择起点/终点）
    const node = sceneRef.current.getClickedNode(event)
    if (!node) return

    if (selectingForRef.current === 'start') {
      setStartNode(node.id)
      setSelectingFor(null)
      return
    }

    if (selectingForRef.current === 'end') {
      setEndNode(node.id)
      setSelectingFor(null)
      return
    }

    if (!startNodeRef.current) {
      setStartNode(node.id)
      return
    }

    if (!endNodeRef.current) {
      setEndNode(node.id)
      return
    }

    setStartNode(node.id)
    setSelectingFor('end')
  }, [activePage, builderAddNodeMode, builderDraggingNodeId])

  // 高亮起点终点
  useEffect(() => {
    sceneRef.current?.highlightEndpoints(startNode, endNode)
  }, [startNode, endNode])

  // 规划路径
  const handlePlanPath = useCallback(() => {
    if (!startNode || !endNode) return
    
    const result = dijkstra(roadNetwork, startNode, endNode, config)
    
    if (result) {
      setPathResult(result)
      sceneRef.current?.highlightPath(result)
      
      // 生成导航提示
      const hints = generateNavigationHints(result.path, result.edges, nodeMapRef.current)
      setNavHints(hints)
      setCurrentHintIndex(0)
      
      // 设置仿真路径
      simulatorRef.current?.setPath(result)
      sceneRef.current?.createVehicle()
      const initialState = simulatorRef.current?.getState()
      if (initialState) {
        sceneRef.current?.updateVehiclePosition(initialState)
      }
      
      // 重置状态
      setCurrentNodeIndex(0)
      setCurrentNode(nodeMapRef.current.get(result.path[0]) || null)
      setRemainingDistance(result.totalLength)
      setRemainingTime(result.estimatedTime)
      setIsPlaying(false)
      
      // 清除道路选择状态
      setSelectedEdge(null)
      sceneRef.current?.highlightSelectedRoad(null)
    } else {
      alert('无法找到从起点到终点的路径')
    }
  }, [startNode, endNode, config, roadNetwork])

  // 播放/暂停
  const handlePlayPause = useCallback(() => {
    if (!simulatorRef.current) return
    const paused = simulatorRef.current.togglePause()
    setIsPlaying(!paused)
  }, [])

  // 重置
  const handleReset = useCallback(() => {
    simulatorRef.current?.reset()
    setIsPlaying(false)
    setCurrentNodeIndex(0)
    setCurrentHintIndex(0)
    if (pathResult) {
      setCurrentNode(nodeMapRef.current.get(pathResult.path[0]) || null)
      setRemainingDistance(pathResult.totalLength)
      setRemainingTime(pathResult.estimatedTime)
    }
  }, [pathResult])

  // 上一节点
  const handlePrevNode = useCallback(() => {
    simulatorRef.current?.prevNode()
  }, [])

  // 下一节点
  const handleNextNode = useCallback(() => {
    simulatorRef.current?.nextNode()
  }, [])

  // 加速
  const handleSpeedUp = useCallback(() => {
    const newSpeed = simulatorRef.current?.speedUp() || 1
    setSpeedMultiplier(newSpeed)
    setConfig(prev => ({ ...prev, speedMultiplier: newSpeed }))
  }, [])

  // 减速
  const handleSpeedDown = useCallback(() => {
    const newSpeed = simulatorRef.current?.speedDown() || 1
    setSpeedMultiplier(newSpeed)
    setConfig(prev => ({ ...prev, speedMultiplier: newSpeed }))
  }, [])

  // 切换视图模式
  const handleToggleViewMode = useCallback(() => {
    const newMode = !is3DMode
    setIs3DMode(newMode)
    sceneRef.current?.setViewMode(newMode)
  }, [is3DMode])

  // 切换跟车模式
  const handleToggleFollowMode = useCallback(() => {
    const newMode = !isFollowMode
    setIsFollowMode(newMode)
    sceneRef.current?.setFollowVehicle(newMode)
  }, [isFollowMode])

  // 更新配置
  const handleConfigChange = useCallback((newConfig: SimulationConfig) => {
    setConfig(newConfig)
    // 同步更新模拟器配置
    simulatorRef.current?.updateConfig(newConfig)
  }, [])

  // 切换道路选择模式
  const handleToggleSelectRoad = useCallback(() => {
    setIsSelectingRoad(prev => {
      const newValue = !prev
      // 立即更新 ref
      isSelectingRoadRef.current = newValue
      if (!newValue) {
        // 退出道路选择模式时清除选中
        setSelectedEdge(null)
        sceneRef.current?.highlightSelectedRoad(null)
      }
      return newValue
    })
  }, [])

  // 更新道路拥堵值
  const handleCongestionChange = useCallback((edgeId: string, congestion: number) => {
    // 更新本地状态
    setRoadNetwork(prev => ({
      ...prev,
      edges: prev.edges.map(e => {
        // 更新正向和反向边
        if (e.id === edgeId || e.id === `${edgeId}_rev` || `${e.id}_rev` === edgeId) {
          return { ...e, congestion }
        }
        return e
      })
    }))
    
    // 更新选中的边
    setSelectedEdge(prev => prev ? { ...prev, congestion } : null)
    
    // 更新3D显示
    sceneRef.current?.updateRoadCongestion(edgeId, congestion)
  }, [])

  // 清除道路选择
  const handleClearRoadSelection = useCallback(() => {
    setSelectedEdge(null)
    sceneRef.current?.highlightSelectedRoad(null)
  }, [])

  const resetRouteState = useCallback(() => {
    setPathResult(null)
    setNavHints([])
    setCurrentHintIndex(0)
    setCurrentNodeIndex(0)
    setCurrentNode(null)
    setRemainingDistance(0)
    setRemainingTime(0)
    setIsPlaying(false)
    setSelectedEdge(null)
    sceneRef.current?.highlightPath(null)
    sceneRef.current?.highlightSelectedRoad(null)
    sceneRef.current?.removeVehicle()
    simulatorRef.current?.pause()
  }, [])

  const reloadNetworkInScene = useCallback((network: RoadNetwork) => {
    if (!sceneRef.current) return
    sceneRef.current.loadRoadNetwork(network)
    if (shouldMountBuiltInInterchange(network)) {
      const { group: interGroup, edgeMeshes: interMeshes } = buildTInterchange()
      sceneRef.current.addTInterchangeGroup(interGroup, interMeshes, network.edges)
    }
    sceneRef.current.highlightEndpoints(startNodeRef.current, endNodeRef.current)
    simulatorRef.current?.setRoadGeometryContext(network.edges, is3DMode)
  }, [is3DMode])

  const handleExportScene = useCallback(() => {
    const data = JSON.stringify(roadNetworkRef.current, null, 2)
    navigator.clipboard.writeText(data)
    alert('场景JSON已复制到剪贴板')
  }, [])

  const handleImportScene = useCallback((jsonText: string) => {
    try {
      const parsed = JSON.parse(jsonText) as RoadNetwork
      if (!parsed.nodes || !parsed.edges) {
        alert('JSON格式不正确')
        return
      }
      setRoadNetwork(parsed)
      queueMicrotask(() => {
        resetRouteState()
        reloadNetworkInScene(parsed)
      })
    } catch {
      alert('JSON解析失败，请检查内容')
    }
  }, [reloadNetworkInScene, resetRouteState])

  const handleApplyTemplate = useCallback((kind: import('./lib/sceneTemplates').SceneTemplateKind) => {
    const template = createSceneTemplate(kind)
    const preset = getTemplateRoutePreset(kind)
    setRoadNetwork(template)
    setStartNode(preset.start)
    setEndNode(preset.end)
    setBuilderDraggingNodeId(null)
    setBuilderAddNodeMode(false)
    queueMicrotask(() => {
      resetRouteState()
      reloadNetworkInScene(template)
      sceneRef.current?.highlightEndpoints(preset.start, preset.end)
    })
  }, [reloadNetworkInScene, resetRouteState])

  const baseEdges = useMemo(() => roadNetwork.edges.filter(e => !e.id.endsWith('_rev')), [roadNetwork.edges])
  const summary = useMemo(() => {
    const total = baseEdges.length
    const avg = total > 0 ? baseEdges.reduce((sum, e) => sum + e.congestion, 0) / total : 0
    return {
      total,
      avg,
      level3d: baseEdges.filter(e => e.type !== 'ground').length,
      healthy: baseEdges.filter(e => e.congestion < 0.3).length,
      warning: baseEdges.filter(e => e.congestion >= 0.3 && e.congestion < 0.7).length,
      danger: baseEdges.filter(e => e.congestion >= 0.7).length,
    }
  }, [baseEdges])

  // 键盘控制
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.code) {
        case 'Space':
          e.preventDefault()
          if (activePage === 'simulation') handlePlayPause()
          break
        case 'ArrowUp':
          e.preventDefault()
          if (activePage === 'simulation') handleSpeedUp()
          break
        case 'ArrowDown':
          e.preventDefault()
          if (activePage === 'simulation') handleSpeedDown()
          break
        case 'ArrowLeft':
          e.preventDefault()
          if (activePage === 'simulation') handlePrevNode()
          break
        case 'ArrowRight':
          e.preventDefault()
          if (activePage === 'simulation') handleNextNode()
          break
        case 'Escape':
          setIsSelectingRoad(false)
          setSelectedEdge(null)
          sceneRef.current?.highlightSelectedRoad(null)
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activePage, handlePlayPause, handleSpeedUp, handleSpeedDown, handlePrevNode, handleNextNode])

  return (
    <div className="h-screen w-screen overflow-hidden bg-background">
      <header className="absolute top-0 left-0 right-0 z-20 glass border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gradient">3D城市道路导航仿真系统（管理版）</h1>
          <div className="flex items-center gap-2">
            <Button size="sm" variant={activePage === 'overview' ? 'glow' : 'outline'} onClick={() => setActivePage('overview')}>
              <LayoutDashboard className="h-4 w-4 mr-1" />总览
            </Button>
            <Button size="sm" variant={activePage === 'simulation' ? 'glow' : 'outline'} onClick={() => setActivePage('simulation')}>
              <Car className="h-4 w-4 mr-1" />演示驾驶
            </Button>
            <Button size="sm" variant={activePage === 'builder' ? 'glow' : 'outline'} onClick={() => setActivePage('builder')}>
              <Boxes className="h-4 w-4 mr-1" />场景搭建
            </Button>
          </div>
        </div>
      </header>

      <div
        ref={containerRef}
        className={`absolute inset-0 pt-14 ${activePage === 'simulation' ? '' : 'opacity-40'}`}
        style={{ cursor: isSelectingRoad ? 'pointer' : (selectingFor ? 'crosshair' : 'grab') }}
      />

      {activePage === 'simulation' && (
        <>
          {isLeftPanelVisible && (
            <div className="absolute top-20 left-4 z-10 space-y-4 max-h-[calc(100vh-100px)] overflow-y-auto pr-1">
              <ControlPanel
                nodes={roadNetwork.nodes}
                startNode={startNode}
                endNode={endNode}
                onStartNodeChange={setStartNode}
                onEndNodeChange={setEndNode}
                onPlanPath={handlePlanPath}
                isPlaying={isPlaying}
                onPlayPause={handlePlayPause}
                onReset={handleReset}
                onPrevNode={handlePrevNode}
                onNextNode={handleNextNode}
                onSpeedUp={handleSpeedUp}
                onSpeedDown={handleSpeedDown}
                speedMultiplier={speedMultiplier}
                is3DMode={is3DMode}
                onToggleViewMode={handleToggleViewMode}
                isFollowMode={isFollowMode}
                onToggleFollowMode={handleToggleFollowMode}
                config={config}
                onConfigChange={handleConfigChange}
                hasPath={!!pathResult}
                currentNodeIndex={currentNodeIndex}
                totalNodes={pathResult?.path.length || 0}
                recommendedRoutes={recommendedRoutes}
              />

              <CongestionPanel
                selectedEdge={selectedEdge}
                isSelectingRoad={isSelectingRoad}
                onToggleSelectMode={handleToggleSelectRoad}
                onCongestionChange={handleCongestionChange}
                onClearSelection={handleClearRoadSelection}
              />
            </div>
          )}

          <Button
            size="icon"
            variant="outline"
            className={`absolute top-20 z-20 glass border-primary/40 transition-all ${isLeftPanelVisible ? 'left-[376px]' : 'left-4'}`}
            onClick={() => setIsLeftPanelVisible(prev => !prev)}
            title={isLeftPanelVisible ? '隐藏左侧控制面板' : '显示左侧控制面板'}
          >
            {isLeftPanelVisible ? <PanelLeftClose className="h-4 w-4" /> : <PanelLeftOpen className="h-4 w-4" />}
          </Button>

          {isRightPanelVisible && (
            <div className="absolute top-20 right-4 z-10 w-[340px] max-h-[calc(100vh-100px)] space-y-4 overflow-y-auto pr-1">
              <NavigationPanel
                currentHint={navHints[currentHintIndex] || null}
                nextHint={navHints[currentHintIndex + 1] || null}
                currentNode={currentNode}
                remainingDistance={remainingDistance}
                remainingTime={remainingTime}
              />
              <PathInfoPanel pathResult={pathResult} nodes={roadNetwork.nodes} />
            </div>
          )}

          <Button
            size="icon"
            variant="outline"
            className={`absolute top-20 z-20 glass border-primary/40 transition-all ${isRightPanelVisible ? 'right-[364px]' : 'right-4'}`}
            onClick={() => setIsRightPanelVisible(prev => !prev)}
            title={isRightPanelVisible ? '隐藏右侧导航面板' : '显示右侧导航面板'}
          >
            {isRightPanelVisible ? <PanelRightClose className="h-4 w-4" /> : <PanelRightOpen className="h-4 w-4" />}
          </Button>
        </>
      )}

      {activePage === 'overview' && (
        <div className="absolute inset-0 z-10 pt-20 px-4 overflow-y-auto">
          <div className="max-w-7xl mx-auto space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              <Card><CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2"><Route className="h-4 w-4 text-primary" />道路总量</CardTitle></CardHeader><CardContent><p className="text-3xl font-bold text-primary">{summary.total}</p></CardContent></Card>
              <Card><CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2"><BarChart3 className="h-4 w-4 text-accent" />平均拥堵</CardTitle></CardHeader><CardContent><p className="text-3xl font-bold text-accent">{(summary.avg * 100).toFixed(0)}%</p></CardContent></Card>
              <Card><CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2"><Layers className="h-4 w-4 text-primary" />立体道路</CardTitle></CardHeader><CardContent><p className="text-3xl font-bold text-primary">{summary.level3d}</p></CardContent></Card>
              <Card><CardHeader className="pb-2"><CardTitle className="text-base">拥堵分布</CardTitle></CardHeader><CardContent className="text-sm"><p>畅通 {summary.healthy}</p><p>缓行 {summary.warning}</p><p>拥堵 {summary.danger}</p></CardContent></Card>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-2"><CardTitle className="text-base">为什么深度用户会留下来</CardTitle></CardHeader>
                <CardContent className="space-y-2 text-sm text-foreground/85">
                  <p className="rounded border border-primary/30 bg-primary/5 p-3">场景切换不是换底图，而是直接切换完整立体道路实验网络，进入系统就能开始对比演示。</p>
                  <p className="rounded border border-primary/30 bg-primary/5 p-3">在一个页面里完成选点、算路、2D/3D切换、跟车观察、拥堵调节，不需要频繁跳模块。</p>
                  <p className="rounded border border-primary/30 bg-primary/5 p-3">模板优先 + JSON 兜底，兼顾快速实验与自定义构建，比只会展示或只会编辑的竞品更贴近答辩与研究使用场景。</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2"><CardTitle className="text-base">当前版本的核心优势</CardTitle></CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p className="rounded border border-border p-3">可视化上强调桥上、桥下、匝道的空间层次，适合做立体道路导航主题展示。</p>
                  <p className="rounded border border-border p-3">推荐路线已收敛为高频与立体对比两类，降低首次使用门槛。</p>
                  <p className="rounded border border-border p-3">右侧导航信息可滚动查看，不再出现面板底部被截断的问题。</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      )}

      {activePage === 'builder' && (
        <div className="absolute inset-0 z-10 pt-20 px-4 overflow-y-auto">
          <div className="max-w-7xl mx-auto space-y-4">
            <Card>
              <CardHeader className="pb-2"><CardTitle className="text-base">场景搭建与实验切换</CardTitle></CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                面向深度使用者，当前版本将复杂的逐条造路收敛为“模板切换 + JSON 导入”。先快速进入真实立体道路场景，再做实验与答辩演示。
              </CardContent>
            </Card>
            <SceneBuilderPanel
              onApplyTemplate={handleApplyTemplate}
              onExport={handleExportScene}
              onImport={handleImportScene}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
