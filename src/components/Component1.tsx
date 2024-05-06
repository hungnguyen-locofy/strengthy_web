import { FunctionComponent } from "react";
import styles from "./Component1.module.css";

type Component1Type = {
  image: string;
  date: string;
  title: number;
  avatar: string;
  name: string;
};
const Component1: FunctionComponent<Component1Type> = ({
  image,
  date,
  title,
  avatar,
  name,
}) => {
  return (
    <div className={styles.div}>
      <section className={styles.content}>
        <img className={styles.imageIcon} loading="lazy" alt="" src={image} />
        <div className={styles.content1}>
          <div className={styles.date}>
            <div className={styles.march222022}>{date}</div>
            <div className={styles.tag}>
              <div className={styles.tagChild} />
              <div className={styles.tagItem} />
              <div className={styles.fitness}>Fitness</div>
              <div className={styles.health}>Health</div>
            </div>
          </div>
          <h3 className={styles.the10BestContainer}>
            <p className={styles.the10Best}>{title}</p>
          </h3>
          <div className={styles.bloger}>
            <img
              className={styles.imageIcon1}
              loading="lazy"
              alt=""
              src={avatar}
            />
            <div className={styles.jacobCornishWrapper}>
              <div className={styles.jacobCornish}>{name}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Component1;
