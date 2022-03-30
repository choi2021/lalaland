import React from "react";
import styles from "./music.module.css";
import {
  FaRedoAlt,
  FaStepBackward,
  FaStepForward,
  FaStop,
  FaPlay,
} from "react-icons/fa";

const Music = ({ music }) => {
  return (
    <section className={styles.container}>
      <div></div>
      <div className={styles.btns}>
        <button className={styles.btn}>
          <FaRedoAlt />
        </button>
        <button className={styles.btn}>
          <FaStepBackward />
        </button>
        <button className={styles.btn}>
          <FaPlay />
          <FaStop />
        </button>
        <button className={styles.btn}>
          <FaStepForward></FaStepForward>
        </button>
        <button className={styles.btn}></button>
      </div>
    </section>
  );
};

export default Music;
