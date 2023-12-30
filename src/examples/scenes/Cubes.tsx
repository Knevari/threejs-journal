import { Suspense, useMemo } from "react";
import palettes from "nice-color-palettes";
import { Canvas } from "@react-three/fiber";
import { Box, Center, Float, Text3D } from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";

import { MathUtils } from "three/src/math/MathUtils.js";

import { randomFrom } from "@/utils/array";

// Some cool palettes
// 14, 57, 85, 9, 87
const palette = palettes[9];

const objects = Array.from({ length: 50 }, () => {
  const color = randomFrom(palette);
  return { color };
});

const Cube = ({ color }: { color: string }) => {
  const { x, y, rx, ry, roughness, wireframe } = useMemo(
    () => ({
      x: MathUtils.randFloatSpread(5),
      y: MathUtils.randFloatSpread(3),
      rx: Math.random() * Math.PI,
      ry: Math.random() * Math.PI,
      roughness: Math.random(),
      wireframe: Math.random() < 0.2,
    }),
    []
  );

  return (
    <RigidBody
      type="dynamic"
      linearDamping={4}
      angularDamping={1}
      friction={0.1}
      position={[x, y, -20]}
      colliders="hull"
    >
      <Box castShadow rotation={[rx, ry, 0]}>
        <meshStandardMaterial
          color={color}
          metalness={0.3}
          roughness={roughness}
          wireframe={wireframe}
        />
      </Box>
    </RigidBody>
  );
};

const Lights = () => {
  return (
    <>
      <directionalLight intensity={3} position={[0, 1, 4]} />
      <ambientLight intensity={3} />
    </>
  );
};

export default function Cubes() {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ antialias: true }}
      camera={{ position: [0, 0, 10], fov: 25, near: 8, far: 50 }}
    >
      <Lights />
      <Suspense>
        <Physics gravity={[0, 0, 0]}>
          {objects.map((knot, index) => (
            <Cube key={index} {...knot} />
          ))}
          <Float speed={5}>
            <RigidBody type="fixed">
              <Center>
                <Text3D
                  font="/fonts/helvetiker_bold.typeface.json"
                  height={0.3}
                  curveSegments={12}
                  bevelEnabled
                  bevelThickness={0.02}
                  bevelSize={0.02}
                  bevelOffset={0}
                  bevelSegments={5}
                  position={[0, 0, 8]}
                >
                  ThreeJS
                  <meshStandardMaterial
                    color={palette[0]}
                    metalness={0.3}
                    roughness={0.8}
                  />
                </Text3D>
              </Center>
            </RigidBody>
          </Float>
        </Physics>
      </Suspense>
    </Canvas>
  );
}
