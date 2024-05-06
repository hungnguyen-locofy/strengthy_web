import { FunctionComponent } from "react";
import styles from "./Card1.module.css";

type Props = {
  className?: string;
};

const Card1: FunctionComponent<Props> = ({ className }) => {
  return (
    <div className={`${styles.card1} ${className}`}>
      <img
        className={styles.imageIcon}
        loading="lazy"
        alt=""
        src="/image-1@2x.png"
      />
      <div className={styles.text}>
        <h1 className={styles.yogaAsTherapy}>Yoga As Therapy</h1>
        <h3
          className={styles.containingLoremIpsum}
        >{`containing Lorem Ipsum passagesand more recently with `}</h3>
        <div className={styles.button}>
          <h3 className={styles.readMore}>Read More</h3>
        </div>
      </div>
    </div>
  );
};

export default Card1;
