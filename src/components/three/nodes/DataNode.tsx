import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Sphere, Float, Text } from "@react-three/drei"
import * as THREE from "three"
import { useStoryStore } from "@/store/useStoryStore"

interface DataNodeProps {
  name: string
  initialPosition: [number, number, number]
  targetOffset: [number, number, number] // Position relative to center when organized
}

export function DataNode({ name, initialPosition, targetOffset }: DataNodeProps) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    const scrollProgress = useStoryStore.getState().scrollProgress
    
    if (groupRef.current) {
      // In stage 0-1, they are scattered at initialPosition
      // In stage 2+, they get pulled toward the center (BrandNode) + targetOffset
      
      const pullProgress = Math.max(0, Math.min(1, (scrollProgress - 0.2) * 2.5)) // 0 at scroll 0.2, 1 at scroll 0.6
      
      const targetPos = new THREE.Vector3(
        THREE.MathUtils.lerp(initialPosition[0], targetOffset[0], pullProgress),
        THREE.MathUtils.lerp(initialPosition[1], targetOffset[1], pullProgress),
        THREE.MathUtils.lerp(initialPosition[2], targetOffset[2], pullProgress)
      )

      groupRef.current.position.lerp(targetPos, 0.05)
      
      // Fade out slightly when fully organized
      const opacity = 1 - (pullProgress * 0.5)
      groupRef.current.children.forEach(child => {
        if (child instanceof THREE.Mesh) {
          (child.material as THREE.Material).opacity = opacity
        }
      })
    }
  })

  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={1.5}>
      <group ref={groupRef} position={initialPosition}>
        <Sphere args={[0.2, 16, 16]}>
          <meshBasicMaterial color="#9CA3AF" transparent opacity={0.8} />
        </Sphere>
        <Text
          position={[0, -0.6, 0]}
          fontSize={0.2}
          color="#9CA3AF"
          anchorX="center"
          anchorY="middle"
        >
          {name}
        </Text>
      </group>
    </Float>
  )
}
