import React from "react";
import Todo from "../todo/todo";
import styles from "./todoList.module.css";
const TodoList = ({ type, todos, onDelete, onAdd, onMove }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{type.toUpperCase()}</h1>
      <ul className={styles.list}>
        {todos.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            type={type}
            onDelete={onDelete}
            onAdd={onAdd}
            onMove={onMove}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
