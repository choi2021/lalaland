import React, { useEffect, useState } from "react";
import Header from "../../component/header/header";
import Sidebar from "../../component/sidebar/sidebar";
import styles from "./videos.module.css";

const Videos = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    youtube.search().then((items) => setVideos(items));
  }, []);

  return (
    <div className={styles.home}>
      <Header></Header>
      <div className={styles.main}>
        <Sidebar></Sidebar>
      </div>
      <ul>
        {videos.map((video) => (
          <li key={video.etag}>{video.snippet.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Videos;
