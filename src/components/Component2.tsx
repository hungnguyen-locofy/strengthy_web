import { FunctionComponent } from "react";
import styles from "./Component2.module.css";

type Component2Type = {
  image: string;
  title: number;
  content: string;
};
const Component2: FunctionComponent<Component2Type> = ({
  image,
  title,
  content,
}) => {
  return (
    <div className={styles.div}>
      <img className={styles.imageIcon} alt="" src={image} />
      <section className={styles.text}>
        <h3 className={styles.pilatesTraining}>{title}</h3>
        <div className={styles.containingLoremIpsum}>{content}</div>
        <div className={styles.button}>
          <div className={styles.readMore}>Read More</div>
        </div>
      </section>
    </div>
  );
};

export default Component2;
