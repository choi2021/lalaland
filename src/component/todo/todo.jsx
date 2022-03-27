import React from "react";
import {
  FaThumbsUp,
  FaHandPointLeft,
  FaRegLaughSquint,
  FaRegTrashAlt,
} from "react-icons/fa";
import styles from "./todo.module.css";

const Todo = ({ type, onDelete, onMove, todo }) => {
  const handleDelete = () => {
    onDelete(todo, type);
  };
  const handleMove = () => {
    onMove(todo, type);
  };

  return (
    <li className={styles.container}>
      <p className={styles.text}>{todo.text}</p>
      {type === "Pending" && (
        <div className={styles.btns}>
          <button className={styles.btn} onClick={handleDelete}>
            <FaRegTrashAlt></FaRegTrashAlt>
          </button>
          <button className={styles.btn} onClick={handleMove}>
            <FaThumbsUp></FaThumbsUp>
          </button>
        </div>
      )}
      {type === "Finished" && (
        <div className={styles.btns}>
          <button className={styles.btn} onClick={handleMove}>
            <FaHandPointLeft></FaHandPointLeft>
          </button>
          <button className={styles.btn} onClick={handleDelete}>
            <FaRegLaughSquint></FaRegLaughSquint>
          </button>
        </div>
      )}
    </li>
  );
};
export default Todo;
