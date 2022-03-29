import styles from "./home.module.css";
import Weather from "../../component/Weather/Weather";
import Name from "../../component/name/name";
import Timer from "../../component/timer/timer";
import { useEffect, useState } from "react";
import TodoContainer from "../../component/todoContainer/todoContainer";
import Sidebar from "../../component/sidebar/sidebar";

function Home({ weatherService, todoDB }) {
  const [pendingTodos, setPendingTodos] = useState([]);
  const [finishedTodos, setFinishedTodos] = useState([]);

  useEffect(() => {
    getTodo("pending");
    getTodo("finished");
  }, []);

  const getTodo = (type) => {
    todoDB.getTodo(type, (todos) => {
      if (type === "pending") {
        setPendingTodos(Object.values(todos));
      } else {
        setFinishedTodos(Object.values(todos));
      }
    });
  };

  const deleteTodo = (todo, type) => {
    if (type === "pending") {
      setPendingTodos((todos) => todos.filter((item) => item.id !== todo.id));
      todoDB.deleteTodo(todo, type);
    } else {
      setFinishedTodos((todos) => todos.filter((item) => item.id !== todo.id));
      todoDB.deleteTodo(todo, type);
    }
  };

  const addTodo = (value) => {
    const obj = {
      id: Date.now(),
      text: value,
    };
    setPendingTodos((todos) => [...todos, { ...obj }]);
    todoDB.setTodo(obj, "pending");
  };

  const moveTodo = (todo, start) => {
    if (start === "pending") {
      setPendingTodos((todos) => todos.filter((item) => item.id !== todo.id));
      setFinishedTodos((todos) => [...todos, { ...todo }]);
      todoDB.deleteTodo(todo, "pending");
      todoDB.setTodo(todo, "finished");
    } else {
      setFinishedTodos((todos) => todos.filter((item) => item.id !== todo.id));
      setPendingTodos((todos) => [...todos, { ...todo }]);
      todoDB.deleteTodo(todo, "finished");
      todoDB.setTodo(todo, "pending");
    }
  };

  return (
    <div className={styles.home}>
      <header className={styles.header}>
        <Timer></Timer>
        <Name></Name>
        <Weather weatherService={weatherService}></Weather>
      </header>
      <div className={styles.menuAndTodo}>
        <Sidebar></Sidebar>
        <div className={styles.todo}>
          <TodoContainer
            pendingTodos={pendingTodos}
            finishedTodos={finishedTodos}
            onDelete={deleteTodo}
            onAdd={addTodo}
            onMove={moveTodo}
          ></TodoContainer>
        </div>
      </div>
    </div>
  );
}

export default Home;
