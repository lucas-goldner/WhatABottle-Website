import { useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import HoveringImage from "./image";
import { WaterBottle } from "./WaterBottle";

const HoveringImages = () => {
  const { width, height } = useThree((state) => state.viewport);
  const data = useScroll();
  const group = useRef();
  useFrame(() => {
    group.current.children[0].material.zoom = 1 + data.range(0, 1 / 2) / 2;
    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[2].material.zoom =
      1 + data.range(1.15 / 3, 1 / 3) / 3;
    group.current.children[4].material.zoom =
      1 + data.range(1.15 / 3, 1 / 3) / 2;
    group.current.children[5].material.zoom =
      1 + data.range(1.25 / 3, 1 / 3) / 1;
    group.current.children[6].material.zoom =
      1 + data.range(1.8 / 3, 1 / 3) / 3;
    group.current.children[6].material.grayscale =
      1 - data.range(1.6 / 3, 1 / 3);
  });

  return (
    <group ref={group}>
      <HoveringImage
        position={[-2, 0, 0]}
        scale={[4, height, 1]}
        url="/images/img1.jpg"
      />
      <HoveringImage position={[2, 0, 1]} scale={3} url="/images/img5.jpg" />
      <HoveringImage
        position={[-2, -height, 2]}
        scale={[3.2, 2, 1]}
        url="/images/img2.jpg"
      />
      <WaterBottle scale={[0.1, 0.1, 0.1]} position={[-0.25, -height, 2]} />
      <HoveringImage
        position={[1.2, -height, 3.5]}
        scale={[1, 1.5, 1]}
        url="/images/img4.jpg"
      />
      <HoveringImage
        position={[1.5, -height * 1.5, 2.5]}
        scale={[4, 1.5, 1]}
        url="/images/img3.jpg"
      />
      <HoveringImage
        position={[0, -height * 2 - height / 4, 0]}
        scale={[width, height / 2, 1]}
        url="/images/img6.jpg"
      />
    </group>
  );
};

export default HoveringImages;
