import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card'
import { Button } from './ui/Button'
import { Download, Upload, Layers3, Route, FileJson } from 'lucide-react'
import type { SceneTemplateKind } from '@/lib/sceneTemplates'
import { SCENE_TEMPLATE_META } from '@/lib/sceneTemplates'

interface SceneBuilderPanelProps {
  onApplyTemplate: (kind: SceneTemplateKind) => void
  onExport: () => void
  onImport: (jsonText: string) => void
}

export default function SceneBuilderPanel({
  onApplyTemplate,
  onExport,
  onImport,
}: SceneBuilderPanelProps) {
  const [importText, setImportText] = useState('')

  return (
    <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1.15fr_0.85fr]">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-base">
            <Layers3 className="h-4 w-4 text-primary" />
            立体道路模板场景
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="rounded-lg border border-primary/20 bg-primary/5 p-3 text-sm leading-6 text-foreground/85">
            这里改成了<strong className="text-primary">模板优先</strong>模式：优先点选现实感更强的立体道路模板，直接切换场景；系统会自动填入该模板最适合演示的起点和终点。若你想完全自定义，再用 JSON 从 0 导入即可。
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {SCENE_TEMPLATE_META.map((template) => (
              <button
                key={template.kind}
                type="button"
                onClick={() => onApplyTemplate(template.kind)}
                className="rounded-2xl border border-border bg-muted/20 p-4 text-left transition hover:border-primary/60 hover:bg-primary/10"
              >
                <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Route className="h-4 w-4 text-primary" />
                  {template.title}
                </div>
                <p className="text-xs leading-5 text-muted-foreground">{template.description}</p>
                <div className="mt-4 flex items-center justify-between gap-2">
                  <span className="inline-flex rounded-full border border-primary/30 px-2 py-1 text-[11px] text-primary">
                    点击立即切换
                  </span>
                  <span className="text-[11px] text-muted-foreground">
                    推荐：{template.recommendedRoute.label}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-base">
            <FileJson className="h-4 w-4 text-accent" />
            JSON 场景导入 / 导出
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="rounded-lg border border-border bg-muted/20 p-3 text-sm leading-6 text-muted-foreground">
            如果你想从 0 构造一个完全自定义的立体道路场景，就直接在这里粘贴 JSON 导入。导出按钮会把当前场景复制到剪贴板，便于备份或二次编辑。
          </div>

          <div className="flex gap-2">
            <Button variant="outline" className="flex-1" onClick={onExport}><Download className="mr-2 h-4 w-4" />导出 JSON</Button>
            <Button variant="outline" className="flex-1" onClick={() => onImport(importText)}><Upload className="mr-2 h-4 w-4" />导入 JSON</Button>
          </div>

          <textarea
            value={importText}
            onChange={(e) => setImportText(e.target.value)}
            placeholder="粘贴你的完整场景 JSON 到这里"
            className="min-h-[260px] w-full rounded-lg border border-border bg-input px-3 py-2 text-xs"
          />
        </CardContent>
      </Card>
    </div>
  )
}
