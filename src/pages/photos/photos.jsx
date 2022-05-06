import React, { useEffect, useState } from "react";
import Header from "../../component/header/header";
import Sidebar from "../../component/sidebar/sidebar";
import styles from "./photos.module.css";
import photos from "../../photos.json";
import Slider from "../../component/slider/slider";

const Photos = ({ weatherService }) => {
  const [scenePhotos, setScenePhotos] = useState([]);
  const [illustPhotos, setillustPhotos] = useState([]);

  useEffect(() => {
    setScenePhotos(photos.scene);
    setillustPhotos(photos.illust);
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.bg}></div>
      <header className={styles.header}>
        <Header weatherService={weatherService} location=""></Header>
      </header>
      <main className={styles.main}>
        <div className={styles.menu}>
          <Sidebar></Sidebar>
        </div>
        <div className={styles.sliders}>
          <Slider photoArr={scenePhotos && scenePhotos}></Slider>
          <Slider photoArr={illustPhotos && illustPhotos}></Slider>
        </div>
      </main>
    </section>
  );
};

export default Photos;
