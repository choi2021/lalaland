import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../component/header/header';
import Sidebar from '../../component/sidebar/sidebar';
import Video from '../../component/video/video';
import styles from './videos.module.css';

const Videos = ({ youtube, weatherService, onLogin }) => {
  const defaultRef = useRef();
  const ostRef = useRef();
  const makingRef = useRef();
  const sceneRef = useRef();
  const [topic, setTopic] = useState('lalaland ');
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    !onLogin && navigate('/');
  }, []);
  useEffect(() => {
    youtube.search(topic).then((items) => {
      setVideos(items);
      setIsLoading(false);
    });
  }, [topic, youtube]);
  const handleBtnClick = (event) => {
    const q = event.currentTarget.dataset.value;
    setTopic(`lalaland ${q}`);
  };

  return (
    <section className={styles.videos}>
      <div className={styles.bg}></div>
      <header className={styles.header}>
        <div className={styles.timer}>
          <Header weatherService={weatherService} location='videos'></Header>
        </div>
        <div className={styles.btns}>
          <button
            data-value={''}
            className={`${styles.btn} ${
              topic === 'lalaland ' ? styles.active : null
            }`}
            ref={defaultRef}
            onClick={handleBtnClick}
          >
            All
          </button>
          <button
            data-value={'OST'}
            className={`${styles.btn} ${
              topic === 'lalaland OST' ? styles.active : null
            }`}
            ref={ostRef}
            onClick={handleBtnClick}
          >
            OST
          </button>
          <button
            data-value={'Making'}
            className={`${styles.btn} ${
              topic === 'lalaland Making' ? styles.active : null
            }`}
            ref={makingRef}
            onClick={handleBtnClick}
          >
            Making
          </button>
          <button
            data-value={'Scene'}
            className={`${styles.btn} ${
              topic === 'lalaland Scene' ? styles.active : null
            }`}
            ref={sceneRef}
            onClick={handleBtnClick}
          >
            Famous Scene
          </button>
        </div>
      </header>
      <div className={styles.menu}>
        <Sidebar direction={'column'}></Sidebar>
      </div>
      <main className={styles.main}>
        {isLoading ? (
          <div className={styles.loading}></div>
        ) : (
          <>
            <ul className={styles.list}>
              {videos.map((video) => (
                <Video
                  id={video.id}
                  key={video.id}
                  imgInfo={video.snippet.thumbnails}
                  title={video.snippet.title}
                >
                  {video.snippet.title}
                </Video>
              ))}
            </ul>
          </>
        )}
      </main>
    </section>
  );
};

export default Videos;
