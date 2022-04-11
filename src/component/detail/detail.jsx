import React from "react";
import { Link, useParams } from "react-router-dom";
import Sidebar from "../sidebar/sidebar";
import styles from "./detail.module.css";

const Detail = (props) => {
  const { id } = useParams();
  const handleClick = () => {};
  return (
    <div className={styles.container}>
      {id !== undefined ? (
        <>
          <div className={styles.menu}>
            <Sidebar direction="row" />
          </div>
          <div className={styles.wrapper}>
            <iframe
              className={styles.video}
              src={`https://www.youtube.com/embed/${id}`}
              allowFullScreen
            ></iframe>
          </div>
        </>
      ) : (
        <p>영상을 불러올 수 없습니다😥</p>
      )}
    </div>
  );
};

export default Detail;
