import styles from "./home.module.css";
import Weather from "../../component/Weather/Weather";
import Name from "../../component/name/name";
import Timer from "../../component/timer/timer";
import { useEffect, useState } from "react";
import TodoContainer from "../../component/todoContainer/todoContainer";
import Sidebar from "../../component/sidebar/sidebar";
import Music from "../../component/music/music";
import playlist from "../../playlist.json";

function Home({ weatherService, todoDB }) {
  const [pendingTodos, setPendingTodos] = useState([]);
  const [finishedTodos, setFinishedTodos] = useState([]);
  const [musics, setMusics] = useState([]);
  const [selectedMusic, setSelectedMusic] = useState({});
  const [trackIndex, setTrackIndex] = useState(0);

  useEffect(() => {
    getTodo("pending");
    getTodo("finished");
  }, []);

  useEffect(() => {
    setMusics(playlist.musics);
    setSelectedMusic(playlist.musics[0]);
  }, []);

  const shuffleMusics = () => {
    const arr = Array.from(Array(musics.length), (_, k) => k);
    let newArray = [];
    while (newArray.length < arr.length) {
      let ranNum = parseInt(Math.random() * arr.length);
      if (newArray.find((num) => num === ranNum)) {
        continue;
      }
      newArray.push(ranNum);
    }
    setMusics((prev) => {
      return newArray.map((item) => prev[item]);
    });
    setSelectedMusic(musics[0]);
  };

  const setNextSong = () => {
    setTrackIndex((curr) => {
      return curr + 1 >= musics.length ? 0 : curr + 1;
    });
    setSelectedMusic(musics[trackIndex]);
  };

  const setPrevSong = () => {
    setTrackIndex((curr) => {
      return curr - 1 < 0 ? musics.length - 1 : curr - 1;
    });
    setSelectedMusic(musics[trackIndex]);
  };

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

  console.log(musics);

  return (
    <div className={styles.home}>
      <header className={styles.header}>
        <Timer></Timer>
        <Name></Name>
        <div className={styles.musicAndWeather}>
          <Music
            selected={selectedMusic}
            setNextSong={setNextSong}
            setPrevSong={setPrevSong}
            setRandomSong={shuffleMusics}
          ></Music>
          <Weather weatherService={weatherService}></Weather>
        </div>
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
