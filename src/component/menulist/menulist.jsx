import React, { useState } from "react";
import { Link } from "react-router-dom";
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
          <Link to={"/"}>Home</Link>
        </li>
        <li
          className={`${styles.item}  ${
            isClicked ? styles.secondRowIn : styles.secondRowOut
          }`}
        >
          <Link to={"/videos"}>Videos</Link>
        </li>
        <li
          className={`${styles.item}  ${
            isClicked ? styles.thirdRowIn : styles.thirdRowOut
          }`}
        >
          <Link to={"/photos"}>Photos</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menulist;
