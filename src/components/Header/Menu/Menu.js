import React from "react";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.item}>
        <a href="#">About me</a>
      </div>
      <div className={styles.item}>
        <a href="#">Relationships</a>
      </div>
      <div className={styles.item}>
        <a href="#">Requirements</a>
      </div>
      <div className={styles.item}>
        <a href="#">Users</a>
      </div>
      <div className={styles.item}>
        <a href="#">Sign Up</a>
      </div>
    </nav>
  );
};

export default Menu;
