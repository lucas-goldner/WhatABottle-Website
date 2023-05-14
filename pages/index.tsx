import Head from "next/head";
import "font-awesome/css/font-awesome.min.css";
import Hero from "../components/_sections/hero";
import styles from "../styles/Home.module.css";
import Team from "../components/_sections/team";
import About from "../components/_sections/about";
import NewsLetter from "../components/_sections/newsletter";
import Footer from "../components/_sections/footer";
import Features from "../components/_sections/features";

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
      <div className={styles.nonHeroContainer}>
        <Team />
        <About />
        <Features />
        <NewsLetter />
        <Footer />
      </div>
    </>
  );
};

export default Home;
