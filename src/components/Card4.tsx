import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Card4.module.css";

export type Card4Type = {
  image?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
};

const Card4: FunctionComponent<Card4Type> = ({ image, propTop, propLeft }) => {
  const card1Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className={styles.card1} style={card1Style}>
      <img className={styles.imageIcon} loading="lazy" alt="" src={image} />
      <div className={styles.content}>
        <h2 className={styles.artemDigital}>
          Artem - Digital Marketing campaign
        </h2>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod
        </div>
      </div>
    </div>
  );
};

export default Card4;
