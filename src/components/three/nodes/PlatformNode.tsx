import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { Sphere, Float, Text, Html } from "@react-three/drei"
import * as THREE from "three"
import { useStoryStore } from "@/store/useStoryStore"

export interface PlatformData {
  name: string
  color: string
  position: [number, number, number]
  stats: {
    visibility: number
    trust: number
    recommendations: number
  }
}

export function PlatformNode({ platform, index }: { platform: PlatformData, index: number }) {
  const groupRef = useRef<THREE.Group>(null)
  const sphereRef = useRef<THREE.Mesh>(null)
  const glowRef = useRef<THREE.Mesh>(null)
  const setHoveredNode = useStoryStore(state => state.setHoveredNode)
  const hoveredNode = useStoryStore(state => state.hoveredNode)
  const [hovered, setHovered] = useState(false)

  const isHovered = hovered || hoveredNode === platform.name

  useFrame((state) => {
    const scrollProgress = useStoryStore.getState().scrollProgress
    // Platforms start far away and disconnected, then pull in slightly.
    
    if (groupRef.current && sphereRef.current && glowRef.current) {
      const time = state.clock.getElapsedTime()
      
      // Idle floating
      groupRef.current.position.y += Math.sin(time * 2 + platform.position[0]) * 0.001
      
      const material = sphereRef.current.material as THREE.MeshBasicMaterial
      const glowMaterial = glowRef.current.material as THREE.MeshBasicMaterial

      // The platform brightens up significantly in stages 3 and 4
      const targetOpacity = scrollProgress > 0.6 ? 0.9 : 0.4 + scrollProgress
      material.opacity = THREE.MathUtils.lerp(material.opacity, targetOpacity, 0.05)
      
      const targetGlow = isHovered ? 0.3 : (scrollProgress > 0.8 ? 0.2 : 0.05)
      glowMaterial.opacity = THREE.MathUtils.lerp(glowMaterial.opacity, targetGlow, 0.1)
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
      <group 
        ref={groupRef} 
        position={platform.position}
        onPointerOver={(e) => {
          e.stopPropagation()
          setHovered(true)
          setHoveredNode(platform.name)
          document.body.style.cursor = 'pointer'
        }}
        onPointerOut={(e) => {
          e.stopPropagation()
          setHovered(false)
          setHoveredNode(null)
          document.body.style.cursor = 'auto'
        }}
      >
        <Sphere ref={sphereRef} args={[0.4, 32, 32]}>
          <meshBasicMaterial color={platform.color} transparent opacity={0.4} />
        </Sphere>
        <Sphere args={[0.6, 16, 16]}>
          <meshBasicMaterial color={platform.color} wireframe transparent opacity={0.3} />
        </Sphere>
        <Sphere ref={glowRef} args={[1.0, 16, 16]}>
          <meshBasicMaterial color={platform.color} transparent opacity={0.05} />
        </Sphere>
        
        <Text
          position={[0, -1.2, 0]}
          fontSize={0.35}
          color="#F9FAFB"
          anchorX="center"
          anchorY="middle"
        >
          {platform.name}
        </Text>

        {isHovered && (
          <Html position={[0, 1.5, 0]} center zIndexRange={[100, 0]}>
            <div className="bg-secondary/90 border border-border backdrop-blur-md rounded-xl p-4 w-48 shadow-2xl pointer-events-none transform transition-all">
              <div className="flex items-center gap-2 mb-3 border-b border-border/50 pb-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: platform.color }}></div>
                <span className="font-bold text-foreground text-sm">{platform.name}</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-muted-foreground">Visibility</span>
                  <span className="font-mono text-green-400">{platform.stats.visibility}%</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-muted-foreground">Trust Score</span>
                  <span className="font-mono text-primary">{platform.stats.trust}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-muted-foreground">Recommended</span>
                  <span className="font-mono text-accent">{platform.stats.recommendations}%</span>
                </div>
              </div>
            </div>
          </Html>
        )}
      </group>
    </Float>
  )
}
