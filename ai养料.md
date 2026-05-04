## 1) 核心目录树（最多 3 层，已忽略 `node_modules` / `dist` / `.git`）

项目根目录：`/Users/zhangrui/Desktop/毕设Web版`

/Users/zhangrui/Desktop/毕设Web版

├─ index.html

├─ package.json

├─ package-lock.json

├─ vite.config.ts

├─ tailwind.config.ts

├─ postcss.config.js

├─ tsconfig.json

├─ tsconfig.node.json

├─ public

│  └─ vite.svg

└─ src

   ├─ main.tsx

   ├─ App.tsx

   ├─ index.css

   ├─ components

   │  ├─ Scene3D.ts

   │  ├─ ControlPanel.tsx

   │  ├─ NavigationPanel.tsx

   │  ├─ PathInfoPanel.tsx

   │  ├─ CongestionPanel.tsx

   │  ├─ LocationSearch.tsx

   │  └─ ui

   │     ├─ Button.tsx

   │     └─ Card.tsx

   ├─ data

   │  ├─ types.ts

   │  └─ roadNetwork.ts

   ├─ lib

   │  ├─ pathfinding.ts

   │  ├─ simulator.ts

   │  ├─ navigationHints.ts

   │  ├─ roadGeometry.ts

   │  ├─ TInterchange.ts

   │  └─ utils.ts

   └─ hooks

------

## 2) 项目类型判定：纯前端项目（非前后端分离、非全栈）

- 依据 `package.json`：脚本是 `vite dev/build/preview`，依赖集中在 `react`、`three`、`tailwind`、`vite`，未出现后端框架依赖（如 `express`、`koa`、`nestjs`、`spring`、`django` 等）。
- 目录层面未发现后端目录：未找到 `server`、`api`、`controllers`、`services`（后端语义）、`db`、`prisma`、`migrations` 等。
- 在 `src` 内检索未发现后端或远程数据访问关键词（`fetch`/`axios`/`prisma`/`typeorm`/`sequelize` 等）。

结论：当前仓库是纯前端仿真可视化应用（Vite + React + Three.js）。

------

## 3) 主入口文件与初始化链路

初始化链路如下：

1. `index.html`
   - 挂载点：`<div id="root"></div>`
   - 入口脚本：`<script type="module" src="/src/main.tsx"></script>`
2. `src/main.tsx`
   - `ReactDOM.createRoot(document.getElementById('root')!).render(...)`
   - 渲染根组件：`<App />`
   - 同时加载全局样式：`import './index.css'`
3. `src/App.tsx`
   - 应用主控：初始化 `Scene3D`、`NavigationSimulator`，绑定路网数据、路径规划、导航提示、拥堵调节、2D/3D/跟车模式等。

即：`index.html -> src/main.tsx -> src/App.tsx -> 各功能组件与 lib`。

------

## 4) 最核心源码文件（12 个）及职责

1. `src/main.tsx`：React 应用启动入口，挂载 `App` 到 `#root`。
2. `src/App.tsx`：主业务编排层，连接路网数据、路径规划、三维场景、仿真控制和多个 UI 面板。
3. `src/components/Scene3D.ts`：Three.js 场景渲染核心，负责道路/节点/车辆绘制、交互拾取、相机与视图控制。
4. `src/lib/simulator.ts`：车辆导航仿真引擎，按路径推进车辆位置、速度、暂停/继续与节点切换。
5. `src/lib/pathfinding.ts`：路径规划算法实现（Dijkstra 与 A*），输出路径、距离、时间、边序列。
6. `src/data/roadNetwork.ts`：静态路网数据源（节点、边、建筑），并构造双向边网络。
7. `src/data/types.ts`：核心数据模型定义（`RoadNode`、`RoadEdge`、`RoadNetwork`、`PathResult` 等 TypeScript 接口/类型）。
8. `src/lib/navigationHints.ts`：根据路径与层级变化生成导航提示（直行/转向/上下匝道/进出高架/到达终点）。
9. `src/lib/TInterchange.ts`：T 型立交几何与连接逻辑，提供立交节点/边与三维构件参数。
10. `src/lib/roadGeometry.ts`：道路中心线与弧长采样工具，支持线性路段与 Catmull-Rom 曲线路段。
11. `src/components/ControlPanel.tsx`：主控 UI（路径规划、仿真播放、速度、视图模式、配置权重、推荐路线）。
12. `src/components/CongestionPanel.tsx`：道路拥堵交互面板，选择道路并调整拥堵系数，回写到路网状态。

------

## 5) 数据库与“数据模型”说明

- 未发现真实数据库接入：没有 `prisma` schema、ORM 配置、数据库连接代码、迁移文件或后端 API 层。
- 项目中的“数据模型”来自前端代码内 TypeScript 类型与对象：
  - 类型定义：`src/data/types.ts`
  - 具体数据：`src/data/roadNetwork.ts`
- 因此这里的模型是代码内对象/接口模型，不是数据库表模型。













## 数据模型与核心业务数据流分析

以下基于项目源码静态分析（非运行时抓包）。

### 1) 数据结构/类型定义文件定位

核心定义主要在这些文件：

- `/Users/zhangrui/Desktop/毕设Web版/src/data/types.ts`
  - 项目主数据模型：`RoadNode`、`RoadEdge`、`RoadNetwork`、`PathResult`、`NavigationHint`、`VehicleState`、`SimulationConfig` 等
- `/Users/zhangrui/Desktop/毕设Web版/src/data/roadNetwork.ts`
  - 业务基础数据：`nodes`、`edges`、`buildings`，并构造 `roadNetwork`
- `/Users/zhangrui/Desktop/毕设Web版/src/lib/TInterchange.ts`
  - 立交扩展数据结构与生成：`TInterchangeBuildResult`、`TInterchangePathSet`，以及立交节点/边的生成函数
- `/Users/zhangrui/Desktop/毕设Web版/src/lib/roadGeometry.ts`
  - 几何上下文结构：`RoadGeometryContext`（服务路径采样/插值）
- `/Users/zhangrui/Desktop/毕设Web版/src/components/ControlPanel.tsx`
  - UI 层本地历史结构：`HistoryRoute`（localStorage 持久化）

------

### 2) 最核心 8 个实体/结构（字段+类型+业务含义）

#### A. `RoadNode`（路网节点）

来源：`/Users/zhangrui/Desktop/毕设Web版/src/data/types.ts`

- `id: string`：节点唯一标识
- `x/y/z: number`：空间坐标（业务上用于2D/3D定位）
- `layer: number`：层级（地面/高架/匝道）
- `name: string`：节点名称
- `isLandmark?: boolean`：是否地标
- `landmarkType?: LandmarkType`：地标类别

业务含义：路径规划图中的“点”，也是导航提示和场景点击选择的最小单位。

------

#### B. `RoadEdge`（路段/有向边）

来源：`/Users/zhangrui/Desktop/毕设Web版/src/data/types.ts`

- `id: string`：边ID
- `from/to: string`：起终点节点ID（引用 `RoadNode.id`）
- `length: number`：长度
- `speedLimit: number`：限速
- `congestion: number`：拥堵系数
- `type: RoadType`：`ground | overpass | ramp`
- `segmentName?: string`：路段展示名
- `geometryPath?: {x,y,z}[]`：曲线路径控制点（用于匝道样条）
- `renderInScene?: boolean`：是否由常规 Scene3D 绘制

业务含义：路径算法的“边”，也是拥堵调节、渲染高亮、仿真速度计算的核心载体。

------

#### C. `RoadNetwork`（道路网络聚合根）

来源：`/Users/zhangrui/Desktop/毕设Web版/src/data/types.ts`

- `nodes: RoadNode[]`
- `edges: RoadEdge[]`
- `buildings?: Building[]`

业务含义：全局路网快照（App 中作为状态持有，可动态改拥堵）。

------

#### D. `PathResult`（路径规划结果）

来源：`/Users/zhangrui/Desktop/毕设Web版/src/data/types.ts`
产出逻辑：`/Users/zhangrui/Desktop/毕设Web版/src/lib/pathfinding.ts`

- `path: string[]`：节点ID序列
- `edges: RoadEdge[]`：经过边序列
- `totalCost/totalLength/estimatedTime: number`

业务含义：连接“算法输出”与“导航仿真/高亮/提示”的中间结果对象。

------

#### E. `NavigationHint`（导航提示）

来源：`/Users/zhangrui/Desktop/毕设Web版/src/data/types.ts`
生成逻辑：`/Users/zhangrui/Desktop/毕设Web版/src/lib/navigationHints.ts`

- `nodeId: string`：触发节点ID
- `type: NavHintType`：直行/转向/上下匝道/到达等
- `message: string`：提示文案
- `distance: number`：提示距离

业务含义：把路径几何变化（转向、层级切换）转成可读导航指令。

------

#### F. `VehicleState`（车辆仿真状态）

来源：`/Users/zhangrui/Desktop/毕设Web版/src/data/types.ts`
维护逻辑：`/Users/zhangrui/Desktop/毕设Web版/src/lib/simulator.ts`

- `position: {x,y,z}`
- `rotation: number`
- `currentNodeIndex: number`
- `progress: number`（当前边进度）
- `speed: number`
- `isPaused: boolean`

业务含义：动画驱动状态，持续推送给 `Scene3D.updateVehiclePosition` 渲染。

------

#### G. `SimulationConfig`（仿真与路径权重配置）

来源：`/Users/zhangrui/Desktop/毕设Web版/src/data/types.ts`

- `baseSpeed: number`
- `speedMultiplier: number`
- `weights: { length; time; congestion }`

业务含义：同时影响路径代价计算（Dijkstra/A*）与仿真运动速度。

------

#### H. `HistoryRoute`（历史路线，UI持久化）

来源：`/Users/zhangrui/Desktop/毕设Web版/src/components/ControlPanel.tsx`

- `start/end: string`
- `startName/endName: string`
- `timestamp: number`

业务含义：用户常用路线记录，存储在浏览器 `localStorage`。

------

### 3) 实体关系与“主外键”概念

#### 关键关系

- `RoadNetwork` 包含 `nodes[]` 与 `edges[]`
- `RoadEdge.from/to` 引用 `RoadNode.id`
- `PathResult.path[]` 引用 `RoadNode.id`
- `PathResult.edges[]` 来自 `RoadNetwork.edges` 的子序列
- `NavigationHint.nodeId` 引用 `RoadNode.id`，且通常对应 `PathResult.path` 中节点
- `VehicleState.currentNodeIndex/progress` 索引并驱动 `PathResult.path + edges`
- `SimulationConfig` 被 路径算法与仿真器共同消费
- `HistoryRoute.start/end` 引用 节点ID（用于回填起终点）

#### 是否存在主外键（PK/FK）

- 没有数据库层面的显式主外键约束（项目非后端DB模型）。
- 但存在内存级“逻辑主外键”：
  - 主键候选：`RoadNode.id`、`RoadEdge.id`
  - 外键候选：`RoadEdge.from/to`、`PathResult.path[]`、`NavigationHint.nodeId`、`HistoryRoute.start/end`

------

### 4) “数据库表”映射建议（推导映射，不是项目真实表）

你这次虽然是“如果用户要求数据库表”才给，这里我按你的主题先给一版可映射建议（纯推导）：

- `road_nodes`：映射 `RoadNode`
- `road_edges`：映射 `RoadEdge`（含 `from_node_id`、`to_node_id`）
- `road_network_buildings`：映射 `Building`
- `route_plans`：一次规划任务（起点、终点、总成本/总时长）
- `route_plan_edges`：规划结果经过的边（顺序号）
- `navigation_hints`：规划后生成的提示序列
- `navigation_history`：映射 `HistoryRoute`

再次强调：以上是按当前前端内存模型推导的关系型映射建议，不是项目现有真实数据库表。

------

### 5) 当前数据存储方式及位置

#### 1) 静态文件（初始路网）

- 位置：`/Users/zhangrui/Desktop/毕设Web版/src/data/roadNetwork.ts`
- 内容：节点、边、建筑（当前建筑数组为空）
- 说明：应用启动后作为初始数据源

#### 2) 内存状态（运行时主存储）

- 位置：`/Users/zhangrui/Desktop/毕设Web版/src/App.tsx`
- 方式：React `useState/useRef`
- 存储内容：`roadNetwork`（含可变拥堵）、`pathResult`、`navHints`、当前仿真状态等
- 说明：拥堵调整、路径规划结果都先落在内存

#### 3) 浏览器本地持久化（localStorage）

- 位置：`/Users/zhangrui/Desktop/毕设Web版/src/components/ControlPanel.tsx`
- Key：`nav_route_history`
- 内容：`HistoryRoute[]`
- 说明：仅保存最近路线历史，不保存完整路网或规划结果快照

#### 4) 未发现后端数据库/API持久化

- 在 `src` 内未发现 `fetch/axios` 的业务调用（除本地 `localStorage` 外）

- 结论：当前是“前端本地静态数据 + 内存计算 + 少量localStorage历史”的架构

- ## A. 路径规划与导航提示链路

  ### 1) 起点与关键调用顺序（函数名 + 文件路径）

  入口（用户操作）

  - 用户在控制面板点击“开始导航”：`handlePlanPath()`
    文件：`/Users/zhangrui/Desktop/毕设Web版/src/components/ControlPanel.tsx`
  - 该函数内部调用父组件传入的 `onPlanPath`，实际落到 `App` 的 `handlePlanPath()`
    文件：`/Users/zhangrui/Desktop/毕设Web版/src/App.tsx`

  处理层（核心业务流程）

  1. `dijkstra(roadNetwork, startNode, endNode, config)`
     文件：`/Users/zhangrui/Desktop/毕设Web版/src/lib/pathfinding.ts`
     作用：按长度/时间/拥堵综合权重规划路径。
  2. `sceneRef.current?.highlightPath(result)`
     文件：`/Users/zhangrui/Desktop/毕设Web版/src/components/Scene3D.ts`
     作用：把路径对应路段高亮、生成发光路径线。
  3. `generateNavigationHints(result.path, result.edges, nodeMapRef.current)`
     文件：`/Users/zhangrui/Desktop/毕设Web版/src/lib/navigationHints.ts`
     作用：基于层级变化与转向角生成提示序列。
  4. `simulatorRef.current?.setPath(result)`
     文件：`/Users/zhangrui/Desktop/毕设Web版/src/lib/simulator.ts`
     作用：将路径装载进仿真器，初始化车辆状态。
  5. `sceneRef.current?.createVehicle()`
     文件：`/Users/zhangrui/Desktop/毕设Web版/src/components/Scene3D.ts`

  数据层（数据来源）

  - 路网静态数据：`roadNetwork`（节点/边）
    文件：`/Users/zhangrui/Desktop/毕设Web版/src/data/roadNetwork.ts`
  - 类型定义：`RoadNode`、`RoadEdge`、`PathResult`、`NavigationHint`、`SimulationConfig`
    文件：`/Users/zhangrui/Desktop/毕设Web版/src/data/types.ts`

  ------

  ### 2) 每一步输入输出的关键数据结构

  - `ControlPanel.handlePlanPath()`
    - 输入：`startNode: string | null`、`endNode: string | null`
    - 输出：触发 `onPlanPath()`（无返回，事件驱动）
  - `App.handlePlanPath()`
    - 输入：`startNode/endNode` + `roadNetwork: RoadNetwork` + `config: SimulationConfig`
    - 输出：更新状态 `pathResult: PathResult`、`navHints: NavigationHint[]`、重置仿真状态
  - `dijkstra()`
    - 输入：`RoadNetwork`, `startId`, `endId`, `SimulationConfig`
    - 输出：`PathResult | null`
      - `path: string[]`
      - `edges: RoadEdge[]`
      - `totalCost/totalLength/estimatedTime`
  - `generateNavigationHints()`
    - 输入：`path: string[]`, `edges: RoadEdge[]`, `nodeMap: Map<string, RoadNode>`
    - 输出：`NavigationHint[]`（如 `turn_left` / `ramp_up` / `destination`）
  - `highlightPath()`
    - 输入：`PathResult | null`
    - 输出：Three.js 场景中的道路材质状态变化 + 发光管线对象（视觉输出）

  ------

  ## B. 车辆仿真与3D场景渲染链路

  ### 1) 起点与关键调用顺序（函数名 + 文件路径）

  入口（用户操作/组件生命周期）

  - 页面初始化 `useEffect`：创建渲染器与仿真器
    文件：`/Users/zhangrui/Desktop/毕设Web版/src/App.tsx`
  - 用户点击播放/暂停：`handlePlayPause()` -> `simulator.togglePause()`
    文件：`/Users/zhangrui/Desktop/毕设Web版/src/App.tsx`、`/Users/zhangrui/Desktop/毕设Web版/src/lib/simulator.ts`

  处理层（核心业务流程）

  1. 场景初始化：`new Scene3D(container)` -> `loadRoadNetwork(roadNetwork)`
     文件：`/Users/zhangrui/Desktop/毕设Web版/src/components/Scene3D.ts`
  2. 立交几何构建：`buildTInterchange()` -> `scene.addTInterchangeGroup(...)`
     文件：`/Users/zhangrui/Desktop/毕设Web版/src/lib/TInterchange.ts`、`/Users/zhangrui/Desktop/毕设Web版/src/components/Scene3D.ts`
  3. 仿真初始化：`new NavigationSimulator(...)` + `setOnUpdate/setOnNodeChange/setOnComplete`
     文件：`/Users/zhangrui/Desktop/毕设Web版/src/lib/simulator.ts`、`/Users/zhangrui/Desktop/毕设Web版/src/App.tsx`
  4. 播放后：`start()` -> `animate()` -> `updateVehicle(deltaTime)` -> `interpolatePosition()` -> `updateVehicleRotation()`
     文件：`/Users/zhangrui/Desktop/毕设Web版/src/lib/simulator.ts`
  5. 回调驱动渲染：`onUpdate(state)` -> `scene.updateVehiclePosition(state)`
     文件：`/Users/zhangrui/Desktop/毕设Web版/src/App.tsx`、`/Users/zhangrui/Desktop/毕设Web版/src/components/Scene3D.ts`

  数据层

  - 几何输入来自 `RoadEdge.geometryPath`（匝道样条控制点）与节点坐标
    文件：`/Users/zhangrui/Desktop/毕设Web版/src/data/types.ts`、`/Users/zhangrui/Desktop/毕设Web版/src/data/roadNetwork.ts`
  - 几何采样计算：`buildEdgeCenterlinePoints/buildCumulativeLengths/positionAtArcLength`
    文件：`/Users/zhangrui/Desktop/毕设Web版/src/lib/roadGeometry.ts`

  ------

  ### 2) 每一步输入输出的关键数据结构

  - `Scene3D.loadRoadNetwork(network: RoadNetwork)`
    - 输入：`RoadNetwork`
    - 输出：`roadMeshes/nodeMeshes/buildingMeshes` 三维对象缓存
  - `buildTInterchange()`
    - 输入：默认路径集合（可编辑）
    - 输出：`{ group: THREE.Group, edgeMeshes: Map<string, THREE.Mesh> }`
  - `NavigationSimulator.setPath(pathResult: PathResult)`
    - 输入：`PathResult`
    - 输出：重置并设置 `VehicleState`，缓存每条边采样 `edgeSamples`
  - `updateVehicle(deltaTime)`
    - 输入：帧间隔 `deltaTime`
    - 输出：更新 `VehicleState`（position/rotation/progress/speed/currentNodeIndex）
  - `Scene3D.updateVehiclePosition(state: VehicleState)`
    - 输入：`VehicleState`
    - 输出：车辆模型位置与朝向更新（可触发跟车镜头平滑跟随）

  ------

  ## 3) 本项目“控制器层/服务层/数据库层”的等价层次

  该项目是纯前端仿真（无后端 HTTP API、无数据库），可按下列等价划分：

  - 控制器层（Controller 等价）
    `App.tsx`：承接 UI 事件、编排业务调用、维护全局状态。
  - 服务层（Service 等价）
    `pathfinding.ts`、`simulator.ts`、`navigationHints.ts`、`roadGeometry.ts`、`TInterchange.ts`：算法与业务规则实现。
  - 数据层（Repository/DB 等价）
    `roadNetwork.ts`（静态路网数据）+ `types.ts`（领域模型）+ 少量 `localStorage`（仅路线历史，见 `ControlPanel.tsx`）。

  ------

  ## 4) 两个最复杂/亮点技术点

  - 多权重 Dijkstra（可调策略）
    - 实现：`calculateEdgeCost = a*length + b*time + c*congestion`，在 `dijkstra()` 中做最短路扩展。
    - 价值：可通过 UI 滑块实时改变“最短路/最快路/避堵路”偏好，便于实验与对比。
  - 匝道样条几何 + 弧长采样驱动车辆
    - 实现：`RoadEdge.geometryPath` -> `CatmullRomCurve3` 生成中心线，再用累计弧长 `buildCumulativeLengths` + `positionAtArcLength` 做等弧长定位；车辆朝向用前视点 `getLookAheadPoint()` 平滑计算。
    - 价值：车辆在弯道、坡道、上下匝道上的运动更自然，避免“按节点线性插值”导致的转角突变和速度不匀。

  ------

  ## 5) 最核心 5 个函数级“API”（无 HTTP API）

  1. `dijkstra(network, startId, endId, config): PathResult | null`
     文件：`/Users/zhangrui/Desktop/毕设Web版/src/lib/pathfinding.ts`
     - 入参：`RoadNetwork`, 起终点ID, `SimulationConfig`
     - 返回：`PathResult | null`
     - 作用：核心路径规划。
  2. `generateNavigationHints(path, edges, nodeMap): NavigationHint[]`
     文件：`/Users/zhangrui/Desktop/毕设Web版/src/lib/navigationHints.ts`
     - 入参：路径节点序列、路径边序列、节点映射
     - 返回：导航提示数组
     - 作用：转向/层级变化语义化提示生成。
  3. `setPath(pathResult): void`（`NavigationSimulator`）
     文件：`/Users/zhangrui/Desktop/毕设Web版/src/lib/simulator.ts`
     - 入参：`PathResult`
     - 返回：无
     - 作用：装载路径并初始化仿真状态与几何采样缓存。
  4. `togglePause(): boolean`（`NavigationSimulator`）
     文件：`/Users/zhangrui/Desktop/毕设Web版/src/lib/simulator.ts`
     - 入参：无
     - 返回：当前是否暂停
     - 作用：驱动动画循环启停。
  5. `updateVehiclePosition(state): void`（`Scene3D`）
     文件：`/Users/zhangrui/Desktop/毕设Web版/src/components/Scene3D.ts`
     - 入参：`VehicleState`
     - 返回：无
     - 作用：把仿真状态映射到 Three.js 车辆模型与跟车镜头。









flowchart TB
    U[用户交互] --> CP[ControlPanel<br/>起终点/权重/播放控制]
    U --> NP[NavigationPanel<br/>导航提示]
    U --> CGP[CongestionPanel<br/>道路拥堵设置]
    U --> L[LocationSearch<br/>地点检索]

    CP --> APP[App.tsx<br/>全局状态与业务编排]
    NP --> APP
    CGP --> APP
    L --> APP
    
    APP --> PF[pathfinding.ts<br/>Dijkstra/A* 路径规划]
    APP --> NH[navigationHints.ts<br/>导航提示生成]
    APP --> SIM[simulator.ts<br/>车辆运动仿真]
    APP --> SCN[Scene3D.ts<br/>Three.js 场景渲染]
    APP --> TI[TInterchange.ts<br/>T型立交几何构建]
    APP --> RG[roadGeometry.ts<br/>曲线/弧长采样]
    
    PF --> DATA[roadNetwork.ts + types.ts<br/>路网与数据模型]
    NH --> DATA
    SIM --> DATA
    SCN --> DATA
    TI --> DATA
    
    APP --> LS[(localStorage<br/>nav_route_history)]

sequenceDiagram
    participant User as 用户
    participant CP as ControlPanel
    participant App as App.tsx
    participant PF as pathfinding.ts
    participant NH as navigationHints.ts
    participant SC as Scene3D.ts
    participant SIM as simulator.ts
    participant Data as roadNetwork/types

    User->>CP: 选择起点/终点并点击“开始导航”
    CP->>App: onPlanPath()
    App->>PF: dijkstra(network, start, end, config)
    PF->>Data: 读取 nodes/edges/权重
    PF-->>App: PathResult
    
    App->>NH: generateNavigationHints(path, edges, nodeMap)
    NH-->>App: NavigationHint[]
    
    App->>SC: highlightPath(PathResult)
    App->>SIM: setPath(PathResult)
    App->>SC: createVehicle()
    
    User->>CP: 点击播放
    CP->>App: onPlayPause()
    App->>SIM: start()/togglePause()
    
    loop 每帧
        SIM->>SIM: updateVehicle(deltaTime)
        SIM-->>App: onUpdate(VehicleState)
        App->>SC: updateVehiclePosition(state)
    end
    
    SIM-->>App: onNodeChange / onComplete
    App-->>CP: 更新当前节点、剩余距离/时间
    App-->>User: 展示导航提示与路径状态

erDiagram
    ROAD_NETWORK ||--o{ ROAD_NODE : contains
    ROAD_NETWORK ||--o{ ROAD_EDGE : contains
    ROAD_NODE ||--o{ ROAD_EDGE : from_to
    PATH_RESULT ||--o{ ROAD_EDGE : includes
    PATH_RESULT ||--o{ ROAD_NODE : path_ids
    ROAD_NODE ||--o{ NAVIGATION_HINT : trigger_at

    ROAD_NETWORK {
      string id
      RoadNode[] nodes
      RoadEdge[] edges
      Building[] buildings
    }
    
    ROAD_NODE {
      string id
      number x
      number y
      number z
      number layer
      string name
      boolean isLandmark
      string landmarkType
    }
    
    ROAD_EDGE {
      string id
      string from
      string to
      number length
      number speedLimit
      number congestion
      string type
      string segmentName
      object[] geometryPath
      boolean renderInScene
    }
    
    PATH_RESULT {
      string[] path
      number totalCost
      number totalLength
      number estimatedTime
      RoadEdge[] edges
    }
    
    NAVIGATION_HINT {
      string nodeId
      string type
      string message
      number distance
    }