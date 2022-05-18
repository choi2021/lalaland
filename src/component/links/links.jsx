import React from 'react';
import styles from './links.module.css';
import { FaTwitter, FaFacebookSquare, FaInstagram } from 'react-icons/fa';

export default function Links() {
  return (
    <>
      <a
        href='https://twitter.com/lalaland'
        target='_blank'
        className={styles.address}
      >
        <FaTwitter />
      </a>
      <a
        href='https://www.facebook.com/LaLaLand/'
        target='_blank'
        className={styles.address}
      >
        <FaFacebookSquare />
      </a>
      <a
        href='https://www.instagram.com/lalaland/'
        target='_blank'
        className={styles.address}
      >
        <FaInstagram />
      </a>
    </>
  );
}
