import styles from "@/styles/Home.module.css";
import Head from "next/head";
import Hero from "./hero";
import { Canvas } from "@react-three/fiber";

const Home = () => {
  return (
    <>
      <Head>
        <title>What a bottle</title>
        <meta name="description" content="Landing page for What a bottle" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>What a bottle</h1>
        <Hero />
      </main>
    </>
  );
};

export default Home;
