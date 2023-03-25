import Video from "../about/video";
import styles from "../../styles/About.module.css";

const About = () => {
  return (
    <div id={styles.aboutContainer}>
      <Video />

      <div id={styles.aboutDetails}>
        <h3 id={styles.aboutTitle}>
          Fresh ideas & unique <br /> designs
        </h3>
        <p id={styles.aboutText}>
          Brook presents your services with flexible, convenient and
          multipurpose layouts. You can select your favorite layouts & elements
          for particular projects with unlimited customization possibilities.
        </p>
        <div className="bk-separator--40" />
        <a href={`${process.env.PUBLIC_URL + "/"}`}>
          <span id={styles.moreDetails}>More details</span>
          <i id={styles.moreDetailsArror} className="fa fa-arrow-right" />
        </a>
      </div>
    </div>
  );
};

export default About;
