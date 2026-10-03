import React, { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// 3D Hologram Core that reacts to scroll and mouse
function CyberCore({ scrollProgress, mousePos }) {
  const outerMeshRef = useRef();
  const innerMeshRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const groupRef = useRef();

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    const p = scrollProgress.current; // 0 (top) -> 1 (bottom)
    const mx = mousePos.current.x;
    const my = mousePos.current.y;

    // Smooth damp rotation
    if (outerMeshRef.current) {
      outerMeshRef.current.rotation.x += delta * (0.3 + p * 0.4);
      outerMeshRef.current.rotation.y += delta * (0.4 + p * 0.6);
    }

    if (innerMeshRef.current) {
      innerMeshRef.current.rotation.x -= delta * 0.5;
      innerMeshRef.current.rotation.y += delta * 0.6;
      // Pulse scale
      const pulse = 1 + Math.sin(time * 2.5) * 0.05;
      innerMeshRef.current.scale.set(pulse, pulse, pulse);
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = Math.sin(time * 0.8) * 0.6 + p * Math.PI;
      ring1Ref.current.rotation.y = time * 0.5;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = Math.cos(time * 0.7) * 0.8 + p * Math.PI * 1.5;
      ring2Ref.current.rotation.x = -time * 0.6;
    }

    // Dynamic 3D choreography based on scroll position
    if (groupRef.current) {
      let targetX = 0;
      let targetY = 0;
      let targetZ = 0;
      let targetScale = 1.1;

      if (p < 0.22) {
        // Hero: Center stage, floating majestically
        targetX = 1.2 + mx * 0.4;
        targetY = 0.1 + my * 0.4 + Math.sin(time * 1.2) * 0.15;
        targetZ = 0.5;
        targetScale = 1.25;
      } else if (p < 0.48) {
        // Skills / Stack: Move to top-right
        targetX = 2.4 + mx * 0.3;
        targetY = 0.5 + my * 0.3;
        targetZ = -0.5;
        targetScale = 1.0;
      } else if (p < 0.72) {
        // Projects: Move to left side
        targetX = -2.3 + mx * 0.3;
        targetY = -0.2 + my * 0.3;
        targetZ = -0.2;
        targetScale = 1.1;
      } else if (p < 0.88) {
        // Experience: Right lower
        targetX = 2.2 + mx * 0.3;
        targetY = -0.4 + my * 0.3;
        targetZ = -0.3;
        targetScale = 0.95;
      } else {
        // Contact: Center lower
        targetX = 0 + mx * 0.3;
        targetY = 0.2 + my * 0.3;
        targetZ = 0.8;
        targetScale = 1.35;
      }

      // Smooth lerp positions
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.06);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.06);
      groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, targetZ, 0.06);
      
      const currentScale = groupRef.current.scale.x;
      const newScale = THREE.MathUtils.lerp(currentScale, targetScale, 0.06);
      groupRef.current.scale.set(newScale, newScale, newScale);
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Outer Holographic Wireframe Icosahedron */}
      <mesh ref={outerMeshRef}>
        <icosahedronGeometry args={[1.35, 1]} />
        <meshStandardMaterial
          wireframe
          color="#00f0ff"
          emissive="#00b4d8"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* Inner Glowing Crystal Core */}
      <mesh ref={innerMeshRef}>
        <dodecahedronGeometry args={[0.75, 0]} />
        <meshStandardMaterial
          color="#9333ea"
          emissive="#7928ca"
          emissiveIntensity={0.8}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* Orbiting Cyber Ring 1 */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[1.9, 0.03, 16, 100]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#0284c7"
          emissiveIntensity={0.7}
        />
      </mesh>

      {/* Orbiting Cyber Ring 2 */}
      <mesh ref={ring2Ref}>
        <torusGeometry args={[2.25, 0.025, 16, 100]} />
        <meshStandardMaterial
          color="#c084fc"
          emissive="#a855f7"
          emissiveIntensity={0.8}
        />
      </mesh>
    </group>
  );
}

// 3D Starfield & Floating Particles with depth
function CosmicParticles({ scrollProgress, mousePos }) {
  const pointsRef = useRef();
  const count = 1000;

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colorChoices = [
      new THREE.Color("#00f0ff"),
      new THREE.Color("#818cf8"),
      new THREE.Color("#c084fc"),
      new THREE.Color("#38bdf8"),
      new THREE.Color("#ffffff"),
    ];

    for (let i = 0; i < count; i++) {
      // Spread across a 3D spherical/torus volume
      const radius = 6 + Math.random() * 12;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 2] = radius * Math.cos(phi);

      const color = colorChoices[Math.floor(Math.random() * colorChoices.length)];
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();
    const p = scrollProgress.current;
    const mx = mousePos.current.x;

    // Slow ambient rotation + responsive scroll boost
    pointsRef.current.rotation.y = time * 0.04 + p * 0.8 + mx * 0.1;
    pointsRef.current.rotation.x = Math.sin(time * 0.03) * 0.1 + p * 0.3;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.065}
        vertexColors
        transparent
        opacity={0.75}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// Floating Small Cyber Glyphs (tetrahedron, octahedron)
function FloatingGlyphs({ scrollProgress }) {
  const glyphsGroup = useRef();

  useFrame((state) => {
    if (!glyphsGroup.current) return;
    const time = state.clock.getElapsedTime();
    const p = scrollProgress.current;

    glyphsGroup.current.position.y = -p * 5 + Math.sin(time * 0.6) * 0.2;
    glyphsGroup.current.rotation.y = time * 0.15;
  });

  const glyphData = [
    { pos: [-3.5, 2.5, -2], geo: "oct", scale: 0.3, color: "#00f0ff" },
    { pos: [3.8, -1.8, -3], geo: "tetra", scale: 0.35, color: "#ec4899" },
    { pos: [-2.8, -4.5, -1], geo: "oct", scale: 0.25, color: "#a855f7" },
    { pos: [3.2, 5.0, -4], geo: "tetra", scale: 0.4, color: "#38bdf8" },
    { pos: [-1.8, 6.0, -3], geo: "oct", scale: 0.28, color: "#10b981" },
  ];

  return (
    <group ref={glyphsGroup}>
      {glyphData.map((item, idx) => (
        <mesh key={idx} position={item.pos} scale={item.scale}>
          {item.geo === "oct" ? (
            <octahedronGeometry args={[1, 0]} />
          ) : (
            <tetrahedronGeometry args={[1, 0]} />
          )}
          <meshStandardMaterial
            wireframe
            color={item.color}
            emissive={item.color}
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function ScrollCanvas3D() {
  const scrollProgress = useRef(0);
  const mousePos = useRef({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        scrollProgress.current = Math.min(Math.max(window.scrollY / totalScroll, 0), 1);
      }
    };

    const handleMouseMove = (e) => {
      mousePos.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 6.5], fov: 45 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 2]}
      >
        {/* Lights */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 8, 5]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-6, -4, 4]} color="#00f0ff" intensity={3} distance={15} />
        <pointLight position={[6, 4, -3]} color="#9333ea" intensity={3.5} distance={15} />
        <pointLight position={[0, -5, 2]} color="#38bdf8" intensity={2} distance={12} />

        {/* 3D Scene Elements */}
        <CyberCore scrollProgress={scrollProgress} mousePos={mousePos} />
        <CosmicParticles scrollProgress={scrollProgress} mousePos={mousePos} />
        <FloatingGlyphs scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  );
}
