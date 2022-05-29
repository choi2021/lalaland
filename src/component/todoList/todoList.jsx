import React, { memo } from 'react';
import Todo from '../todo/todo';
import styles from './todoList.module.css';
const TodoList = memo(({ type, todos, onDelete, onAdd, onMove, onList }) => {
  return (
    <div className={`${styles.container} ${activateList(onList)}`}>
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
});

function activateList(onBtn) {
  if (!onBtn) {
    return;
  } else {
    return styles.active;
  }
}

export default TodoList;
