import { FunctionComponent } from "react";
import styles from "./ComponentRoot.module.css";

const ComponentRoot: FunctionComponent = () => {
  return (
    <div className={styles.componentRoot}>
      <section className={styles.content}>
        <div className={styles.fRAMEA}>
          <div className={styles.image}>
            <img
              className={styles.imageIcon}
              loading="lazy"
              alt=""
              src="/image1@2x.png"
            />
            <div className={styles.div}>
              <div className={styles.ellipse} />
              <h1 className={styles.h1}>“</h1>
            </div>
          </div>
        </div>
        <img className={styles.lINEB} loading="lazy" alt="" />
        <div className={styles.contentWrapper}>
          <div className={styles.content1}>
            <div className={styles.name}>
              <h3 className={styles.nattasha}>Nattasha</h3>
              <div className={styles.athleticsTrainer}>Athletics /Trainer</div>
            </div>
            <div className={styles.subContent}>
              <img
                className={styles.ratingIcon}
                loading="lazy"
                alt=""
                src="/rating@2x.png"
              />
              <div
                className={styles.thereAreMany}
              >{`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour `}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComponentRoot;
