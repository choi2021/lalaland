import React from 'react';
import styles from './slider.module.css';

const Slider = ({ photoArr, slow }) => {
  return (
    <ul className={`${styles.container} ${slow && styles.delayed}`}>
      {photoArr.map((photo) => (
        <li key={photo.id} className={styles.item}>
          <img
            className={styles.img}
            src={`${photo.address}`}
            alt='slider-photo'
          />
        </li>
      ))}
    </ul>
  );
};

export default Slider;
