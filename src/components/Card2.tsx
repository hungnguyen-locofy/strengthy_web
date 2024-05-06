import { FunctionComponent } from "react";
import styles from "./Card2.module.css";
import classnames from "classnames";

type Props = {
  className?: string;
};

const Card2: FunctionComponent<Props> = ({ className }) => {
  return (
    <div className={classnames(styles.card, className)}>
      <div className={styles.base} />
      <div className={styles.inputFilterWrapper}>
        <div className={styles.inputFilter}>
          <button className={styles.logo}>
            <div className={styles.shape} />
            <img className={styles.bitmapIcon} alt="" src="/bitmap@2x.png" />
          </button>
          <div className={styles.functionCall}>
            <div className={styles.variableAssignment}>
              <div className={styles.tokopedia}>Tokopedia</div>
              <button className={styles.rating}>
                <div className={styles.base1} />
                <img className={styles.icStarIcon} alt="" src="/ic-star.svg" />
                <div className={styles.dataProcessor}>4.8</div>
              </button>
            </div>
            <div className={styles.item}>
              <div className={styles.priorityQueue}>
                <img
                  className={styles.icLocationOnIcon}
                  loading="lazy"
                  alt=""
                  src="/ic-location-on@2x.png"
                />
              </div>
              <div className={styles.jakartaIndonesia}>Jakarta, Indonesia</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.recursiveFunction}>
        <div className={styles.line} />
        <div className={styles.logicalOperatorWrapper}>
          <div className={styles.logicalOperator}>
            <div className={styles.item1}>
              <div className={styles.k}>7k</div>
              <div className={styles.reviews}>Reviews</div>
            </div>
            <div className={styles.triangularLayout}>
              <div className={styles.item2}>
                <div className={styles.div}>32</div>
                <div className={styles.jobs}>Jobs</div>
              </div>
            </div>
            <div className={styles.triangularLayout1}>
              <div className={styles.item3}>
                <div className={styles.div1}>300+</div>
                <div className={styles.employees}>Employees</div>
              </div>
            </div>
            <button className={styles.button}>
              <div className={styles.base2} />
              <div className={styles.text}>
                <div className={styles.follow}>Follow</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
