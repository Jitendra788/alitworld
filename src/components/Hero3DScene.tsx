"use client";

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  Sphere,
  Sparkles,
} from "@react-three/drei";
import * as THREE from "three";
import type { Points } from "three";

const BRAND = {
  primary: "#4f46e5",
  cyan: "#38bdf8",
  gold: "#c9a227",
  purple: "#818cf8",
};

function CameraRig() {
  const { camera, pointer } = useThree();
  const vec = useMemo(() => new THREE.Vector3(), []);

  useFrame((_, delta) => {
    vec.set(pointer.x * 1.8, pointer.y * 0.9, 9);
    camera.position.lerp(vec, 4 * delta);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function GlowingBlob({
  position,
  scale,
  color,
  speed = 2,
  distort = 0.45,
}: {
  position: [number, number, number];
  scale: number;
  color: string;
  speed?: number;
  distort?: number;
}) {
  return (
    <Float speed={2.2} rotationIntensity={0.6} floatIntensity={1.5}>
      <Sphere args={[1, 128, 128]} position={position} scale={scale}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={speed}
          roughness={0.15}
          metalness={0.85}
          emissive={color}
          emissiveIntensity={0.35}
        />
      </Sphere>
    </Float>
  );
}

function ParticleNetwork() {
  const ref = useRef<Points>(null);
  const count = 120;

  const { positions, lineGeometry } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const pts: THREE.Vector3[] = [];

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 14;
      const y = (Math.random() - 0.5) * 8;
      const z = (Math.random() - 0.5) * 6 - 2;
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
      pts.push(new THREE.Vector3(x, y, z));
    }

    const linePositions: number[] = [];
    const maxDist = 2.8;

    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        if (pts[i].distanceTo(pts[j]) < maxDist) {
          linePositions.push(
            pts[i].x,
            pts[i].y,
            pts[i].z,
            pts[j].x,
            pts[j].y,
            pts[j].z
          );
        }
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(linePositions, 3)
    );

    return { positions: pos, lineGeometry: geo };
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.04;
    ref.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.2) * 0.08;
  });

  return (
    <group>
      <points ref={ref}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color={BRAND.cyan}
          transparent
          opacity={0.9}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial
          color={BRAND.purple}
          transparent
          opacity={0.22}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
}

function DotGrid() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const mat = ref.current.material as THREE.MeshBasicMaterial;
    mat.opacity = 0.35 + Math.sin(state.clock.elapsedTime * 0.8) * 0.08;
  });

  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, -3.5, 0]}>
      <planeGeometry args={[28, 28, 48, 48]} />
      <meshBasicMaterial
        color={BRAND.cyan}
        wireframe
        transparent
        opacity={0.35}
      />
    </mesh>
  );
}

function Scene({ isMobile }: { isMobile: boolean }) {
  return (
    <>
      <color attach="background" args={["#050a14"]} />
      <fog attach="fog" args={["#050a14", 6, 22]} />

      <ambientLight intensity={0.35} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color={BRAND.cyan} />
      <pointLight position={[-6, -2, 4]} intensity={0.8} color={BRAND.gold} />
      <spotLight
        position={[0, 8, 2]}
        angle={0.4}
        penumbra={1}
        intensity={1.2}
        color={BRAND.primary}
      />

      <CameraRig />
      <ParticleNetwork />
      <DotGrid />

      <Sparkles
        count={isMobile ? 60 : 180}
        scale={isMobile ? [10, 6, 6] : [14, 8, 8]}
        size={isMobile ? 2 : 2.5}
        speed={0.4}
        opacity={0.55}
        color={BRAND.cyan}
      />

      <GlowingBlob
        position={[2.8, 0.2, -1]}
        scale={1.35}
        color={BRAND.primary}
        distort={0.5}
      />
      <GlowingBlob
        position={[-3, -0.8, -2]}
        scale={0.75}
        color={BRAND.cyan}
        speed={2.8}
        distort={0.55}
      />
      <GlowingBlob
        position={[0.5, 1.5, -4]}
        scale={0.45}
        color={BRAND.gold}
        speed={3.2}
        distort={0.4}
      />
    </>
  );
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isMobile;
}

export function Hero3DScene() {
  const isMobile = useIsMobile();

  return (
    <Canvas
      className="h-full w-full touch-none"
      camera={{ position: [0, 0, 9], fov: isMobile ? 55 : 50 }}
      dpr={isMobile ? [1, 1.25] : [1, 2]}
      gl={{
        antialias: !isMobile,
        alpha: false,
        powerPreference: "high-performance",
      }}
    >
      <Suspense fallback={null}>
        <Scene isMobile={isMobile} />
      </Suspense>
    </Canvas>
  );
}
