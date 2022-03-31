import React, { useRef, useState } from "react";
import TodoList from "../todoList/todoList";
import { FaThumbsUp, FaListUl } from "react-icons/fa";
import styles from "./todoContainer.module.css";

const TodoContainer = ({
  pendingTodos,
  finishedTodos,
  onDelete,
  onAdd,
  onMove,
}) => {
  const inputRef = useRef();
  const [onBtn, setOnBtn] = useState({
    pending: false,
    finished: false,
  });

  const handleAdd = (event) => {
    if (event.key !== "Enter") {
      return;
    }
    onAdd(inputRef.current.value);
    inputRef.current.value = ``;
  };

  const onBtnClick = (e) => {
    const value = e.currentTarget.dataset.value;
    setOnBtn((currObj) => {
      return { ...currObj, [value]: !currObj[value] };
    });
  };

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <button
          className={`${styles.btn} ${activateBtn(onBtn.pending)}`}
          data-value="pending"
          onClick={onBtnClick}
        >
          <FaListUl></FaListUl>
        </button>
        <input
          className={styles.input}
          type="text"
          placeholder="Today's ToDo"
          onKeyDown={handleAdd}
          ref={inputRef}
        />
        <button
          data-value="finished"
          className={`${styles.btn} ${activateBtn(onBtn.finished)}`}
          onClick={onBtnClick}
        >
          <FaThumbsUp></FaThumbsUp>
        </button>
      </div>
      <TodoList
        type="pending"
        todos={pendingTodos}
        onDelete={onDelete}
        onAdd={onAdd}
        onMove={onMove}
        onList={onBtn.pending}
      />
      <TodoList
        type="finished"
        todos={finishedTodos}
        onDelete={onDelete}
        onAdd={onAdd}
        onMove={onMove}
        onList={onBtn.finished}
      />
    </section>
  );
};

function activateBtn(onBtn) {
  if (!onBtn) {
    return;
  } else {
    return styles.active;
  }
}

export default TodoContainer;
