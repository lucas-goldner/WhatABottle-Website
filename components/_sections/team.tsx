import styles from "../../styles/Team.module.css";
import { TeamMember } from "../../types/TeamMember";
import Member from "../team/Member";
import teamMembers from "../../assets/data/teammembers.json";

const Team = () => {
  return (
    <div className={styles.teamContainer}>
      <h2 className={styles.teamSectionTitle}>Wer sind wir?</h2>
      <div className={styles.teamMembers}>
        {teamMembers.slice(0, 3).map((member: TeamMember) => (
          <div key={member.id}>
            <Member
              key={member.id}
              id={member.id}
              name={member.name}
              designation={member.designation}
              thumb={member.thumb}
              socials={member.socials}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
