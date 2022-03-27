import React, { useRef } from "react";
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
  const handleAdd = (event) => {
    if (event.key !== "Enter") {
      return;
    }
    onAdd(inputRef.current.value);
    inputRef.current.value = ``;
  };

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <button className={styles.btn}>
          <FaListUl></FaListUl>
        </button>
        <input
          className={styles.input}
          type="text"
          placeholder="Today's ToDo"
          onKeyDown={handleAdd}
          ref={inputRef}
        />
        <button className={styles.btn}>
          <FaThumbsUp></FaThumbsUp>
        </button>
      </div>
      <TodoList
        type="Pending"
        todos={pendingTodos}
        onDelete={onDelete}
        onAdd={onAdd}
        onMove={onMove}
      />
      <TodoList
        type="Finished"
        todos={finishedTodos}
        onDelete={onDelete}
        onAdd={onAdd}
        onMove={onMove}
      />
    </section>
  );
};

export default TodoContainer;
