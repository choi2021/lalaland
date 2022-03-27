import React from "react";
import {
  FaThumbsUp,
  FaHandPointLeft,
  FaRegLaughSquint,
  FaRegTrashAlt,
} from "react-icons/fa";
import styles from "./todo.module.css";

const Todo = ({ text, type }) => {
  return (
    <li className={styles.container}>
      <p className={styles.text}>{text}</p>
      {type === "Pending" && (
        <div className={styles.btns}>
          <button className={styles.btn}>
            <FaRegTrashAlt></FaRegTrashAlt>
          </button>
          <button className={styles.btn}>
            <FaThumbsUp></FaThumbsUp>
          </button>
        </div>
      )}
      {type === "Finished" && (
        <div className={styles.btns}>
          <button className={styles.btn}>
            <FaHandPointLeft></FaHandPointLeft>
          </button>
          <button className={styles.btn}>
            <FaRegLaughSquint></FaRegLaughSquint>
          </button>
        </div>
      )}
    </li>
  );
};
export default Todo;
