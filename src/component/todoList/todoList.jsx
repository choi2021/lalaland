import React from "react";
import Todo from "../todo/todo";
import styles from "./todoList.module.css";
const TodoList = ({ type, todos }) => {
  return (
    <section>
      <h1>{type.toUpperCase()}</h1>
      <ul className={styles.container}>
        {todos.map((item) => (
          <Todo {...item} key={item.id} type={type} />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
