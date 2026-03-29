/**
 * Three.js 3D 场景渲染器
 * 渲染地面道路网络、地标节点、建筑物与车辆动画
 */

import * as THREE from 'three'
import { RoadNetwork, RoadNode, RoadEdge, PathResult, VehicleState, Building } from '../data/types'

// 道路颜色配置（当前均为地面道路）
const ROAD_COLORS = {
  ground: 0x4a5568,
  highlight: 0x00d4ff,
  pathGlow: 0x00ffff,
}

// 节点颜色
const NODE_COLORS = {
  normal: 0x64748b,
  start: 0x22c55e,       // 起点 - 绿色
  end: 0xef4444,         // 终点 - 红色
  selected: 0xfbbf24,    // 选中 - 黄色
  hover: 0x00d4ff,       // 悬停 - 青色
}

export class Scene3D {
  private scene: THREE.Scene
  private camera: THREE.PerspectiveCamera
  private renderer: THREE.WebGLRenderer
  private container: HTMLElement
  
  private roadMeshes: Map<string, THREE.Object3D> = new Map()
  private nodeMeshes: Map<string, THREE.Mesh> = new Map()
  private buildingMeshes: Map<string, THREE.Group> = new Map()
  private buildingLabels: THREE.Group = new THREE.Group()
  /** T 型立交（自定义网格，与路网 renderInScene:false 边对应） */
  private interchangeGroup: THREE.Group | null = null
  private pathHighlight: THREE.Group | null = null
  private vehicle: THREE.Group | null = null
  private vehicleLight: THREE.PointLight | null = null
  
  private nodeMap: Map<string, RoadNode> = new Map()
  private buildingMap: Map<string, Building> = new Map()
  private is3DMode: boolean = true
  private animationId: number | null = null
  private lastFrameTime = performance.now()
  
  // 悬停提示
  private tooltip: HTMLDivElement | null = null
  private raycaster: THREE.Raycaster = new THREE.Raycaster()
  
  // 相机控制
  private cameraDistance = 400
  private cameraAngleX = 0.3
  private cameraAngleY = Math.PI / 4
  private cameraFocus = new THREE.Vector3(0, 0, 0)
  private followLookAt = new THREE.Vector3(0, 0, 0)
  private pressedKeys: Set<string> = new Set()
  private isDragging = false
  private lastMouseX = 0
  private lastMouseY = 0
  
  // 跟车模式
  private followVehicle = false
  
  constructor(container: HTMLElement) {
    this.container = container
    
    // 初始化场景
    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(0x0f172a)
    this.scene.fog = new THREE.Fog(0x0f172a, 400, 1000)
    
    // 初始化相机
    const aspect = container.clientWidth / container.clientHeight
    this.camera = new THREE.PerspectiveCamera(60, aspect, 1, 2000)
    this.updateCameraPosition()
    
    // 初始化渲染器
    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setSize(container.clientWidth, container.clientHeight)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    container.appendChild(this.renderer.domElement)
    
    // 添加灯光
    this.setupLights()
    
    // 添加地面网格
    this.addGroundGrid()
    
    // 添加建筑标签组
    this.scene.add(this.buildingLabels)
    
    // 创建悬停提示框
    this.createTooltip()
    
    // 事件监听
    this.setupEventListeners()
    
    // 开始渲染循环
    this.animate()
  }
  
  private setupLights() {
    // 环境光
    const ambientLight = new THREE.AmbientLight(0x334155, 0.6)
    this.scene.add(ambientLight)
    
    // 主方向光
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8)
    dirLight.position.set(100, 200, 100)
    dirLight.castShadow = true
    dirLight.shadow.mapSize.width = 2048
    dirLight.shadow.mapSize.height = 2048
    dirLight.shadow.camera.near = 10
    dirLight.shadow.camera.far = 500
    dirLight.shadow.camera.left = -300
    dirLight.shadow.camera.right = 300
    dirLight.shadow.camera.top = 300
    dirLight.shadow.camera.bottom = -300
    this.scene.add(dirLight)
    
    // 辅助光
    const fillLight = new THREE.DirectionalLight(0x0891b2, 0.3)
    fillLight.position.set(-100, 100, -100)
    this.scene.add(fillLight)
  }
  
  /**
   * 创建悬停提示框
   */
  private createTooltip() {
    this.tooltip = document.createElement('div')
    this.tooltip.style.cssText = `
      position: absolute;
      padding: 8px 12px;
      background: rgba(15, 23, 42, 0.95);
      border: 1px solid rgba(59, 130, 246, 0.5);
      border-radius: 8px;
      color: white;
      font-size: 13px;
      pointer-events: none;
      z-index: 1000;
      display: none;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(8px);
      max-width: 200px;
    `
    this.container.appendChild(this.tooltip)
  }
  
  /**
   * 显示悬停提示
   */
  private showTooltip(x: number, y: number, content: string, type?: string) {
    if (!this.tooltip) return
    
    let icon = '📍'
    if (type === 'gate') icon = '🚪'
    else if (type === 'shop') icon = '🏪'
    else if (type === 'bus_stop') icon = '🚌'
    else if (type === 'intersection') icon = '🔀'
    else if (type === 'building') icon = '🏢'
    else if (type === 'road') icon = '🛣️'
    
    this.tooltip.innerHTML = `<span style="margin-right: 4px;">${icon}</span>${content}`
    this.tooltip.style.display = 'block'
    this.tooltip.style.left = `${x + 15}px`
    this.tooltip.style.top = `${y + 15}px`
  }
  
  /**
   * 隐藏悬停提示
   */
  private hideTooltip() {
    if (this.tooltip) {
      this.tooltip.style.display = 'none'
    }
  }
  
  /**
   * 处理鼠标悬停
   */
  private handleHover(event: MouseEvent) {
    const rect = this.renderer.domElement.getBoundingClientRect()
    const mouse = new THREE.Vector2(
      ((event.clientX - rect.left) / rect.width) * 2 - 1,
      -((event.clientY - rect.top) / rect.height) * 2 + 1
    )
    
    this.raycaster.setFromCamera(mouse, this.camera)
    
    // 检测节点
    const nodeMeshes = Array.from(this.nodeMeshes.values())
    const nodeIntersects = this.raycaster.intersectObjects(nodeMeshes)
    
    if (nodeIntersects.length > 0) {
      const node = nodeIntersects[0].object.userData.node as RoadNode
      if (node) {
        this.showTooltip(event.clientX - rect.left, event.clientY - rect.top, node.name, node.landmarkType)
        return
      }
    }
    
    // 检测建筑
    const buildingMeshes = Array.from(this.buildingMeshes.values())
    const buildingIntersects = this.raycaster.intersectObjects(buildingMeshes, true)
    
    if (buildingIntersects.length > 0) {
      let obj = buildingIntersects[0].object
      while (obj.parent && !obj.userData.building) {
        obj = obj.parent as THREE.Object3D
      }
      const building = obj.userData.building as Building
      if (building) {
        this.showTooltip(event.clientX - rect.left, event.clientY - rect.top, building.name, 'building')
        return
      }
    }
    
    // 检测道路
    const roadMeshes = Array.from(this.roadMeshes.values())
    const roadIntersects = this.raycaster.intersectObjects(roadMeshes)
    
    if (roadIntersects.length > 0) {
      const hit = roadIntersects[0].object
      const edge = hit.userData.edge as RoadEdge
      if (edge) {
        const fromNode = this.nodeMap.get(edge.from)
        const toNode = this.nodeMap.get(edge.to)
        const roadName = fromNode && toNode 
          ? `${fromNode.name} → ${toNode.name}`
          : edge.id
        const congestionText = edge.congestion > 0.7 ? '拥堵' : edge.congestion > 0.4 ? '缓行' : '畅通'
        this.showTooltip(
          event.clientX - rect.left, 
          event.clientY - rect.top, 
          `${roadName}<br><span style="color: ${edge.congestion > 0.7 ? '#ef4444' : edge.congestion > 0.4 ? '#f97316' : '#22c55e'}">${congestionText}</span> · ${edge.speedLimit}km/h`,
          'road'
        )
        return
      }
    }
    
    this.hideTooltip()
  }
  
  private addGroundGrid() {
    // 地面平面
    const groundGeometry = new THREE.PlaneGeometry(1000, 1000)
    const groundMaterial = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.9,
      metalness: 0.1,
    })
    const ground = new THREE.Mesh(groundGeometry, groundMaterial)
    ground.rotation.x = -Math.PI / 2
    ground.position.y = -1
    ground.receiveShadow = true
    this.scene.add(ground)
    
    // 网格线
    const gridHelper = new THREE.GridHelper(800, 40, 0x334155, 0x1e293b)
    gridHelper.position.y = 0
    this.scene.add(gridHelper)
  }
  
  private setupEventListeners() {
    // 鼠标拖拽控制（保留视角旋转，便于观察局部）
    this.renderer.domElement.addEventListener('mousedown', (e) => {
      this.isDragging = true
      this.lastMouseX = e.clientX
      this.lastMouseY = e.clientY
    })
    
    window.addEventListener('mouseup', () => {
      this.isDragging = false
    })
    
    window.addEventListener('mousemove', (e) => {
      // 拖拽相机
      if (this.isDragging && !this.followVehicle) {
        const deltaX = e.clientX - this.lastMouseX
        const deltaY = e.clientY - this.lastMouseY
        
        this.cameraAngleY += deltaX * 0.01
        this.cameraAngleX = Math.max(0.1, Math.min(Math.PI / 2 - 0.1, this.cameraAngleX + deltaY * 0.01))
        
        this.updateCameraPosition()
        
        this.lastMouseX = e.clientX
        this.lastMouseY = e.clientY
        
        this.hideTooltip()
      }
    })
    
    // 悬停检测
    this.renderer.domElement.addEventListener('mousemove', (e) => {
      if (!this.isDragging) {
        this.handleHover(e)
      }
    })
    
    // 鼠标离开时隐藏提示
    this.renderer.domElement.addEventListener('mouseleave', () => {
      this.hideTooltip()
    })
    
    // 滚轮缩放
    this.renderer.domElement.addEventListener('wheel', (e) => {
      e.preventDefault()
      this.cameraDistance = Math.max(100, Math.min(800, this.cameraDistance + e.deltaY * 0.5))
      this.updateCameraPosition()
    })

    // 键盘平移视角
    window.addEventListener('keydown', (e) => {
      const target = e.target as HTMLElement | null
      if (target) {
        const tagName = target.tagName.toLowerCase()
        if (tagName === 'input' || tagName === 'textarea' || target.isContentEditable) {
          return
        }
      }

      const key = e.key.toLowerCase()
      if (['w', 'a', 's', 'd'].includes(key)) {
        this.pressedKeys.add(key)
      }
    })

    window.addEventListener('keyup', (e) => {
      this.pressedKeys.delete(e.key.toLowerCase())
    })
    
    // 窗口大小变化
    window.addEventListener('resize', () => {
      const width = this.container.clientWidth
      const height = this.container.clientHeight
      this.camera.aspect = width / height
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(width, height)
    })
  }
  
  private updateCameraPosition() {
    if (this.followVehicle && this.vehicle) {
      this.updateFollowCamera(true)
    } else {
      const x = this.cameraDistance * Math.sin(this.cameraAngleX) * Math.sin(this.cameraAngleY)
      const y = this.cameraDistance * Math.cos(this.cameraAngleX)
      const z = this.cameraDistance * Math.sin(this.cameraAngleX) * Math.cos(this.cameraAngleY)
      this.camera.position.set(this.cameraFocus.x + x, this.cameraFocus.y + y, this.cameraFocus.z + z)
      this.camera.lookAt(this.cameraFocus)
    }
  }
  
  /**
   * 加载道路网络
   */
  loadRoadNetwork(network: RoadNetwork) {
    if (this.interchangeGroup) {
      this.scene.remove(this.interchangeGroup)
      this.interchangeGroup = null
    }
    // 清除旧的道路
    this.roadMeshes.forEach(mesh => this.scene.remove(mesh))
    this.nodeMeshes.forEach(mesh => this.scene.remove(mesh))
    this.buildingMeshes.forEach(mesh => this.scene.remove(mesh))
    this.roadMeshes.clear()
    this.nodeMeshes.clear()
    this.buildingMeshes.clear()
    this.buildingMap.clear()
    
    // 清除建筑标签
    while (this.buildingLabels.children.length > 0) {
      this.buildingLabels.remove(this.buildingLabels.children[0])
    }
    
    // 创建节点映射
    this.nodeMap = new Map(network.nodes.map(n => [n.id, n]))
    
    // 渲染道路
    for (const edge of network.edges) {
      this.addRoad(edge)
    }
    
    // 只渲染地标节点（减少节点球数量）
    for (const node of network.nodes) {
      if (node.isLandmark) {
        this.addNode(node)
      }
    }
    
    // 渲染建筑物
    if (network.buildings) {
      for (const building of network.buildings) {
        this.buildingMap.set(building.id, building)
        this.addBuilding(building)
      }
    }
  }

  /**
   * 挂载 T 型立交网格，并注册路面 Mesh 供路径高亮（含 _rev 与同 mesh 映射）
   */
  addTInterchangeGroup(group: THREE.Group, edgeMeshes: Map<string, THREE.Mesh>, allEdges: RoadEdge[]) {
    if (this.interchangeGroup) {
      this.scene.remove(this.interchangeGroup)
    }
    this.interchangeGroup = group
    this.scene.add(group)

    const byId = new Map(allEdges.map((e) => [e.id, e]))
    edgeMeshes.forEach((mesh, id) => {
      const edge = byId.get(id)
      if (edge && !mesh.userData.edge) {
        mesh.userData.edge = edge
      }
      this.roadMeshes.set(id, mesh)
      this.roadMeshes.set(`${id}_rev`, mesh)
    })
  }
  
  /**
   * 地面道路：长方体沿起终点放置（无样条/挤出）
   */
  private addRoad(edge: RoadEdge) {
    if (edge.renderInScene === false) return
    const fromNode = this.nodeMap.get(edge.from)
    const toNode = this.nodeMap.get(edge.to)
    if (!fromNode || !toNode) return

    const startY = this.is3DMode ? fromNode.z : 0
    const endY = this.is3DMode ? toNode.z : 0
    const start = new THREE.Vector3(fromNode.x, startY, fromNode.y)
    const end = new THREE.Vector3(toNode.x, endY, toNode.y)
    const direction = end.clone().sub(start)
    const horizontalDir = new THREE.Vector3(direction.x, 0, direction.z)
    const horizontalLength = horizontalDir.length()
    const length3D = direction.length()
    const heightDiff = endY - startY
    const slopeAngle = horizontalLength > 1e-6 ? Math.atan2(heightDiff, horizontalLength) : 0

    const roadWidth = 8
    const roadHeight = 0.65
    const geometry = new THREE.BoxGeometry(length3D, roadHeight, roadWidth)
    const color = ROAD_COLORS.ground
    /** 不透明沥青实体：与立交路面一致，避免半透明穿模 */
    const material = new THREE.MeshStandardMaterial({
      color,
      transparent: false,
      opacity: 1,
      depthWrite: true,
      depthTest: true,
      side: THREE.DoubleSide,
      metalness: 0.2,
      roughness: 0.8,
    })

    const road = new THREE.Mesh(geometry, material)
    const midpoint = start.clone().add(end).multiplyScalar(0.5)
    road.position.copy(midpoint)
    road.position.y += roadHeight / 2
    road.rotation.y = -Math.atan2(direction.z, direction.x)
    road.rotation.z = slopeAngle
    road.castShadow = true
    road.receiveShadow = true
    road.renderOrder = 0
    road.userData = { edgeId: edge.id, edge, restColor: color }

    this.scene.add(road)
    this.roadMeshes.set(edge.id, road)
  }

  /** 解除高亮/选中后恢复道路本色（立交与城区路网共用 restColor） */
  private restoreRoadMeshBaseAppearance(mesh: THREE.Mesh) {
    const material = mesh.material as THREE.MeshStandardMaterial
    const rest = mesh.userData.restColor as number | undefined
    material.color.setHex(rest ?? ROAD_COLORS.ground)
    material.emissive.setHex(0x000000)
    material.emissiveIntensity = 0
    material.transparent = false
    material.opacity = 1
    material.depthWrite = true
  }

  /**
   * 添加节点
   */
  private addNode(node: RoadNode) {
    // 根据地标类型选择不同的颜色和大小
    let color = NODE_COLORS.normal
    let size = 3
    
    if (node.landmarkType === 'gate') {
      color = 0x22c55e // 校门 - 绿色
      size = 4
    } else if (node.landmarkType === 'shop') {
      color = 0xef4444 // 商店 - 红色
      size = 3.5
    } else if (node.landmarkType === 'bus_stop') {
      color = 0xfbbf24 // 公交站 - 黄色
      size = 3
    } else if (node.landmarkType === 'intersection') {
      color = 0x0ea5e9 // 路口 - 青色
      size = 2.5
    }
    
    const geometry = new THREE.SphereGeometry(size, 16, 16)
    const material = new THREE.MeshStandardMaterial({
      color,
      roughness: 0.5,
      metalness: 0.5,
      emissive: color,
      emissiveIntensity: 0.3,
    })
    
    const mesh = new THREE.Mesh(geometry, material)
    const nodeY = this.is3DMode ? node.z : 0
    mesh.position.set(node.x, nodeY + 3, node.y)
    mesh.castShadow = true
    mesh.userData = { nodeId: node.id, node }
    
    this.scene.add(mesh)
    this.nodeMeshes.set(node.id, mesh)
  }
  
  /**
   * 添加建筑物
   */
  private addBuilding(building: Building) {
    const buildingGroup = new THREE.Group()
    
    // 建筑物主体颜色
    const color = building.color || this.getBuildingColor(building.type)
    
    // 建筑物主体
    const bodyGeometry = new THREE.BoxGeometry(building.width, building.height, building.depth)
    const bodyMaterial = new THREE.MeshStandardMaterial({
      color,
      roughness: 0.6,
      metalness: 0.2,
      emissive: color,
      emissiveIntensity: 0.1,
    })
    
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial)
    body.position.y = building.height / 2
    body.castShadow = true
    body.receiveShadow = true
    buildingGroup.add(body)
    
    // 屋顶装饰（略微深色）
    const roofGeometry = new THREE.BoxGeometry(building.width + 1, 1, building.depth + 1)
    const roofMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(color).multiplyScalar(0.7).getHex(),
      roughness: 0.7,
      metalness: 0.3,
    })
    const roof = new THREE.Mesh(roofGeometry, roofMaterial)
    roof.position.y = building.height + 0.5
    roof.castShadow = true
    buildingGroup.add(roof)
    
    // 窗户效果（仅对较高建筑）
    if (building.height > 12) {
      this.addBuildingWindows(buildingGroup, building)
    }
    
    // 设置位置（注意Y轴与Z轴转换）
    buildingGroup.position.set(building.x, 0, building.y)
    buildingGroup.userData = { buildingId: building.id, building }
    
    this.scene.add(buildingGroup)
    this.buildingMeshes.set(building.id, buildingGroup)
  }
  
  /**
   * 为建筑添加窗户效果
   */
  private addBuildingWindows(group: THREE.Group, building: Building) {
    const windowMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffee,
      transparent: true,
      opacity: 0.6,
    })
    
    const floors = Math.floor(building.height / 5)
    const windowsPerFloor = Math.floor(building.width / 6)
    
    // 前后两面添加窗户
    for (let f = 0; f < floors; f++) {
      for (let w = 0; w < windowsPerFloor; w++) {
        const windowGeom = new THREE.PlaneGeometry(2, 2.5)
        
        // 前面窗户
        const frontWindow = new THREE.Mesh(windowGeom, windowMaterial)
        frontWindow.position.set(
          (w - windowsPerFloor / 2 + 0.5) * 5,
          3 + f * 5,
          building.depth / 2 + 0.1
        )
        group.add(frontWindow)
        
        // 后面窗户
        const backWindow = new THREE.Mesh(windowGeom, windowMaterial)
        backWindow.position.set(
          (w - windowsPerFloor / 2 + 0.5) * 5,
          3 + f * 5,
          -building.depth / 2 - 0.1
        )
        backWindow.rotation.y = Math.PI
        group.add(backWindow)
      }
    }
  }
  
  /**
   * 获取建筑类型对应的颜色
   */
  private getBuildingColor(type: string): number {
    switch (type) {
      case 'school': return 0x3b82f6   // 学校 - 蓝色
      case 'shop': return 0xef4444     // 商店 - 红色
      case 'office': return 0x64748b   // 办公楼 - 灰色
      case 'residence': return 0x22c55e // 住宅 - 绿色
      case 'landmark': return 0xfbbf24  // 地标 - 黄色
      default: return 0x94a3b8
    }
  }
  
  /**
   * 高亮起点和终点
   */
  highlightEndpoints(startId: string | null, endId: string | null) {
    this.nodeMeshes.forEach((mesh, nodeId) => {
      const material = mesh.material as THREE.MeshStandardMaterial
      if (nodeId === startId) {
        material.color.setHex(NODE_COLORS.start)
        material.emissive.setHex(NODE_COLORS.start)
        material.emissiveIntensity = 0.5
        mesh.scale.setScalar(1.5)
      } else if (nodeId === endId) {
        material.color.setHex(NODE_COLORS.end)
        material.emissive.setHex(NODE_COLORS.end)
        material.emissiveIntensity = 0.5
        mesh.scale.setScalar(1.5)
      } else {
        material.color.setHex(NODE_COLORS.normal)
        material.emissive.setHex(NODE_COLORS.normal)
        material.emissiveIntensity = 0.2
        mesh.scale.setScalar(1)
      }
    })
  }
  
  /**
   * 高亮规划路径
   */
  highlightPath(pathResult: PathResult | null) {
    // 清除旧的路径高亮
    if (this.pathHighlight) {
      this.scene.remove(this.pathHighlight)
      this.pathHighlight = null
    }
    
    this.roadMeshes.forEach((meshObj) => {
      const mesh = meshObj as THREE.Mesh
      this.restoreRoadMeshBaseAppearance(mesh)
    })
    
    if (!pathResult) return
    
    // 创建发光路径
    this.pathHighlight = new THREE.Group()
    
    for (const edge of pathResult.edges) {
      const baseId = edge.id.replace(/_rev$/, '')
      const meshObj = this.roadMeshes.get(edge.id) ?? this.roadMeshes.get(baseId)
      if (meshObj) {
        const mesh = meshObj as THREE.Mesh
        const material = mesh.material as THREE.MeshStandardMaterial
        material.transparent = false
        material.opacity = 1
        material.depthWrite = true
        material.color.setHex(ROAD_COLORS.highlight)
        material.emissive.setHex(ROAD_COLORS.pathGlow)
        material.emissiveIntensity = 0.5
      }
    }
    
    // 添加路径线条发光效果
    const pathPoints: THREE.Vector3[] = []
    for (const nodeId of pathResult.path) {
      const node = this.nodeMap.get(nodeId)
      if (node) {
        const nodeY = this.is3DMode ? node.z + 5 : 5
        pathPoints.push(new THREE.Vector3(node.x, nodeY, node.y))
      }
    }
    
    if (pathPoints.length > 1) {
      const curve = new THREE.CatmullRomCurve3(pathPoints)
      const tubeGeometry = new THREE.TubeGeometry(curve, pathPoints.length * 10, 1.2, 8, false)
      const tubeMaterial = new THREE.MeshBasicMaterial({
        color: ROAD_COLORS.pathGlow,
        transparent: true,
        opacity: 0.6,
      })
      const tube = new THREE.Mesh(tubeGeometry, tubeMaterial)
      this.pathHighlight.add(tube)
    }
    
    this.scene.add(this.pathHighlight)
  }
  
  /**
   * 创建导航车辆
   * 车辆模型：车头朝向Z+方向（对应数据的Y+方向，即北方）
   */
  createVehicle(): THREE.Group {
    if (this.vehicle) {
      this.scene.remove(this.vehicle)
    }
    
    this.vehicle = new THREE.Group()
    
    // 车身 (长度沿Z轴，车头朝向Z+)
    const bodyGeometry = new THREE.BoxGeometry(6, 4, 10)
    const bodyMaterial = new THREE.MeshStandardMaterial({
      color: 0x3b82f6,
      roughness: 0.3,
      metalness: 0.8,
      emissive: 0x3b82f6,
      emissiveIntensity: 0.3,
    })
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial)
    body.position.y = 3
    body.castShadow = true
    this.vehicle.add(body)
    
    // 车顶 (在车身后部)
    const roofGeometry = new THREE.BoxGeometry(5, 3, 6)
    const roof = new THREE.Mesh(roofGeometry, bodyMaterial)
    roof.position.set(0, 6, -1)
    roof.castShadow = true
    this.vehicle.add(roof)
    
    // 车灯 (在车头Z+方向)
    const headlightGeometry = new THREE.SphereGeometry(0.8, 8, 8)
    const headlightMaterial = new THREE.MeshBasicMaterial({ color: 0xffffaa })
    
    const leftLight = new THREE.Mesh(headlightGeometry, headlightMaterial)
    leftLight.position.set(2, 3, 5)
    this.vehicle.add(leftLight)
    
    const rightLight = new THREE.Mesh(headlightGeometry, headlightMaterial)
    rightLight.position.set(-2, 3, 5)
    this.vehicle.add(rightLight)
    
    // 车辆光源
    this.vehicleLight = new THREE.PointLight(0x00d4ff, 2, 50)
    this.vehicleLight.position.set(0, 10, 0)
    this.vehicle.add(this.vehicleLight)
    
    this.scene.add(this.vehicle)
    return this.vehicle
  }
  
  /**
   * 更新车辆位置
   */
  updateVehiclePosition(state: VehicleState) {
    if (!this.vehicle) return
    
    this.vehicle.position.set(
      state.position.x,
      this.is3DMode ? state.position.z : 0,
      state.position.y
    )
    // 直接使用rotation作为Y轴旋转角度（已在simulator中正确计算）
    this.vehicle.rotation.y = state.rotation
    
    if (this.followVehicle) {
      this.updateFollowCamera(false)
    }
  }
  
  /**
   * 切换2D/3D模式
   */
  setViewMode(is3D: boolean) {
    this.is3DMode = is3D

    if (is3D) {
      this.cameraAngleX = 0.3
      this.cameraAngleY = Math.PI / 4
    } else {
      this.cameraAngleX = 0.01
      this.cameraAngleY = 0
    }

    this.updateCameraPosition()
  }
  
  /**
   * 设置跟车模式
   */
  setFollowVehicle(follow: boolean) {
    this.followVehicle = follow
    this.updateCameraPosition()
  }

  private updateCameraMovement(deltaTime: number) {
    if (this.followVehicle) {
      this.updateFollowCamera(false)
      return
    }

    if (this.pressedKeys.size === 0) return

    const moveSpeed = Math.max(40, this.cameraDistance * 0.35) * deltaTime
    const forward = new THREE.Vector3(Math.sin(this.cameraAngleY), 0, Math.cos(this.cameraAngleY)).normalize()
    const right = new THREE.Vector3(forward.z, 0, -forward.x).normalize()

    if (this.pressedKeys.has('w')) this.cameraFocus.add(forward.clone().multiplyScalar(moveSpeed))
    if (this.pressedKeys.has('s')) this.cameraFocus.add(forward.clone().multiplyScalar(-moveSpeed))
    if (this.pressedKeys.has('a')) this.cameraFocus.add(right.clone().multiplyScalar(-moveSpeed))
    if (this.pressedKeys.has('d')) this.cameraFocus.add(right.clone().multiplyScalar(moveSpeed))

    this.updateCameraPosition()
  }

  private updateFollowCamera(immediate: boolean) {
    if (!this.vehicle) return

    const vehiclePos = this.vehicle.position.clone()
    const desiredPosition = new THREE.Vector3(
      vehiclePos.x - 42 * Math.sin(this.vehicle.rotation.y),
      vehiclePos.y + 24,
      vehiclePos.z - 42 * Math.cos(this.vehicle.rotation.y)
    )
    const desiredLookAt = new THREE.Vector3(
      vehiclePos.x + 16 * Math.sin(this.vehicle.rotation.y),
      vehiclePos.y + 6,
      vehiclePos.z + 16 * Math.cos(this.vehicle.rotation.y)
    )

    if (immediate) {
      this.camera.position.copy(desiredPosition)
      this.followLookAt.copy(desiredLookAt)
    } else {
      this.camera.position.lerp(desiredPosition, 0.12)
      this.followLookAt.lerp(desiredLookAt, 0.16)
    }

    this.camera.lookAt(this.followLookAt)
  }
  
  /**
   * 获取点击的节点
   */
  getClickedNode(event: MouseEvent): RoadNode | null {
    const rect = this.renderer.domElement.getBoundingClientRect()
    const mouse = new THREE.Vector2(
      ((event.clientX - rect.left) / rect.width) * 2 - 1,
      -((event.clientY - rect.top) / rect.height) * 2 + 1
    )
    
    const raycaster = new THREE.Raycaster()
    raycaster.setFromCamera(mouse, this.camera)
    
    const meshes = Array.from(this.nodeMeshes.values())
    const intersects = raycaster.intersectObjects(meshes)
    
    if (intersects.length > 0) {
      return intersects[0].object.userData.node as RoadNode
    }
    
    return null
  }
  
  /**
   * 获取点击的道路
   */
  getClickedRoad(event: MouseEvent): RoadEdge | null {
    const rect = this.renderer.domElement.getBoundingClientRect()
    const mouse = new THREE.Vector2(
      ((event.clientX - rect.left) / rect.width) * 2 - 1,
      -((event.clientY - rect.top) / rect.height) * 2 + 1
    )
    
    const raycaster = new THREE.Raycaster()
    raycaster.setFromCamera(mouse, this.camera)
    
    const meshes = Array.from(this.roadMeshes.values())
    const intersects = raycaster.intersectObjects(meshes)
    
    if (intersects.length > 0) {
      return intersects[0].object.userData.edge as RoadEdge
    }
    
    return null
  }
  
  /**
   * 高亮选中的道路
   */
  highlightSelectedRoad(edgeId: string | null) {
    const stripRev = (s: string) => s.replace(/_rev$/, '')
    this.roadMeshes.forEach((meshObj, id) => {
      const mesh = meshObj as THREE.Mesh
      const material = mesh.material as THREE.MeshStandardMaterial
      
      if (id === edgeId || id === `${edgeId}_rev` || stripRev(id) === stripRev(edgeId ?? '')) {
        material.transparent = false
        material.opacity = 1
        material.depthWrite = true
        material.color.setHex(0xfbbf24)
        material.emissive.setHex(0xfbbf24)
        material.emissiveIntensity = 0.5
      } else {
        this.restoreRoadMeshBaseAppearance(mesh)
      }
    })
  }
  
  /**
   * 更新道路拥堵显示（根据拥堵值调整颜色）
   */
  updateRoadCongestion(edgeId: string, congestion: number) {
    const mesh = this.roadMeshes.get(edgeId) as THREE.Mesh
    const meshRev = this.roadMeshes.get(`${edgeId}_rev`) as THREE.Mesh
    
    const updateMesh = (m: THREE.Mesh | undefined) => {
      if (!m) return
      const edge = m.userData.edge as RoadEdge
      edge.congestion = congestion
      
      // 根据拥堵程度调整颜色
      const material = m.material as THREE.MeshStandardMaterial
      if (congestion > 0.7) {
        // 严重拥堵 - 红色
        material.color.setHex(0xef4444)
        material.emissive.setHex(0xef4444)
      } else if (congestion > 0.4) {
        // 中度拥堵 - 橙色
        material.color.setHex(0xf97316)
        material.emissive.setHex(0xf97316)
      } else {
        const rest = m.userData.restColor as number | undefined
        material.color.setHex(rest ?? ROAD_COLORS.ground)
        material.emissive.setHex(0x000000)
        material.emissiveIntensity = 0
        material.transparent = false
        material.opacity = 1
      }
    }
    
    updateMesh(mesh)
    updateMesh(meshRev)
  }
  
  private animate = () => {
    const currentTime = performance.now()
    const deltaTime = Math.min((currentTime - this.lastFrameTime) / 1000, 0.05)
    this.lastFrameTime = currentTime

    this.updateCameraMovement(deltaTime)
    this.animationId = requestAnimationFrame(this.animate)
    this.renderer.render(this.scene, this.camera)
  }
  
  /**
   * 销毁场景
   */
  dispose() {
    if (this.interchangeGroup) {
      this.scene.remove(this.interchangeGroup)
      this.interchangeGroup = null
    }
    if (this.animationId) {
      cancelAnimationFrame(this.animationId)
    }
    if (this.tooltip && this.tooltip.parentNode) {
      this.tooltip.parentNode.removeChild(this.tooltip)
    }
    this.renderer.dispose()
    this.container.removeChild(this.renderer.domElement)
  }
}
