import React, { useEffect, useState } from 'react';
import Sidebar from '../../component/sidebar/sidebar';
import styles from './photos.module.css';
import photos from '../../photos.json';
import Slider from '../../component/slider/slider';
import { useNavigate } from 'react-router-dom';

const Photos = ({ onLogin }) => {
  const [scenePhotos, setScenePhotos] = useState([]);
  const [illustPhotos, setillustPhotos] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    !onLogin && navigate('/');
  }, []);

  useEffect(() => {
    setScenePhotos(photos.scene);
    setillustPhotos(photos.illust);
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.bg}></div>
      <header className={styles.header}>
        <Sidebar direction={'row'}></Sidebar>
      </header>
      <main className={styles.main}>
        <div className={styles.sliders}>
          <Slider photoArr={scenePhotos && scenePhotos} slow></Slider>
          <Slider photoArr={illustPhotos && illustPhotos}></Slider>
        </div>
      </main>
    </section>
  );
};

export default Photos;
