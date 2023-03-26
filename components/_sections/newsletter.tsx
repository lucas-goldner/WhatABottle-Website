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
    </div>
  );
};

export default NewsLetter;
