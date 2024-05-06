import { FunctionComponent } from "react";
import styles from "./Component.module.css";

type ComponentType = {
  image: string;
  name: string;
  ratting: number;
  facebook: string;
  insta: string;
  twitter: string;
  skills: string;
};
const Component: FunctionComponent<ComponentType> = ({
  image,
  name,
  ratting = 5,
  facebook,
  twitter,
  skills,
}) => {
  return (
    <div className={styles.div}>
      <img className={styles.imageIcon} alt="" src={image} />
      <section className={styles.details}>
        <div className={styles.content}>
          <div className={styles.name}>
            <div className={styles.madisonFroning}>{name}</div>
            <div className={styles.starWrapper}>
              <div className={styles.star}>
                <div className={styles.highlightedStar}>
                  <img
                    className={styles.starIcon}
                    loading="lazy"
                    alt=""
                    src="/star.svg"
                  />
                </div>
                <div className={styles.socialMediaIcons}>/{ratting}</div>
              </div>
            </div>
          </div>
          <div className={styles.additionalContent} />
          <div className={styles.content1}>
            <div className={styles.specilitis}>
              <b className={styles.specialisations}>Specialisations :</b>
              <div className={styles.crossfitExpoortNutrition}>{skills}</div>
            </div>
            <div className={styles.socialIcon}>
              <img
                className={styles.instaIcon}
                loading="lazy"
                alt=""
                src="/insta.svg"
              />
              <img
                className={styles.fbIcon}
                loading="lazy"
                alt=""
                src="/fb.svg"
              />
              <div className={styles.twiterWrapper}>
                <img
                  className={styles.twiterIcon}
                  loading="lazy"
                  alt=""
                  src="/twiter.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Component;
