import React, { useState } from "react";
import styles from "./menulist.module.css";

const Menulist = ({ isClicked }) => {
  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.bar} ${
          isClicked ? styles.active : styles.inactive
        }`}
      ></div>
      <ul className={styles.list}>
        <li
          className={`${styles.item} ${
            isClicked ? styles.firstRowIn : styles.firstRowOut
          }`}
        >
          Home
        </li>
        <li
          className={`${styles.item}  ${
            isClicked ? styles.secondRowIn : styles.secondRowOut
          }`}
        >
          Videos
        </li>
        <li
          className={`${styles.item}  ${
            isClicked ? styles.thirdRowIn : styles.thirdRowOut
          }`}
        >
          Photos
        </li>
      </ul>
    </div>
  );
};

export default Menulist;
