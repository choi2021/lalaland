import React, { useEffect, useRef, useState } from "react";
import Header from "../../component/header/header";
import Sidebar from "../../component/sidebar/sidebar";
import Video from "../../component/video/video";
import styles from "./videos.module.css";

const Videos = ({ youtube, weatherService }) => {
  const defaultRef = useRef();
  const ostRef = useRef();
  const makingRef = useRef();
  const sceneRef = useRef();
  const [topic, setTopic] = useState("lalaland");
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    youtube.search(topic).then((items) => {
      setVideos(items);
      setIsLoading(false);
    });
  }, [topic]);

  const handleBtnClick = (event) => {
    const q = event.currentTarget.dataset.value;
    setTopic("lalaland" + " " + q);
  };

  return (
    <div className={styles.videos}>
      <div className={styles.bg}></div>
      <div className={styles.header}>
        <Header weatherService={weatherService} location="videos"></Header>
        <div className={styles.btns}>
          <button
            data-value={""}
            className={`${styles.btn} ${
              topic === "lalaland " ? styles.active : null
            }`}
            ref={defaultRef}
            onClick={handleBtnClick}
          >
            All
          </button>
          <button
            data-value={"OST"}
            className={`${styles.btn} ${
              topic === "lalaland OST" ? styles.active : null
            }`}
            ref={ostRef}
            onClick={handleBtnClick}
          >
            OST
          </button>
          <button
            data-value={"Making"}
            className={`${styles.btn} ${
              topic === "lalaland Making" ? styles.active : null
            }`}
            ref={makingRef}
            onClick={handleBtnClick}
          >
            Making
          </button>
          <button
            data-value={"Scene"}
            className={`${styles.btn} ${
              topic === "lalaland Scene" ? styles.active : null
            }`}
            ref={sceneRef}
            onClick={handleBtnClick}
          >
            FAMOUS SCENE
          </button>
        </div>
      </div>
      <div className={styles.menu}>
        <Sidebar></Sidebar>
      </div>
      <div className={styles.main}>
        {isLoading ? (
          <div className={styles.loading}> Loading videos... 😅</div>
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
      </div>
    </div>
  );
};

export default Videos;
