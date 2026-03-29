/**
 * 地点搜索组件
 * 类似高德/百度地图的搜索框，支持搜索和选择地点
 */

import React, { useState, useMemo, useRef, useEffect } from 'react'
import { Search, MapPin, Navigation, Building2, Bus, X } from 'lucide-react'
import { RoadNode, Building } from '@/data/types'

interface LocationSearchProps {
  label: string
  placeholder?: string
  nodes: RoadNode[]
  buildings?: Building[]
  selectedId: string | null
  onChange: (nodeId: string | null) => void
  icon?: 'start' | 'end'
}

export const LocationSearch: React.FC<LocationSearchProps> = ({
  label,
  placeholder = '搜索地点...',
  nodes,
  selectedId,
  onChange,
  icon = 'start'
}) => {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  
  // 获取选中节点的名称
  const selectedNode = useMemo(() => 
    nodes.find(n => n.id === selectedId),
    [nodes, selectedId]
  )
  
  // 过滤地标节点
  const landmarkNodes = useMemo(() => 
    nodes.filter(n => n.isLandmark),
    [nodes]
  )
  
  // 搜索结果
  const searchResults = useMemo(() => {
    if (!query.trim()) {
      // 无搜索词时显示所有地标
      return landmarkNodes.slice(0, 10)
    }
    
    const lowerQuery = query.toLowerCase()
    const results: RoadNode[] = []
    
    // 搜索节点
    for (const node of landmarkNodes) {
      if (
        node.name.toLowerCase().includes(lowerQuery) ||
        node.id.toLowerCase().includes(lowerQuery)
      ) {
        results.push(node)
      }
    }
    
    // 按匹配度排序（名称开头匹配优先）
    results.sort((a, b) => {
      const aStartsWith = a.name.toLowerCase().startsWith(lowerQuery)
      const bStartsWith = b.name.toLowerCase().startsWith(lowerQuery)
      if (aStartsWith && !bStartsWith) return -1
      if (!aStartsWith && bStartsWith) return 1
      return 0
    })
    
    return results.slice(0, 8)
  }, [query, landmarkNodes])
  
  // 获取地标图标
  const getLandmarkIcon = (type?: string) => {
    switch (type) {
      case 'gate': return <Navigation className="h-4 w-4 text-green-500" />
      case 'shop': return <Building2 className="h-4 w-4 text-red-500" />
      case 'bus_stop': return <Bus className="h-4 w-4 text-yellow-500" />
      case 'intersection': return <MapPin className="h-4 w-4 text-cyan-500" />
      default: return <MapPin className="h-4 w-4 text-muted-foreground" />
    }
  }
  
  // 键盘导航
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return
    
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setFocusedIndex(prev => 
          prev < searchResults.length - 1 ? prev + 1 : 0
        )
        break
      case 'ArrowUp':
        e.preventDefault()
        setFocusedIndex(prev => 
          prev > 0 ? prev - 1 : searchResults.length - 1
        )
        break
      case 'Enter':
        e.preventDefault()
        if (focusedIndex >= 0 && searchResults[focusedIndex]) {
          handleSelect(searchResults[focusedIndex])
        }
        break
      case 'Escape':
        setIsOpen(false)
        inputRef.current?.blur()
        break
    }
  }
  
  // 选择地点
  const handleSelect = (node: RoadNode) => {
    onChange(node.id)
    setQuery('')
    setIsOpen(false)
    setFocusedIndex(-1)
  }
  
  // 清除选择
  const handleClear = () => {
    onChange(null)
    setQuery('')
    inputRef.current?.focus()
  }
  
  // 点击外部关闭
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (listRef.current && !listRef.current.contains(e.target as Node) &&
          inputRef.current && !inputRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])
  
  return (
    <div className="relative">
      <label className="text-xs text-muted-foreground block mb-1 flex items-center gap-1">
        {icon === 'start' ? (
          <span className="w-2 h-2 rounded-full bg-green-500" />
        ) : (
          <span className="w-2 h-2 rounded-full bg-red-500" />
        )}
        {label}
      </label>
      
      <div className="relative">
        {/* 已选中显示 */}
        {selectedNode && !isOpen ? (
          <div 
            className="w-full h-10 px-3 rounded-lg bg-input border border-border flex items-center justify-between cursor-pointer hover:border-primary/50 transition-colors"
            onClick={() => {
              setIsOpen(true)
              setTimeout(() => inputRef.current?.focus(), 0)
            }}
          >
            <div className="flex items-center gap-2 truncate">
              {getLandmarkIcon(selectedNode.landmarkType)}
              <span className="text-sm truncate">{selectedNode.name}</span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation()
                handleClear()
              }}
              className="p-1 hover:bg-muted rounded"
            >
              <X className="h-3 w-3 text-muted-foreground" />
            </button>
          </div>
        ) : (
          /* 搜索输入框 */
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
                setIsOpen(true)
                setFocusedIndex(-1)
              }}
              onFocus={() => setIsOpen(true)}
              onKeyDown={handleKeyDown}
              placeholder={placeholder}
              className="w-full h-10 pl-9 pr-3 rounded-lg bg-input border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:text-muted-foreground"
            />
          </div>
        )}
        
        {/* 搜索结果下拉 - 使用 Portal 避免被遮挡 */}
        {isOpen && (
          <div 
            ref={listRef}
            className="absolute w-full mt-1 py-1 rounded-lg bg-popover border border-border shadow-lg max-h-64 overflow-y-auto"
            style={{ zIndex: 9999 }}
          >
            {searchResults.length > 0 ? (
              <>
                <div className="px-3 py-1.5 text-xs text-muted-foreground border-b border-border">
                  {query ? `搜索结果 (${searchResults.length})` : '热门地点'}
                </div>
                {searchResults.map((node, index) => (
                  <div
                    key={node.id}
                    className={`px-3 py-2 flex items-center gap-2 cursor-pointer transition-colors ${
                      index === focusedIndex 
                        ? 'bg-primary/10 text-primary' 
                        : 'hover:bg-muted'
                    }`}
                    onClick={() => handleSelect(node)}
                    onMouseEnter={() => setFocusedIndex(index)}
                  >
                    {getLandmarkIcon(node.landmarkType)}
                    <div className="flex-1 min-w-0">
                      <div className="text-sm truncate">{node.name}</div>
                      <div className="text-xs text-muted-foreground truncate">
                        {node.landmarkType === 'gate' && '校门'}
                        {node.landmarkType === 'shop' && '商店'}
                        {node.landmarkType === 'bus_stop' && '公交站'}
                        {node.landmarkType === 'intersection' && '路口'}
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div className="px-3 py-4 text-center text-sm text-muted-foreground">
                未找到相关地点
              </div>
            )}
            
            <div className="px-3 py-2 text-xs text-muted-foreground border-t border-border bg-muted/30">
              💡 也可以在地图上点击地标选择
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default LocationSearch
