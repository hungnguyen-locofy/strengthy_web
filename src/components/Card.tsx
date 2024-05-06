import { FunctionComponent } from "react";
import styles from "./Card.module.css";

type Props = {
  className?: string;
};

const Card: FunctionComponent<Props> = ({ className = "" }) => {
  return (
    <div className={[styles.card1, className].join(" ")}>
      <img
        className={styles.imageIcon}
        loading="lazy"
        alt=""
        src="/image-4@2x.png"
      />
      <div className={styles.content}>
        <h2 className={styles.artemDigital}>
          Artem - Digital Marketing campaign
        </h2>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod
        </div>
      </div>
    </div>
  );
};

export default Card;
