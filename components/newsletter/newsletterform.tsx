import styles from "../../styles/Newsletter.module.css";

const NewsletterForm = () => {
  return (
    <form>
      <div className="input-box mt--30">
        <input
          id={styles.contactInput}
          name={"newsletter_email_input"}
          type={"email"}
          placeholder={"Your e-mail"}
        />
        <button id={styles.sendEmailButton} className="fa fa-envelope" />
      </div>
    </form>
  );
};

export default NewsletterForm;
