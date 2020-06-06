import React from "react";
import styles from "./Requirements.module.css";
import laptopPhoto from "../../assets/img/man-laptop-v1.svg";

const Requirements = () => {
  return (
    <div className={styles.reqPage}>
      <div className={styles.header}>
        <h2>Let's get acquainted</h2>
      </div>
      <div className={styles.columns}>
        <img src={laptopPhoto} className={styles.picture} />
        <div className={styles.text}>
          <div>
            <h3>I am cool frontend developer</h3>
          </div>
          <div>
            <div className={styles.firstParagraphs}>
              We will evaluate how clean your approach to writing CSS and
              Javacript code is. You can use any CSS and Javascript 3rd party
              libraries without any restriction.
            </div>
            <div className={styles.firstParagraphs}>
              If 3rd party css/javacript libraries are added to the project via
              bower/npm/yarn you will get bonus as well. If you use any task
              runner gulp/webpack you will get bonus points as well. Slice
              service directory page PSD mockup into HTML5/CSS
            </div>
            <a href="#" className={styles.firstParagraphs}>
              Sign up now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requirements;
