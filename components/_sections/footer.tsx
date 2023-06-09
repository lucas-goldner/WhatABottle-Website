import styles from "../../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer id={styles.footerContainer}>
      <div id={styles.footerUpperContent}>
        <h3 id={styles.questionsTitle}>
          Have any questions or <br /> want to know more?
        </h3>

        <div id={styles.contactContainer}>
          <h3 id={styles.contactText}>Contact us</h3>
          <div className={styles.contactAddress}>
            <p>
              2023 Feuersee 77, <br /> Stuttgart 70173, Germany
            </p>

            <div id={styles.contactMailsContainer}>
              <p className={styles.contactMails}>
                <a
                  className={styles.contactText}
                  href={"mailto:lucas.goldner@googlemail.com"}
                >
                  info@yourdomain.com
                </a>
              </p>
              <p className={styles.contactMails}>
                <a className={styles.contactText} href={"tel:0068120034509"}>
                  (+68)120034509
                </a>
              </p>
            </div>
          </div>
          {/* <div id={styles.socialLinks}>
            {socials.map((social: Social) => (
              <a
                className={styles.socialIcon}
                key={social.id}
                href={social.url}
              >
                <i className={`fa fa-${social.media}`} />
              </a>
            ))}
          </div> */}
        </div>
      </div>

      <div id={styles.lowerContentContainer}>
        <ul id={styles.otherLinksContainer}>
          <li>
            <a className={styles.otherLinksText} href={""}>
              Home
            </a>
          </li>
          <li>
            <a className={styles.otherLinksText} href={"/impress"}>
              Impress
            </a>
          </li>
          <li>
            <a className={styles.otherLinksText} href={"/privacy-policy"}>
              Privacy Policy
            </a>
          </li>
        </ul>
        <div>
          <p id={styles.copyrightText}>
            © {new Date().getFullYear()} What-a-bottle. Made with{" "}
            <i id={styles.heart} className="fa fa-heart" /> in Stuttgart.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
