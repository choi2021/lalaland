import React from 'react';
import {
  FaThumbsUp,
  FaRegHandPointUp,
  FaCheck,
  FaRegTrashAlt,
} from 'react-icons/fa';
import styles from './todo.module.css';

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
      {type === 'pending' && (
        <div className={styles.btns}>
          <button className={styles.btn} onClick={handleDelete}>
            <FaRegTrashAlt></FaRegTrashAlt>
          </button>
          <button className={styles.btn} onClick={handleMove}>
            <FaThumbsUp></FaThumbsUp>
          </button>
        </div>
      )}
      {type === 'finished' && (
        <div className={styles.btns}>
          <button className={styles.btn} onClick={handleMove}>
            <FaRegHandPointUp></FaRegHandPointUp>
          </button>
          <button className={styles.btn} onClick={handleDelete}>
            <FaCheck></FaCheck>
          </button>
        </div>
      )}
    </li>
  );
};
export default React.memo(Todo);
