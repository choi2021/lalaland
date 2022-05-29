import styles from './home.module.css';
import { useCallback, useEffect, useState } from 'react';
import TodoContainer from '../../component/todoContainer/todoContainer';
import Sidebar from '../../component/sidebar/sidebar';
import playlist from '../../playlist.json';
import '../../font/font.css';
import Header from '../../component/header/header';
import Links from '../../component/links/links';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';

function Home({ weatherService, todoDB, user, onLogin }) {
  const [pendingTodos, setPendingTodos] = useState([]);
  const [finishedTodos, setFinishedTodos] = useState([]);
  const [musics, setMusics] = useState([]);
  const [selectedMusic, setSelectedMusic] = useState({});
  const [trackIndex, setTrackIndex] = useState(0);
  const [onPopup, setOnPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const musicList = playlist.musics.map((item) => {
      return {
        ...item,
        address: `${process.env.PUBLIC_URL}/music${item.address}`,
      };
    });
    setMusics(musicList);
    setSelectedMusic(musicList[0]);
  }, []);

  useEffect(() => {
    if (onLogin) {
      setOnPopup(true);
      setTimeout(() => setOnPopup(false), 5000);
    } else {
      navigate('/');
    }
  }, [user]);

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

  const getTodo = useCallback(
    (type) => {
      todoDB.getTodo(
        type,
        (todos) => {
          if (type === 'pending') {
            setPendingTodos(Object.values(todos));
          } else {
            setFinishedTodos(Object.values(todos));
          }
        },
        user?.uid
      );
    },
    [todoDB, user]
  );

  const deleteTodo = useCallback(
    (todo, type) => {
      if (type === 'pending') {
        setPendingTodos((todos) => todos.filter((item) => item.id !== todo.id));
        todoDB.deleteTodo(todo, type, user?.uid);
      } else {
        setFinishedTodos((todos) =>
          todos.filter((item) => item.id !== todo.id)
        );
        todoDB.deleteTodo(todo, type, user?.uid);
      }
    },
    [todoDB, user?.uid]
  );

  const addTodo = (value) => {
    const obj = {
      id: Date.now(),
      text: value,
    };
    setPendingTodos((todos) => [...todos, { ...obj }]);
    todoDB.setTodo(obj, 'pending', user?.uid);
  };

  const moveTodo = useCallback(
    (todo, start) => {
      if (start === 'pending') {
        setPendingTodos((todos) => todos.filter((item) => item.id !== todo.id));
        setFinishedTodos((todos) => [...todos, { ...todo }]);
        todoDB.deleteTodo(todo, 'pending', user?.uid);
        todoDB.setTodo(todo, 'finished', user?.uid);
      } else {
        setFinishedTodos((todos) =>
          todos.filter((item) => item.id !== todo.id)
        );
        setPendingTodos((todos) => [...todos, { ...todo }]);
        todoDB.deleteTodo(todo, 'finished', user?.uid);
        todoDB.setTodo(todo, 'pending', user?.uid);
      }
    },
    [todoDB, user?.uid]
  );

  useEffect(() => {
    let isRead = true;
    if (isRead) {
      getTodo('pending');
      getTodo('finished');
    }

    return () => (isRead = false);
  }, [getTodo]);

  const signOut = () => {};

  const isSmall = useMediaQuery({ maxWidth: 800 });
  return (
    <div className={styles.home}>
      <Header
        selected={selectedMusic}
        setNextSong={setNextSong}
        setPrevSong={setPrevSong}
        shuffleMusics={shuffleMusics}
        weatherService={weatherService}
        location='home'
      ></Header>
      <div className={styles.menuAndTodo}>
        <Sidebar direction={'column'}></Sidebar>
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
      {!isSmall && <span className={styles.title}>LaLa Land</span>}
      {onPopup && !isSmall && (
        <span className={styles.popup}>Welcome {user?.displayName}</span>
      )}
      <div className={styles.links}>
        <Links />
      </div>
      <button onClick={signOut}></button>
    </div>
  );
}

export default Home;
