import styles from "./App.module.css";
import Weather from "./component/Weather/Weather";
import Name from "./component/name/name";
import Timer from "./component/timer/timer";
import TodoList from "./component/todoList/todoList";
import { useState } from "react";

function App({ weatherService }) {
  const [pendingTodos, setPendingTodos] = useState([
    {
      id: 1,
      text: "hi",
    },
    {
      id: 2,
      text: "hi",
    },
    {
      id: 3,
      text: "hi",
    },
  ]);
  const [finishedTodos, setfinishedTodos] = useState([
    {
      id: 1,
      text: "hi",
    },
    {
      id: 2,
      text: "hi",
    },
    {
      id: 3,
      text: "hi",
    },
  ]);

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <Timer></Timer>
        <Name></Name>
        <Weather weatherService={weatherService}></Weather>
      </header>
      <div>
        <TodoList type="Pending" todos={pendingTodos} />
        <TodoList type="Finished" todos={finishedTodos} />
      </div>
    </div>
  );
}

export default App;
