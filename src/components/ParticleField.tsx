import { useRef, useMemo, forwardRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

// Create a circular bubble texture procedurally
const createBubbleTexture = () => {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;

  // Radial gradient for soft bubble look
  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.3, "rgba(255,255,255,0.8)");
  gradient.addColorStop(0.7, "rgba(255,255,255,0.3)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
};

const Particles = () => {
  const meshRef = useRef<THREE.Points>(null);
  const count = 800;
  const bubbleTexture = useMemo(() => createBubbleTexture(), []);

  const [positions, colors, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    const blue = new THREE.Color("hsl(217, 91%, 60%)");
    const cyan = new THREE.Color("hsl(192, 91%, 43%)");
    const purple = new THREE.Color("hsl(260, 60%, 55%)");
    const palette = [blue, cyan, purple];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
      const c = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
      sz[i] = 0.03 + Math.random() * 0.06;
    }
    return [pos, col, sz];
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.1;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={count} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} count={count} />
      </bufferGeometry>
      <pointsMaterial
        map={bubbleTexture}
        size={0.12}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        alphaTest={0.01}
      />
    </points>
  );
};

const FloatingOrbs = () => {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.05;
    group.current.children.forEach((child, i) => {
      child.position.y += Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.001;
    });
  });

  const orbs = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => ({
        position: [
          Math.cos((i / 6) * Math.PI * 2) * 4,
          Math.sin((i / 6) * Math.PI * 2) * 2,
          Math.sin((i / 6) * Math.PI) * 3,
        ] as [number, number, number],
        color: ["#3b82f6", "#06b6d4", "#7c3aed", "#3b82f6", "#06b6d4", "#7c3aed"][i],
        scale: 0.12 + Math.random() * 0.25,
      })),
    []
  );

  return (
    <group ref={group}>
      {orbs.map((orb, i) => (
        <mesh key={i} position={orb.position}>
          <sphereGeometry args={[orb.scale, 32, 32]} />
          <meshBasicMaterial color={orb.color} transparent opacity={0.15} />
        </mesh>
      ))}
    </group>
  );
};

const ParticleField = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
      >
        <Particles />
        <FloatingOrbs />
      </Canvas>
    </div>
  );
};

export default ParticleField;
