import React from "react";
import styles from "./menulist.module.css";

const Menulist = ({ isClicked }) => {
  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.bar}`}></div>
      <ul className={styles.list}>
        <li className={`${styles.item}`}>Home</li>
        <li className={`${styles.item}`}>Videos</li>
        <li className={`${styles.item}`}>Photos</li>
      </ul>
    </div>
  );
};

export default Menulist;
