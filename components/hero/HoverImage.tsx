import { useFrame } from "@react-three/fiber";
import { Image as ImageImpl } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";
import { HoverImageMaterial } from "../../types/HoverImageMaterial";

const HoveringImage = ({ c = new THREE.Color(), url = "", ...props }) => {
  const ref = useRef(
    new THREE.Mesh<THREE.BufferGeometry, HoverImageMaterial>()
  );
  const [hovered, hover] = useState(false);
  useFrame(() => {
    ref.current.material.color.lerp(
      c.set(hovered ? "white" : "#ccc"),
      hovered ? 0.4 : 0.05
    );
  });

  return (
    <ImageImpl
      url={url}
      ref={ref}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      {...props}
    />
  );
};

export default HoveringImage;
