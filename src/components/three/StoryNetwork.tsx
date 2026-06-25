import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { Line, OrbitControls } from "@react-three/drei"
import * as THREE from "three"
import { ParticleField } from "./ParticleField"
import { BrandNode } from "./nodes/BrandNode"
import { PlatformNode, PlatformData } from "./nodes/PlatformNode"
import { DataNode } from "./nodes/DataNode"
import { useStoryStore } from "@/store/useStoryStore"

const PLATFORMS: PlatformData[] = [
  { name: "ChatGPT", color: "#10A37F", position: [5, 2, -3], stats: { visibility: 82, trust: 94, recommendations: 67 } },
  { name: "Claude", color: "#D97757", position: [-5, 3, -2], stats: { visibility: 75, trust: 88, recommendations: 54 } },
  { name: "Gemini", color: "#1A73E8", position: [4, -4, 2], stats: { visibility: 60, trust: 72, recommendations: 40 } },
  { name: "Perplexity", color: "#22B8CD", position: [-4, -3, -4], stats: { visibility: 90, trust: 95, recommendations: 85 } },
  { name: "Copilot", color: "#0067B8", position: [0, 5, 4], stats: { visibility: 45, trust: 60, recommendations: 30 } },
]

const DATA_SOURCES = [
  { name: "Website", initial: [8, 4, 2], target: [1.5, 1, 0.5] },
  { name: "LinkedIn", initial: [-7, -5, 3], target: [-1.2, -1, 1] },
  { name: "Reviews", initial: [6, -6, -2], target: [1, -1.5, -0.5] },
  { name: "Press", initial: [-8, 6, -1], target: [-1.5, 1.2, -0.8] },
  { name: "Knowledge Base", initial: [0, 8, -5], target: [0, 1.8, -1] },
]

function DynamicConnection({ start, end, color }: { start: THREE.Vector3, end: THREE.Vector3, color: string }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lineRef = useRef<any>(null)
  
  const curve = useMemo(() => {
    const midPoint = start.clone().lerp(end, 0.5)
    // Deterministic offset based on coordinates to appease react-hooks/purity
    midPoint.y += (Math.abs(start.x + end.x) % 2)
    midPoint.z += (Math.abs(start.y + end.y) % 2)
    return new THREE.QuadraticBezierCurve3(start, midPoint, end)
  }, [start, end])

  const points = useMemo(() => curve.getPoints(30), [curve])

  useFrame((state) => {
    const scrollProgress = useStoryStore.getState().scrollProgress
    
    if (lineRef.current) {
      // Line is invisible at scroll 0, becomes fully visible by scroll 0.8
      const targetOpacity = Math.max(0, (scrollProgress - 0.4) * 2) 
      const time = state.clock.getElapsedTime()
      const pulse = Math.sin(time * 5 + end.x) * 0.2
      
      // @ts-expect-error - Drei line material doesn't expose opacity strongly
      lineRef.current.material.opacity = THREE.MathUtils.lerp(
        lineRef.current.material.opacity, 
        targetOpacity > 0 ? targetOpacity * 0.5 + pulse : 0, 
        0.05
      )

      // Bend the curve based on mouse
      const mouseX = state.pointer.x * 2
      const mouseY = state.pointer.y * 2
      
      // We update the curve geometry dynamically
      const midPoint = start.clone().lerp(end, 0.5)
      midPoint.x += mouseX
      midPoint.y += mouseY
      
      const dynamicCurve = new THREE.QuadraticBezierCurve3(start, midPoint, end)
      const newPoints = dynamicCurve.getPoints(30)
      lineRef.current.geometry.setPositions(newPoints.flatMap(p => [p.x, p.y, p.z]))
    }
  })

  return (
    <Line
      ref={lineRef}
      points={points}
      color={color}
      lineWidth={2}
      transparent
      opacity={0}
    />
  )
}

export function StoryNetwork() {
  const groupRef = useRef<THREE.Group>(null)
  const centerVec = new THREE.Vector3(0, 0, 0)

  useFrame(() => {
    const scrollProgress = useStoryStore.getState().scrollProgress
    if (groupRef.current) {
      // Zoom in slightly and rotate based on scroll
      const targetZ = scrollProgress * 3
      const targetRotY = scrollProgress * Math.PI
      
      groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, targetZ, 0.05)
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.05)
    }
  })

  return (
    <>
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        autoRotate 
        autoRotateSpeed={0.2} 
        dampingFactor={0.05}
      />
      <group ref={groupRef}>
        <ParticleField count={400} />
        
        <BrandNode />
        
        {DATA_SOURCES.map((data, i) => (
          <DataNode 
            key={`data-${i}`}
            name={data.name}
            initialPosition={data.initial as [number, number, number]}
            targetOffset={data.target as [number, number, number]}
          />
        ))}

        {PLATFORMS.map((platform, i) => (
          <group key={`plat-${i}`}>
            <PlatformNode platform={platform} index={i} />
            <DynamicConnection 
              start={centerVec} 
              end={new THREE.Vector3(...platform.position)}
              color={platform.color}
            />
          </group>
        ))}
      </group>
    </>
  )
}
