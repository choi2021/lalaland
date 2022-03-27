import styles from "./App.module.css";
import Weather from "./component/Weather/Weather";
import Name from "./component/name/name";
import Timer from "./component/timer/timer";
import TodoList from "./component/todoList/todoList";
import { useState } from "react";
import TodoContainer from "./component/todoContainer/todoContainer";

function App({ weatherService, todoDB }) {
  const [pendingTodos, setPendingTodos] = useState([]);
  const [finishedTodos, setFinishedTodos] = useState([]);

  const deleteTodo = (todo, type) => {
    if (type === "Pending") {
      setPendingTodos((todos) => todos.filter((item) => item.id !== todo.id));
    } else {
      setFinishedTodos((todos) => todos.filter((item) => item.id !== todo.id));
    }
  };

  const addTodo = (value) => {
    setPendingTodos((todos) => [...todos, { id: Date.now(), text: value }]);
  };

  const moveTodo = (todo, start) => {
    if (start === "Pending") {
      setPendingTodos((todos) => todos.filter((item) => item.id !== todo.id));
      setFinishedTodos((todos) => [...todos, { ...todo }]);
    } else {
      setFinishedTodos((todos) => todos.filter((item) => item.id !== todo.id));
      setPendingTodos((todos) => [...todos, { ...todo }]);
    }
  };

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <Timer></Timer>
        <Name></Name>
        <Weather weatherService={weatherService}></Weather>
      </header>
      <div>
        <TodoContainer
          pendingTodos={pendingTodos}
          finishedTodos={finishedTodos}
          onDelete={deleteTodo}
          onAdd={addTodo}
          onMove={moveTodo}
        ></TodoContainer>
      </div>
    </div>
  );
}

export default App;
