import { FunctionComponent } from "react";
import styles from "./Header.module.css";

const Header: FunctionComponent = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <div className={styles.logo}>
          <div className={styles.menuComponentParent}>
            <div className={styles.menuComponent} />
            <div className={styles.logo1}>
              <div className={styles.f}>F</div>
              <div className={styles.f1}>F</div>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
              <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
              <img
                className={styles.vectorIcon3}
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
              <img className={styles.vectorIcon4} alt="" src="/vector3.svg" />
            </div>
          </div>
          <div className={styles.strengthyWrapper}>
            <h3 className={styles.strengthy}>Strengthy</h3>
          </div>
        </div>
      </div>
      <div className={styles.menuContent}>
        <div className={styles.aboutWrapper}>
          <div className={styles.about}>About</div>
        </div>
        <div className={styles.footerComponent}>
          <div className={styles.menu}>
            <div className={styles.home}>Home</div>
          </div>
        </div>
        <div className={styles.trainersWrapper}>
          <div className={styles.trainers}>Trainers</div>
        </div>
        <div className={styles.classesWrapper}>
          <div className={styles.classes}>Classes</div>
        </div>
        <div className={styles.contactWrapper}>
          <div className={styles.contact}>Contact</div>
        </div>
        <div className={styles.newssWrapper}>
          <div className={styles.newss}>Newss</div>
        </div>
        <div className={styles.button}>
          <div className={styles.bookClass}>Book Class</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
