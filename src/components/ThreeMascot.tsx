
import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

function FinanceBot() {
  const meshRef = useRef<THREE.Group>(null!);
  
  // Animation for the bot and elements
  useFrame((state) => {
    if (meshRef.current) {
      // Gentle rotation
      meshRef.current.rotation.y += 0.003;
      // Subtle floating effect
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={meshRef} position={[0, 0, 0]}>
      {/* Core/Base - a digital hub represented by a sleek device */}
      <mesh castShadow position={[0, -0.2, 0]}>
        <boxGeometry args={[1.5, 0.2, 1.5]} />
        <meshStandardMaterial 
          color="#1A1F2C" 
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      
      {/* Main financial dashboard sphere */}
      <mesh castShadow position={[0, 0.6, 0]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial 
          color="#0EA5E9" 
          metalness={0.8}
          roughness={0.2}
          emissive="#0EA5E9"
          emissiveIntensity={0.1}
          transparent={true}
          opacity={0.9}
        />
      </mesh>
      
      {/* Digital display elements - financial metrics */}
      <group position={[0, 0.6, 0.65]}>
        {/* Screen/display */}
        <mesh>
          <planeGeometry args={[0.6, 0.3]} />
          <meshStandardMaterial 
            color="#D3E4FD" 
            emissive="#D3E4FD"
            emissiveIntensity={0.2}
          />
        </mesh>
        
        {/* Financial metrics bars */}
        <group position={[-0.2, 0, 0.01]}>
          <mesh position={[0, 0.08, 0]}>
            <boxGeometry args={[0.15, 0.03, 0.01]} />
            <meshStandardMaterial color="#33C3F0" />
          </mesh>
          <mesh position={[0, 0.04, 0]}>
            <boxGeometry args={[0.2, 0.03, 0.01]} />
            <meshStandardMaterial color="#8B5CF6" />
          </mesh>
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[0.1, 0.03, 0.01]} />
            <meshStandardMaterial color="#33F06B" />
          </mesh>
          <mesh position={[0, -0.04, 0]}>
            <boxGeometry args={[0.25, 0.03, 0.01]} />
            <meshStandardMaterial color="#F06B33" />
          </mesh>
          <mesh position={[0, -0.08, 0]}>
            <boxGeometry args={[0.17, 0.03, 0.01]} />
            <meshStandardMaterial color="#F033C3" />
          </mesh>
        </group>
      </group>
      
      {/* Calendar for bill payments and planning */}
      <group position={[-0.65, 0.6, 0]} rotation={[0, Math.PI * 0.2, 0]}>
        <mesh>
          <boxGeometry args={[0.5, 0.5, 0.05]} />
          <meshStandardMaterial color="#FFFFFF" />
        </mesh>
        
        {/* Calendar grid */}
        <group position={[0, 0, 0.03]}>
          {[-0.15, 0, 0.15].map((y, yIndex) => 
            [-0.15, 0, 0.15].map((x, xIndex) => (
              <mesh key={`${xIndex}-${yIndex}`} position={[x, y, 0]}>
                <boxGeometry args={[0.1, 0.1, 0.01]} />
                <meshStandardMaterial 
                  color={xIndex === 1 && yIndex === 1 ? "#8B5CF6" : "#EEEEEE"} 
                />
              </mesh>
            ))
          )}
        </group>
      </group>
      
      {/* Finance chart hologram - for financial planning */}
      <group position={[0.65, 0.6, 0]} rotation={[0, -Math.PI * 0.2, 0]}>
        <mesh>
          <torusGeometry args={[0.25, 0.03, 16, 100]} />
          <meshStandardMaterial 
            color="#33C3F0" 
            metalness={0.9}
            roughness={0.1}
            transparent={true}
            opacity={0.8}
            emissive="#33C3F0"
            emissiveIntensity={0.5}
          />
        </mesh>
        
        {/* Financial goal trend line */}
        <mesh position={[0, 0.15, 0]} rotation={[0, 0, Math.PI * 0.15]}>
          <boxGeometry args={[0.4, 0.01, 0.01]} />
          <meshStandardMaterial 
            color="#33F06B" 
            transparent={true}
            opacity={0.9}
            emissive="#33F06B"
          />
        </mesh>
        
        {/* Goal marker */}
        <mesh position={[0.18, 0.22, 0]}>
          <sphereGeometry args={[0.03, 16, 16]} />
          <meshStandardMaterial 
            color="#F06B33" 
            emissive="#F06B33"
            emissiveIntensity={0.5}
          />
        </mesh>
      </group>
      
      {/* Credit card - for bill payments */}
      <group position={[0, 1.2, -0.4]} rotation={[Math.PI * 0.15, 0, 0]}>
        <mesh>
          <boxGeometry args={[0.7, 0.45, 0.05]} />
          <meshStandardMaterial 
            color="#7E69AB" 
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
        
        {/* Card chip */}
        <mesh position={[-0.2, 0.05, 0.03]}>
          <boxGeometry args={[0.15, 0.15, 0.01]} />
          <meshStandardMaterial color="#D6BCFA" />
        </mesh>
        
        {/* Card details */}
        <mesh position={[0.1, -0.1, 0.03]}>
          <boxGeometry args={[0.4, 0.05, 0.01]} />
          <meshStandardMaterial color="#D6BCFA" />
        </mesh>
      </group>
    </group>
  );
}

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null!);
  const particleCount = 60;
  const particlePositions = new Float32Array(particleCount * 3);
  
  // Create random positions for particles - data flow visualization
  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    particlePositions[i3] = (Math.random() - 0.5) * 6;
    particlePositions[i3 + 1] = (Math.random() - 0.5) * 6;
    particlePositions[i3 + 2] = (Math.random() - 0.5) * 6;
  }
  
  // Animate data flow particles
  useFrame(({clock}) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = clock.elapsedTime * 0.05;
    }
  });
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={particlePositions}
          count={particleCount}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#33C3F0"
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow />
      <pointLight position={[-10, -10, -10]} color="#0EA5E9" intensity={1} />
      
      <FinanceBot />
      <ParticleField />
      
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2}
        rotateSpeed={0.5}
      />
    </>
  );
}

export default function ThreeMascot() {
  return (
    <div className="h-[400px] w-full">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={45} />
        <Scene />
      </Canvas>
    </div>
  );
}
