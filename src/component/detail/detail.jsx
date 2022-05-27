import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Sidebar from '../sidebar/sidebar';
import styles from './detail.module.css';
import { FaArrowLeft } from 'react-icons/fa';

const Detail = () => {
  const { id } = useParams();
  return (
    <div className={styles.container}>
      <>
        <header className={styles.header}>
          <div className={styles.menu}>
            <Sidebar direction='row' />
            <Link to={'/videos'}>
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
    </div>
  );
};

export default Detail;
