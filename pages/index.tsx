import Head from "next/head";
import Hero from "../components/_sections/hero";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <>
      <Head>
        <title>What a bottle</title>
        <meta name="description" content="Landing page for What a bottle" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.heroContainer}>
        <Hero />
      </div>
    </>
  );
};

export default Home;
