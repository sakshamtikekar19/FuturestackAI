import { create } from "zustand"

interface StoryState {
  scrollProgress: number // 0 to 1 across all 5 sections
  currentStage: number // 0 to 4 (5 sections)
  hoveredNode: string | null
  
  setScrollProgress: (progress: number) => void
  setStage: (stage: number) => void
  setHoveredNode: (nodeId: string | null) => void
}

export const useStoryStore = create<StoryState>((set) => ({
  scrollProgress: 0,
  currentStage: 0,
  hoveredNode: null,
  
  setScrollProgress: (progress) => set({ scrollProgress: progress }),
  setStage: (stage) => set({ currentStage: stage }),
  setHoveredNode: (nodeId) => set({ hoveredNode: nodeId })
}))
