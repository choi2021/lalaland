import React from "react";
import styles from "./slider.module.css";

const Slider = ({ photoArr }) => {
  return (
    <ul className={styles.container}>
      {photoArr.map((photo) => (
        <li key={photo.id} className={styles.item}>
          <img className={styles.img} src={`${photo.address}`} alt="photo" />
        </li>
      ))}
    </ul>
  );
};

export default Slider;