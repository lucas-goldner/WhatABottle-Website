import { useEffect, useState } from "react";
import styles from "../../styles/About.module.css";
import Image from "next/image";
import { useWindowSize } from "../../hooks/useWindowSize";

const About = () => {
  const size = useWindowSize();
  const [imageWidth, setImageWidth] = useState(0);

  useEffect(() => {
    if (size.width != undefined) {
      size.width >= 1024 ? setImageWidth(450) : setImageWidth(size.width);
    }
  }, [size]);

  return (
    <div id={styles.aboutContainer}>
      <Image
        alt="Placeholder"
        src={"/images/bottleInAction.jpeg"}
        id={styles.aboutImage}
        width={imageWidth}
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
