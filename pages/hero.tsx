import { Canvas } from "@react-three/fiber";
import { WaterBottle } from "../components/hero/WaterBottle";
import styles from "../styles/Hero.module.css";
import { Euler } from "three";

const Hero = () => {
  return (
    <div className={styles.scene}>
      <Canvas className={styles.heroCanvas}>
        <fog attach="fog" args={["#3f7b9d", 25, 35]} />
        <ambientLight intensity={1.5} />
        <directionalLight position={[-10, 10, 5]} intensity={3} />
        <WaterBottle position={[0, 0, -25]} rotation={new Euler(-0.15, 0, 0)} />
      </Canvas>
    </div>
  );
};

export default Hero;
