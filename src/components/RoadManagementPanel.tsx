import { useMemo, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card'
import { Button } from './ui/Button'
import { RoadEdge, RoadNode, RoadType } from '@/data/types'
import { Plus, Pencil, Trash2, Save, X, Search, GitCompareArrows } from 'lucide-react'

type EditableEdge = {
  id: string
  segmentName: string
  from: string
  to: string
  length: number
  speedLimit: number
  congestion: number
  type: RoadType
}

interface RoadManagementPanelProps {
  nodes: RoadNode[]
  edges: RoadEdge[]
  onCreateEdge: (edge: EditableEdge) => void
  onUpdateEdge: (edgeId: string, patch: EditableEdge) => void
  onDeleteEdge: (edgeId: string) => void
}

const EMPTY_FORM: EditableEdge = {
  id: '',
  segmentName: '',
  from: '',
  to: '',
  length: 80,
  speedLimit: 40,
  congestion: 0.2,
  type: 'ground',
}

const roadTypeLabel: Record<RoadType, string> = {
  ground: '地面道路',
  overpass: '高架桥',
  ramp: '匝道',
}

export default function RoadManagementPanel({
  nodes,
  edges,
  onCreateEdge,
  onUpdateEdge,
  onDeleteEdge,
}: RoadManagementPanelProps) {
  const [keyword, setKeyword] = useState('')
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [isCreating, setIsCreating] = useState(false)
  const [form, setForm] = useState<EditableEdge>(EMPTY_FORM)

  const sortedEdges = useMemo(() => {
    return [...edges].sort((a, b) => {
      const nameA = a.segmentName || a.id
      const nameB = b.segmentName || b.id
      return nameA.localeCompare(nameB, 'zh-CN')
    })
  }, [edges])

  const filteredEdges = useMemo(() => {
    const key = keyword.trim().toLowerCase()
    if (!key) return sortedEdges

    return sortedEdges.filter((edge) => {
      const from = nodes.find((n) => n.id === edge.from)?.name || edge.from
      const to = nodes.find((n) => n.id === edge.to)?.name || edge.to
      return [edge.id, edge.segmentName || '', from, to, roadTypeLabel[edge.type]]
        .join(' ')
        .toLowerCase()
        .includes(key)
    })
  }, [keyword, sortedEdges, nodes])

  const selectedEdge = useMemo(() => edges.find((e) => e.id === selectedId) || null, [edges, selectedId])

  const startCreate = () => {
    setIsCreating(true)
    setSelectedId(null)
    setForm({
      ...EMPTY_FORM,
      from: nodes[0]?.id || '',
      to: nodes[1]?.id || nodes[0]?.id || '',
    })
  }

  const startEdit = (edge: RoadEdge) => {
    setIsCreating(false)
    setSelectedId(edge.id)
    setForm({
      id: edge.id,
      segmentName: edge.segmentName || '',
      from: edge.from,
      to: edge.to,
      length: edge.length,
      speedLimit: edge.speedLimit,
      congestion: edge.congestion,
      type: edge.type,
    })
  }

  const cancelEdit = () => {
    setIsCreating(false)
    setSelectedId(null)
    setForm(EMPTY_FORM)
  }

  const submitForm = () => {
    if (!form.id || !form.from || !form.to) return
    if (form.from === form.to) return

    if (isCreating) {
      onCreateEdge(form)
      cancelEdit()
      return
    }

    if (!selectedId) return
    onUpdateEdge(selectedId, form)
  }

  const nodeName = (nodeId: string) => nodes.find((n) => n.id === nodeId)?.name || nodeId

  return (
    <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1.2fr_1fr]">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center justify-between text-base">
            <span className="flex items-center gap-2">
              <GitCompareArrows className="h-4 w-4 text-primary" />
              道路资源库（双向路段）
            </span>
            <Button size="sm" variant="glow" onClick={startCreate}>
              <Plus className="mr-1 h-3.5 w-3.5" />
              新增道路
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative mb-3">
            <Search className="pointer-events-none absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="搜索路段名/道路类型/起终点..."
              className="h-9 w-full rounded-lg border border-border bg-input pl-8 pr-3 text-sm outline-none ring-0"
            />
          </div>

          <div className="max-h-[500px] space-y-2 overflow-y-auto pr-1">
            {filteredEdges.map((edge) => {
              const active = selectedId === edge.id
              return (
                <button
                  key={edge.id}
                  type="button"
                  onClick={() => startEdit(edge)}
                  className={`w-full rounded-lg border px-3 py-2 text-left transition ${
                    active ? 'border-primary bg-primary/10' : 'border-border bg-muted/20 hover:bg-muted/40'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-semibold text-foreground">{edge.segmentName || edge.id}</p>
                      <p className="text-xs text-muted-foreground">
                        {nodeName(edge.from)} → {nodeName(edge.to)}
                      </p>
                    </div>
                    <span className="rounded bg-secondary px-1.5 py-0.5 text-[10px] text-secondary-foreground">
                      {roadTypeLabel[edge.type]}
                    </span>
                  </div>
                  <div className="mt-1.5 flex gap-3 text-[11px] text-muted-foreground">
                    <span>长度 {edge.length}m</span>
                    <span>限速 {edge.speedLimit}km/h</span>
                    <span>拥堵 {(edge.congestion * 100).toFixed(0)}%</span>
                  </div>
                </button>
              )
            })}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">{isCreating ? '新增道路' : selectedEdge ? '编辑道路' : '请选择道路'}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {(isCreating || selectedEdge) ? (
            <>
              <div className="space-y-1">
                <label className="text-xs text-muted-foreground">路段 ID</label>
                <input
                  value={form.id}
                  disabled={!isCreating}
                  onChange={(e) => setForm((prev) => ({ ...prev, id: e.target.value.trim() }))}
                  className="h-9 w-full rounded-lg border border-border bg-input px-3 text-sm disabled:opacity-70"
                  placeholder="如：custom_road_01"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-muted-foreground">路段名称（可选）</label>
                <input
                  value={form.segmentName}
                  onChange={(e) => setForm((prev) => ({ ...prev, segmentName: e.target.value }))}
                  className="h-9 w-full rounded-lg border border-border bg-input px-3 text-sm"
                  placeholder="如：实验匝道 A"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1">
                  <label className="text-xs text-muted-foreground">起点</label>
                  <select
                    value={form.from}
                    onChange={(e) => setForm((prev) => ({ ...prev, from: e.target.value }))}
                    className="h-9 w-full rounded-lg border border-border bg-input px-2 text-sm"
                  >
                    {nodes.map((n) => (
                      <option key={n.id} value={n.id}>{n.name}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-muted-foreground">终点</label>
                  <select
                    value={form.to}
                    onChange={(e) => setForm((prev) => ({ ...prev, to: e.target.value }))}
                    className="h-9 w-full rounded-lg border border-border bg-input px-2 text-sm"
                  >
                    {nodes.map((n) => (
                      <option key={n.id} value={n.id}>{n.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="space-y-1">
                  <label className="text-xs text-muted-foreground">长度(m)</label>
                  <input
                    type="number"
                    min={1}
                    value={form.length}
                    onChange={(e) => setForm((prev) => ({ ...prev, length: Number(e.target.value) || 1 }))}
                    className="h-9 w-full rounded-lg border border-border bg-input px-2 text-sm"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-muted-foreground">限速(km/h)</label>
                  <input
                    type="number"
                    min={5}
                    value={form.speedLimit}
                    onChange={(e) => setForm((prev) => ({ ...prev, speedLimit: Number(e.target.value) || 5 }))}
                    className="h-9 w-full rounded-lg border border-border bg-input px-2 text-sm"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-muted-foreground">拥堵(0-1)</label>
                  <input
                    type="number"
                    step="0.05"
                    min={0}
                    max={1}
                    value={form.congestion}
                    onChange={(e) => {
                      const value = Math.max(0, Math.min(1, Number(e.target.value) || 0))
                      setForm((prev) => ({ ...prev, congestion: value }))
                    }}
                    className="h-9 w-full rounded-lg border border-border bg-input px-2 text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs text-muted-foreground">道路类型</label>
                <select
                  value={form.type}
                  onChange={(e) => setForm((prev) => ({ ...prev, type: e.target.value as RoadType }))}
                  className="h-9 w-full rounded-lg border border-border bg-input px-2 text-sm"
                >
                  <option value="ground">地面道路</option>
                  <option value="overpass">高架桥</option>
                  <option value="ramp">匝道</option>
                </select>
              </div>

              {form.from === form.to && (
                <p className="rounded border border-destructive/40 bg-destructive/10 px-2 py-1 text-xs text-destructive">
                  起点和终点不能相同。
                </p>
              )}

              <div className="flex gap-2 pt-2">
                <Button variant="glow" className="flex-1" onClick={submitForm} disabled={!form.id || form.from === form.to}>
                  <Save className="mr-1 h-4 w-4" />
                  {isCreating ? '创建并保存' : '保存修改'}
                </Button>
                <Button variant="outline" onClick={cancelEdit}>
                  <X className="h-4 w-4" />
                </Button>
                {!isCreating && selectedEdge && (
                  <Button variant="destructive" onClick={() => { onDeleteEdge(selectedEdge.id); cancelEdit() }}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </>
          ) : (
            <div className="rounded-lg border border-border bg-muted/20 p-3 text-sm text-muted-foreground">
              左侧选择一条道路进行编辑，或点击“新增道路”创建路段。
            </div>
          )}

          {selectedEdge && !isCreating && (
            <div className="rounded-lg border border-border/70 bg-primary/5 p-3 text-xs text-muted-foreground">
              <div className="mb-1 flex items-center gap-1 font-medium text-primary">
                <Pencil className="h-3.5 w-3.5" />
                编辑说明
              </div>
              系统会自动维护双向路段（正向 + 反向），你只需编辑当前这条“基准路段”。
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
