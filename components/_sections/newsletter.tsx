import styles from "../../styles/Newsletter.module.css";
import NewsletterForm from "../newsletter/newsletterform";

const NewsLetter = () => {
  return (
    <div id={styles.newsLetterContainer}>
      <div id={styles.newsLetterContent}>
        <h4 id={styles.singUptext}>Sign up for new updates from us.</h4>

        <div id={styles.contactBox}>
          <NewsletterForm />
        </div>
      </div>
      <p id={styles.newsLetterExplanation}>
        Subscribe to our Newsletter and stay up to date with the latest
        developments. You'll be one of the first to know about new features,
        special promotions, and exclusive discounts, including a 20% discount on
        your first What-a-bottle purchase. So what are you waiting for? Join the
        hydration revolution today with What-a-bottle, and take your first step
        towards a healthier, more sustainable lifestyle.
      </p>
    </div>
  );
};

export default NewsLetter;
