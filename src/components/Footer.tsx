import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

const Footer: FunctionComponent = () => {
  return (
    <section className={styles.footer}>
      <footer className={styles.subContent}>
        <img className={styles.backgroundIcon} alt="" src="/background.svg" />
        <div className={styles.subContent1}>
          <div className={styles.div}>
            <div className={styles.content}>
              <div className={styles.logo}>
                <button className={styles.icon}>
                  <div className={styles.utilityPagesLink} />
                  <div className={styles.logo1}>
                    <div className={styles.f}>F</div>
                    <div className={styles.f1}>F</div>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className={styles.vectorIcon1}
                      alt=""
                      src="/vector1.svg"
                    />
                    <img
                      className={styles.vectorIcon2}
                      alt=""
                      src="/vector2.svg"
                    />
                    <img
                      className={styles.passwordProtectedPage}
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className={styles.vectorIcon3}
                      alt=""
                      src="/vector3.svg"
                    />
                  </div>
                </button>
                <div className={styles.strengthyWrapper}>
                  <h3 className={styles.strengthy}>Strengthy</h3>
                </div>
              </div>
              <div className={styles.itIsA}>
                It is a long established fact that a reader will be distracted
                by the readable.
              </div>
            </div>
            <div className={styles.callAndMail}>
              <div className={styles.call01234Container}>
                <p className={styles.call}>
                  <span className={styles.call1}>
                    <span className={styles.call2}>Call :</span>
                  </span>
                </p>
                <p className={styles.p}>
                  <span className={styles.span}>
                    <span className={styles.span1}>01234 987654</span>
                  </span>
                </p>
                <p className={styles.p1}>
                  <span className={styles.span2}>
                    <span className={styles.span3}>098765 34621</span>
                  </span>
                </p>
                <p className={styles.blankLine}>
                  <span className={styles.blankLine1}>
                    <span className={styles.blankLine2}>&nbsp;</span>
                  </span>
                </p>
                <p className={styles.mail}>
                  <span className={styles.mail1}>
                    <span className={styles.mail2}>Mail :</span>
                    <span className={styles.span4}>{` `}</span>
                  </span>
                </p>
                <p className={styles.contactfitnessfitcom}>
                  <span className={styles.contactfitnessfitcom1}>
                    contact@fitnessfit.com
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.div1}>
            <b className={styles.utilityPages}>Utility Pages</b>
            <div className={styles.styleGuideChangelogContainer}>
              <p className={styles.styleGuide}>Style Guide</p>
              <p className={styles.changelog}>Changelog</p>
              <p className={styles.page}>404 Page</p>
              <p className={styles.passwordProtected}>Password Protected</p>
              <p className={styles.licenses}>Licenses</p>
              <p className={styles.contact}>Contact</p>
            </div>
          </div>
          <div className={styles.div2}>
            <div className={styles.div3}>
              <b className={styles.newsletter}>Newsletter</b>
              <div className={styles.content1}>
                <div className={styles.button}>
                  <div className={styles.mail3}>
                    <div className={styles.background} />
                    <input
                      className={styles.enterYourEmail}
                      placeholder="Enter Your Email"
                      type="text"
                    />
                  </div>
                  <button className={styles.button1}>
                    <div className={styles.subscribe}>Subscribe</div>
                  </button>
                </div>
                <div className={styles.socialMedia}>
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
                  <div className={styles.instaFbContainer}>
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
            <div className={styles.top}>
              <div className={styles.lineWrapper}>
                <div className={styles.line} />
              </div>
              <img
                className={styles.upArrowIcon}
                loading="lazy"
                alt=""
                src="/up-arrow.svg"
              />
            </div>
          </div>
        </div>
      </footer>
      <div className={styles.contentContainer}>
        <div className={styles.copyright}>
          <div className={styles.copyrightFitnessfitContainer}>
            <span className={styles.copyright1}>{`Copyright © `}</span>
            <b className={styles.fitnessfit}>{`FitnessFit `}</b>
            <span
              className={styles.designedByvictorflowTemplate}
            >{`| Designed byVictorFlow Templates - Powered by Webflow `}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
