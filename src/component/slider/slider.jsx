import React, { memo } from 'react';
import styles from './slider.module.css';

const Slider = memo(({ photoArr, slow }) => {
  return (
    <ul className={`${styles.container} ${slow && styles.delayed}`}>
      {photoArr.map((photo) => (
        <li key={photo.id} className={styles.item}>
          <img
            className={styles.img}
            src={`${process.env.PUBLIC_URL}/img/${photo.address}`}
            alt={`${slow ? '영화사진' : '일러스트'}`}
          />
        </li>
      ))}
    </ul>
  );
});

export default Slider;
