import {
  Environment,
  Preload,
  Scroll,
  ScrollControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import HoveringImages from "../hero/images";

const Hero = () => {
  return (
    <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
      <fog attach="fog" args={["#3f7b9d", 25, 35]} />
      <ambientLight intensity={1.5} />
      <Suspense fallback={null}>
        <ScrollControls damping={0.3} pages={3}>
          <Scroll>
            <HoveringImages />
          </Scroll>
          <Scroll html>
            <h1 style={{ position: "absolute", top: "60vh", left: "0.5em" }}>
              What
            </h1>
            <h1 style={{ position: "absolute", top: "120vh", left: "60vw" }}>
              a
            </h1>
            <h1
              style={{
                position: "absolute",
                top: "198.5vh",
                left: "0.5vw",
                fontSize: "40vw",
              }}
            >
              bottle
            </h1>
          </Scroll>
        </ScrollControls>
        <Preload />
      </Suspense>
      <Environment preset="city" />
    </Canvas>
  );
};

export default Hero;
