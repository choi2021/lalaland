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

  console.log(videos);

  return (
    <div className={styles.videos}>
      <Header weatherService={weatherService} location="videos"></Header>
      <div className={styles.main}>
        <Sidebar></Sidebar>
        <ul>
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
