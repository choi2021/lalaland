import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styles from './video.module.css';

const Video = memo(({ id, title, imgInfo }) => {
  return (
    <Link to={`/videos/${id}`} className={styles.wrapper}>
      <li className={styles.video}>
        <img className={styles.img} src={imgInfo.medium.url} alt='thumbnails' />
        <div className={styles.metadata}>
          <h1 className={styles.title}>
            {title.length > 39 ? `${title.slice(0, 39)}...` : title}
          </h1>
        </div>
      </li>
    </Link>
  );
});

export default Video;
