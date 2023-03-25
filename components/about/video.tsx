import { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import styles from "../../styles/About.module.css";

const Video = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <ModalVideo
        channel={"youtube"}
        videoId={"L61p2uyiMSo"}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />

      <div id={styles.videoContainer}>
        <img
          id={styles.videoThumb}
          src={"./images/img1.jpg"}
          alt="video thumb"
        />
        <button id={styles.videoPlayButton} onClick={() => openModal()}>
          <i className={`fa fa-play ${styles.playIcon}`} />
        </button>
      </div>
    </div>
  );
};

export default Video;
