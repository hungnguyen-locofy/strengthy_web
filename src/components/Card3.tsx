import { FunctionComponent } from "react";
import styles from "./Card3.module.css";

const Card3: FunctionComponent = () => {
  return (
    <div className={styles.card}>
      <div className={styles.base} />
      <div className={styles.alignAssistant}>
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo@2x.png"
        />
        <img
          className={styles.icTurnedInNotIcon}
          loading="lazy"
          alt=""
          src="/ic-turned-in-not@2x.png"
        />
      </div>
      <div className={styles.seniorDeveloperOn}>Senior Developer (onsite)</div>
      <div className={styles.strokeAssistant}>
        <div className={styles.item}>
          <div className={styles.helpCenter}>
            <img
              className={styles.icDomainIcon}
              alt=""
              src="/ic-domain@2x.png"
            />
          </div>
          <div className={styles.shopee}>Shopee</div>
        </div>
        <div className={styles.item1}>
          <div className={styles.icLocationOnWrapper}>
            <img
              className={styles.icLocationOnIcon}
              alt=""
              src="/ic-location-on@2x.png"
            />
          </div>
          <div className={styles.officeSingapura}>Office: Singapura</div>
        </div>
        <div className={styles.item2}>
          <div className={styles.icWalletTravelWrapper}>
            <img
              className={styles.icWalletTravelIcon}
              alt=""
              src="/ic-wallet-travel@2x.png"
            />
          </div>
          <div className={styles.fullTime}>Full-time</div>
        </div>
      </div>
    </div>
  );
};

export default Card3;
