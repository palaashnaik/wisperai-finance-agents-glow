
import { useRef, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

function FinanceBot(props: any) {
  const mesh = useRef<THREE.Mesh>(null!);
  
  // Simple animation
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.003;
      mesh.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <mesh {...props} ref={mesh} castShadow>
      {/* Sphere body */}
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial 
        color="#9b87f5" 
        metalness={0.8}
        roughness={0.2}
        emissive="#330080"
        emissiveIntensity={0.2}
      />
      
      {/* Eyes */}
      <group position={[0, 0.3, 0.85]}>
        {/* Left eye */}
        <mesh position={[-0.3, 0, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#ffffff" />
          
          {/* Pupil */}
          <mesh position={[0, 0, 0.1]}>
            <sphereGeometry args={[0.07, 16, 16]} />
            <meshStandardMaterial color="#000000" />
          </mesh>
        </mesh>
        
        {/* Right eye */}
        <mesh position={[0.3, 0, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#ffffff" />
          
          {/* Pupil */}
          <mesh position={[0, 0, 0.1]}>
            <sphereGeometry args={[0.07, 16, 16]} />
            <meshStandardMaterial color="#000000" />
          </mesh>
        </mesh>
      </group>
      
      {/* Finance graph hologram element */}
      <group position={[0, 1.5, 0]} rotation={[0, 0, 0]}>
        <mesh>
          <torusGeometry args={[0.5, 0.05, 16, 100]} />
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
        
        {/* Floating graph line */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.6, 0.02, 0.02]} />
          <meshStandardMaterial 
            color="#33C3F0" 
            transparent={true}
            opacity={0.8}
            emissive="#33C3F0"
          />
        </mesh>
        
        {/* Trend line up */}
        <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[0.3, 0.02, 0.02]} />
          <meshStandardMaterial 
            color="#33F06B" 
            transparent={true}
            opacity={0.8}
            emissive="#33F06B"
          />
        </mesh>
      </group>
    </mesh>
  );
}

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null!);
  const particleCount = 100;
  const particlePositions = new Float32Array(particleCount * 3);
  
  // Create random positions for particles
  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    particlePositions[i3] = (Math.random() - 0.5) * 7;
    particlePositions[i3 + 1] = (Math.random() - 0.5) * 7;
    particlePositions[i3 + 2] = (Math.random() - 0.5) * 7;
  }
  
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
        size={0.05}
        color="#9b87f5"
        transparent
        opacity={0.8}
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
      <pointLight position={[-10, -10, -10]} color="#33C3F0" intensity={1} />
      
      <FinanceBot position={[0, 0, 0]} />
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
