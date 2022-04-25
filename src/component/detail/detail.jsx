import React from "react";
import { Link, useParams } from "react-router-dom";
import Sidebar from "../sidebar/sidebar";
import styles from "./detail.module.css";
import { FaArrowLeft } from "react-icons/fa";

const Detail = (props) => {
  const { id } = useParams();
  return (
    <div className={styles.container}>
      {id !== undefined ? (
        <>
          <header className={styles.header}>
            <div className={styles.menu}>
              <Sidebar direction="row" />
              <Link to={"/videos"}>
                <button className={styles.btn}>
                  <FaArrowLeft></FaArrowLeft>
                </button>
              </Link>
            </div>
          </header>
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
