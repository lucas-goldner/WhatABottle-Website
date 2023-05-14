import styles from "../../styles/About.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div id={styles.aboutContainer}>
      <Image
        alt="LOL"
        src={"/images/bottleInAction.jpeg"}
        width={400}
        height={300}
      />
      <div id={styles.aboutDetails}>
        <h3 id={styles.aboutTitle}>
          Fresh ideas & unique <br /> designs
        </h3>
        <p id={styles.aboutText}>
          What-a-bottle is your ultimate hydration partner, committed to helping
          you optimize your fluid intake. Equipped with a nifty LED reminder
          ring built right into the bottle, What-a-bottle makes sure you never
          forget to drink up, keeping you on track to reach your hydration goals
          with ease.
        </p>
        <div className="bk-separator--40" />
        <a href={`./`}>
          <span id={styles.moreDetails}>More details</span>
          <i id={styles.moreDetailsArror} className="fa fa-arrow-right" />
        </a>
      </div>
    </div>
  );
};

export default About;
