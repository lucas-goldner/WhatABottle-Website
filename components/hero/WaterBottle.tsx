import { useGLTF } from "@react-three/drei";
import { GLTFResult } from "../../types/GLTFResult";
import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export const WaterBottle = (props: JSX.IntrinsicElements["group"]) => {
  const ref = useRef(new THREE.Group());
  const { nodes } = useGLTF("./water_bottle.glb") as GLTFResult;

  const blueMetallicMaterial = new THREE.MeshStandardMaterial({
    metalness: 1,
    roughness: 0.25,
    color: "#049ef4",
  });

  useFrame((state) => {
    if (ref != undefined) {
      const t = state.clock.getElapsedTime();
      ref.current.rotation.set(
        Math.cos(t / 4) / 8,
        Math.sin(t / 4) / 8,
        -0.2 - (1 + Math.sin(t / 1.5)) / 20
      );
      ref.current.position.y = (-80 + Math.sin(t / 1.5)) / 10;
    }
  });

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        geometry={nodes.bottel_body.geometry}
        material={blueMetallicMaterial}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[50.41, 50.41, 70.92]}
      />
      <mesh
        geometry={nodes.cap.geometry}
        material={nodes.cap.material}
        position={[0, 15.93, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[57.11, 57, 65.41]}
      />
      <mesh
        geometry={nodes.patch.geometry}
        material={nodes.cap.material}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
    </group>
  );
};

useGLTF.preload("./water_bottle.glb");
