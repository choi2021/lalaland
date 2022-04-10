import React, { useEffect, useState } from "react";
import Header from "../../component/header/header";
import Sidebar from "../../component/sidebar/sidebar";
import Video from "../../component/video/video";
import styles from "./videos.module.css";

const Videos = ({ youtube, weatherService }) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    youtube.search().then((items) => setVideos(items));
  }, []);

  return (
    <div className={styles.videos}>
      <div className={styles.bg}></div>
      <div className={styles.header}>
        <Header weatherService={weatherService} location="videos"></Header>
      </div>
      <div className={styles.main}>
        <div className={styles.menu}>
          <Sidebar></Sidebar>
        </div>
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
      </div>
    </div>
  );
};

export default Videos;
