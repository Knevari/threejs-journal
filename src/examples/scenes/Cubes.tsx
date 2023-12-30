import { Suspense, useMemo } from "react";
import palettes from "nice-color-palettes";
import { Canvas } from "@react-three/fiber";
import {
  Box,
  Center,
  Environment,
  Float,
  Lightformer,
  Text3D,
} from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";

import { MathUtils } from "three/src/math/MathUtils.js";

import { randomFrom } from "@/utils/array";
import { EffectComposer, N8AO } from "@react-three/postprocessing";

const palette = randomFrom(palettes);

const objects = Array.from({ length: 50 }, () => {
  const color = randomFrom(palette);
  return { color };
});

const Cube = ({ color }: { color: string }) => {
  const { x, y, rx, ry } = useMemo(
    () => ({
      x: MathUtils.randFloatSpread(5),
      y: MathUtils.randFloatSpread(3),
      rx: Math.random() * Math.PI,
      ry: Math.random() * Math.PI,
    }),
    []
  );

  return (
    <RigidBody
      type="dynamic"
      linearDamping={4}
      angularDamping={1}
      friction={0.1}
      position={[x, y, -30]}
      colliders="hull"
    >
      <Box castShadow position={[0, 0, 0]} rotation={[rx, ry, 0]}>
        <meshStandardMaterial color={color} metalness={0.5} roughness={0.3} />
      </Box>
    </RigidBody>
  );
};

export default function Cubes() {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ antialias: false }}
      camera={{ position: [0, 0, 10], fov: 25, near: 8, far: 50 }}
    >
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
                    metalness={0.2}
                    roughness={0.6}
                  />
                </Text3D>
              </Center>
            </RigidBody>
          </Float>
        </Physics>
      </Suspense>

      <ambientLight intensity={3} />

      <EffectComposer>
        <N8AO distanceFalloff={1} aoRadius={1} intensity={4} />
      </EffectComposer>

      <Environment resolution={256}>
        <group rotation={[-Math.PI / 3, 0, 1]}>
          <Lightformer
            form="circle"
            intensity={4}
            rotation-x={Math.PI / 2}
            position={[0, 5, -9]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, 1, -1]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, -1, -1]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={-Math.PI / 2}
            position={[10, 1, 0]}
            scale={8}
          />
        </group>
      </Environment>
    </Canvas>
  );
}
