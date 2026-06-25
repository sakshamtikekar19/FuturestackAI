import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { Float, Line, Sphere, Text, OrbitControls } from "@react-three/drei"
import * as THREE from "three"
import { ParticleField } from "./ParticleField"

const PLATFORMS = [
  { name: "ChatGPT", color: "#10A37F", position: [4, 2, -2] },
  { name: "Claude", color: "#D97757", position: [-4, 3, -1] },
  { name: "Gemini", color: "#1A73E8", position: [3, -3, 2] },
  { name: "Perplexity", color: "#22B8CD", position: [-3, -2, -3] },
  { name: "Copilot", color: "#0067B8", position: [0, 4, 3] },
]

function ConnectionLine({ start, end, color }: { start: THREE.Vector3, end: THREE.Vector3, color: string }) {
  const lineRef = useRef<any>(null)
  
  const points = useMemo(() => {
    const midPoint = start.clone().lerp(end, 0.5)
    midPoint.y += Math.random() * 2
    midPoint.z += Math.random() * 2
    const curve = new THREE.QuadraticBezierCurve3(start, midPoint, end)
    return curve.getPoints(30)
  }, [start, end])

  useFrame((state) => {
    if (lineRef.current) {
      // Create a pulsing effect running along the line
      const time = state.clock.getElapsedTime()
      lineRef.current.material.opacity = 0.2 + Math.sin(time * 3 + end.x) * 0.15
    }
  })

  return (
    <Line
      ref={lineRef}
      points={points}
      color={color}
      lineWidth={2}
      transparent
      opacity={0.3}
    />
  )
}

function PlatformNode({ platform }: { platform: typeof PLATFORMS[0] }) {
  const ref = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.getElapsedTime()
      ref.current.position.y += Math.sin(time * 2 + platform.position[0]) * 0.002
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
      <group ref={ref} position={platform.position as [number, number, number]}>
        <Sphere args={[0.4, 32, 32]}>
          <meshBasicMaterial color={platform.color} transparent opacity={0.8} />
        </Sphere>
        <Sphere args={[0.6, 16, 16]}>
          <meshBasicMaterial color={platform.color} wireframe transparent opacity={0.3} />
        </Sphere>
        {/* Glow effect */}
        <Sphere args={[0.9, 16, 16]}>
          <meshBasicMaterial color={platform.color} transparent opacity={0.05} />
        </Sphere>
        <Text
          position={[0, -1.0, 0]}
          fontSize={0.35}
          color="#F9FAFB"
          anchorX="center"
          anchorY="middle"
        >
          {platform.name}
        </Text>
      </group>
    </Float>
  )
}

function CentralBrandNode() {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
      <group>
        <Sphere args={[0.8, 32, 32]}>
          <meshBasicMaterial color="#6366F1" />
        </Sphere>
        <Sphere args={[1.3, 24, 24]}>
          <meshBasicMaterial color="#818CF8" wireframe transparent opacity={0.4} />
        </Sphere>
        <Sphere args={[1.8, 24, 24]}>
          <meshBasicMaterial color="#06B6D4" wireframe transparent opacity={0.1} />
        </Sphere>
        <Text
          position={[0, -2.0, 0]}
          fontSize={0.5}
          color="#F9FAFB"
          anchorX="center"
          anchorY="middle"
          fontWeight="bold"
        >
          Your Brand
        </Text>
      </group>
    </Float>
  )
}

export function HeroNetwork() {
  const groupRef = useRef<THREE.Group>(null)
  const centerVec = new THREE.Vector3(0, 0, 0)

  return (
    <>
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        autoRotate 
        autoRotateSpeed={0.5} 
        dampingFactor={0.05}
      />
      <group ref={groupRef}>
        <ParticleField count={400} />
        
        <CentralBrandNode />
        
        {PLATFORMS.map((platform, i) => (
          <group key={i}>
            <PlatformNode platform={platform} />
            <ConnectionLine 
              start={centerVec} 
              end={new THREE.Vector3(...platform.position as [number, number, number])}
              color={platform.color}
            />
          </group>
        ))}
      </group>
    </>
  )
}
