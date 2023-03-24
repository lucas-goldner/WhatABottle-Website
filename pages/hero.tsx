import { Environment, OrbitControls } from "@react-three/drei";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { Euler } from "three";
import { WaterBottle } from "../components/hero/WaterBottle";
import styles from "../styles/Hero.module.css";

const myLoader = () => {
  return `./logo.png`;
};

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.logoContainer}>
        <Image
          loader={myLoader}
          className={styles.logo}
          src="./logo.png"
          alt="What a bottle logo"
          width={100}
          height={500}
        />
      </div>
      <Canvas shadows={true} className={styles.heroCanvas}>
        <color attach="background" args={["white"]} />
        <fog attach="fog" args={["#3f7b9d", 25, 35]} />
        <ambientLight intensity={1.5} />
        <directionalLight
          position={[-10, 10, 5]}
          intensity={3}
          castShadow={true}
          shadow-mapSize-height={512}
          shadow-mapSize-width={512}
        />
        <WaterBottle position={[0, 0, -25]} rotation={new Euler(-0.15, 0, 0)} />
        <OrbitControls
          minAzimuthAngle={-Math.PI / 10}
          maxAzimuthAngle={Math.PI / 8}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI - Math.PI / 2}
        />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default Hero;
