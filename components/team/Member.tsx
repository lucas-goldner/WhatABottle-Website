import React from "react";
import { TeamMember } from "../../types/TeamMember";
import styles from "../../styles/Team.module.css";

const Member = (data: TeamMember) => {
  return (
    <div className={styles.memberContainer}>
      <div className={styles.member}>
        <img src={data.thumb} alt={data.name} className={styles.memberImg} />
        <div
          className="overlay"
          style={{
            backgroundImage: `url(${data.thumb})`,
          }}
        />
        <ul className={styles.socials}>
          {data.socials.map((social) => (
            <li key={social.id} className={social.media}>
              <a
                href={social.url}
                className={styles.socialIcon}
                aria-label={social.media}
              >
                <i className={`fa fa-${social.media}`} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.titleContainer}>
        <p className={styles.nameTitle}>{data.name}</p>
        <span className={styles.designationTitle}>{data.designation}</span>
      </div>
    </div>
  );
};

export default Member;
