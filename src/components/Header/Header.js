import React from "react";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.menu}>
        <Menu />
      </div>
    </div>
  );
};

export default Header;
