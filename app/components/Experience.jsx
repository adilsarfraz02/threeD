"use client";

import {
  Box,
  CameraControls,
  Environment,
  Gltf,
  Html,
  OrbitControls,
  useProgress,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Teacher } from "./Teacher";
import { degToRad } from "three/src/math/MathUtils";
import { Suspense } from "react";
const Experience = () => {
  return (
    <Canvas camera={{ position: [0, 0, 0.00001] }}>
      <CameraManager />
      <Environment preset="sunset" />
      <ambientLight intensity={0.8} color="pink" />
      <Suspense fallback={<Loader />}>
        <Teacher
          teacher="Nanami"
          position={[-1.2, -1.7, -3]}
          scale={1.5}
          rotation-y={degToRad(20)}
        />
        <Gltf src="/models/classroom_default.glb" position={[0.2, -1.7, -2]} />
      </Suspense>
    </Canvas>
  );
};

export default Experience;

const CameraManager = () => {
  return (
    <CameraControls
      minZoom={1}
      maxZoom={3}
      polarRotateSpeed={-0.3}
      azimuthRotateSpeed={-0.3}
      mouseButtons={{
        left: 1,
        wheel: 16,
      }}
      touches={{
        one: 32,
        two: 512,
      }}
    />
  );
};

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="text-2xl font-bold mt-12 h-screen z-20 ">
        Loading {progress.toFixed(2)}%
      </span>
    </Html>
  );
};
