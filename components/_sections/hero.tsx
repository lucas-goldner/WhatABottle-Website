import {
  Environment,
  Preload,
  Scroll,
  ScrollControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import HoveringImages from "../hero/HoveringImages";
import styles from "../../styles/Hero.module.css";

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
            <h1 id={styles.heroTitle}>What</h1>
            <h1 id={styles.aTitle}>a</h1>
            <h1 id={styles.bottleTitle}>bottle</h1>
          </Scroll>
        </ScrollControls>
        <Preload />
      </Suspense>
      <Environment preset="city" />
    </Canvas>
  );
};

export default Hero;
