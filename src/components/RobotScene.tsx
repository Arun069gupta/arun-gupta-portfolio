import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stage, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// --- INSTRUCTIONS FOR ADDING YOUR CUSTOM .GLB MODEL ---
// 1. Place your 'robot.glb' file in the 'public/' folder of this project.
// 2. Uncomment the CustomRobot component below.
// 3. In the RobotScene component at the bottom, replace <PlaceholderRobot /> with <CustomRobot />


function CustomRobot() {
  // Dynamically resolve path — works with any base URL (custom domain or /My-Portfolio/)
  const { scene } = useGLTF(`${import.meta.env.BASE_URL}robot.glb`);
  const robotRef = useRef<THREE.Group>(null);
  const modelScale = 6;
  const modelCenter = new THREE.Box3().setFromObject(scene).getCenter(new THREE.Vector3());

  // Rotate the robot 360 degrees continuously
  useFrame((state, delta) => {
    if (robotRef.current) {
      robotRef.current.rotation.y += delta * 0.5; // Adjust speed here
    }
  });

  return (
    <group ref={robotRef}>
      <primitive
        object={scene}
        scale={modelScale}
        position={[-modelCenter.x * modelScale, 0.2, -modelCenter.z * modelScale]}
      />
    </group>
  );
}


// --- TEMPORARY PLACEHOLDER ROBOT ---
function PlaceholderRobot() {
  const robotRef = useRef<THREE.Group>(null);

  // Rotate the placeholder robot 360 degrees continuously
  useFrame((state, delta) => {
    if (robotRef.current) {
      robotRef.current.rotation.y += delta * 0.5; // continuous rotation speed
    }
  });

  return (
    <group ref={robotRef} position={[0, 0, 0]}>
      {/* Body */}
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[1, 1.5, 0.8]} />
        <meshStandardMaterial color="#38aefc" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Head */}
      <mesh position={[0, 2.2, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#ffffff" metalness={0.5} roughness={0.1} />
      </mesh>
      {/* Eye / Visor */}
      <mesh position={[0, 2.2, 0.45]}>
        <boxGeometry args={[0.6, 0.2, 0.2]} />
        <meshStandardMaterial color="#ff004c" emissive="#ff004c" emissiveIntensity={2} />
      </mesh>
      {/* Arms */}
      <mesh position={[-0.7, 1, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 1.2]} />
        <meshStandardMaterial color="#555555" metalness={0.9} />
      </mesh>
      <mesh position={[0.7, 1, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 1.2]} />
        <meshStandardMaterial color="#555555" metalness={0.9} />
      </mesh>
      {/* Base / Wheels */}
      <mesh position={[0, 0.15, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.6, 0.6, 0.3, 32]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.5} />
      </mesh>
    </group>
  );
}

export default function RobotScene() {
  return (
    <Canvas
      camera={{ position: [0, 2, 6], fov: 45 }}
      style={{ width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#38aefc" />
      <directionalLight position={[-10, 10, -5]} intensity={0.5} color="#ffffff" />
      
      {/* The rotating robot */}
       <CustomRobot />
      
      {/* The stage/pedestal the robot sits on */}
      <mesh position={[0, -0.1, 0]}>
        <cylinderGeometry args={[2, 2.2, 0.2, 64]} />
        <meshStandardMaterial color="#050608" metalness={0.8} roughness={0.4} />
      </mesh>
      
      {/* Glowing ring around the stage */}
      <mesh position={[0, -0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.01, 2.1, 64]} />
        <meshBasicMaterial color="#38aefc" transparent opacity={0.6} side={THREE.DoubleSide} />
      </mesh>

      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        maxPolarAngle={Math.PI / 2 + 0.1} 
        minPolarAngle={Math.PI / 3}
      />
    </Canvas>
  );
}
