import { useEffect, useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import styles from "../../styles/Features.module.css";
import Image from "next/image";

type FeatureType = {
  img: string;
  title: string;
  text: string;
  randomBoxColor: string;
};

const Features = () => {
  const size = useWindowSize();
  const [imageWidth, setImageWidth] = useState(0);

  useEffect(() => {
    if (size.width != undefined) {
      size.width >= 1024 ? setImageWidth(450) : setImageWidth(size.width);
    }
  }, [size]);

  const features: FeatureType[] = [
    {
      title: "Modern and innovative Design",
      img: "",
      text: "With a sleek and minimalist design, our water bottle is the epitome of modern innovation. But What-a-bottle is more than just a pretty face – it's packed with features that make it the perfect hydration companion.",
      randomBoxColor: "#0a2e52",
    },
    {
      title: "Reminder",
      img: "",
      text: "The LED reminder ring on the outer edge of the bottle lights up when it's time for you to take a sip, and you can even customize the colors to suit your style.",
      randomBoxColor: "#bf0029",
    },
    {
      title: "Tracking",
      img: "",
      text: "With our intuitive What-a-bottle app, you can effortlessly track every drop you drink, giving you a clear overview of your hydration habits in real-time.",
      randomBoxColor: "#a2b0ae",
    },
    {
      title: "Fitness",
      img: "",
      text: "Our advanced algorithm takes into account a range of factors, including weather conditions, physical activity, and body characteristics, to calculate your ideal daily water intake for your unique needs.",
      randomBoxColor: "#0a2e52",
    },
  ];

  return (
    <>
      {features.map((feat: FeatureType) => {
        return (
          <>
            {features.indexOf(feat) % 2 == 0 ? (
              <div style={{ background: "white", padding: "2rem 0rem" }}>
                <div className={styles.featuresContainer}>
                  <div className={styles.featuresTextContainer}>
                    <h3 className={styles.featureTitle}>{feat.title}</h3>
                    <p className={styles.featureText}>{feat.text}</p>
                  </div>
                  <div className={styles.imageContainer}>
                    <div
                      className={styles.otherRandomBox}
                      style={{
                        backgroundColor: feat.randomBoxColor,
                      }}
                    />
                    <Image
                      alt="LOL"
                      src={"/images/bottleInAction.jpeg"}
                      width={imageWidth}
                      height={300}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ padding: "2rem 0rem" }}>
                <div className={styles.featuresContainer}>
                  <div className={styles.imageContainer}>
                    <Image
                      alt="LOL"
                      src={"/images/bottleInAction.jpeg"}
                      className={styles.actualImage}
                      width={imageWidth}
                      height={300}
                    />
                    <div
                      className={styles.randomBox}
                      style={{
                        backgroundColor: feat.randomBoxColor,
                      }}
                    />
                  </div>
                  <div className={styles.featuresTextContainer}>
                    <h3 className={styles.featureTitle}>{feat.title}</h3>
                    <p className={styles.featureText}>{feat.text}</p>
                  </div>
                </div>
              </div>
            )}
          </>
        );
      })}

      {/* 
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
      </div> */}
    </>
  );
};

export default Features;
