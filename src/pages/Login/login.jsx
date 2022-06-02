import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.css';

const Login = ({ auth, onLogin }) => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 600 });
  useEffect(() => {
    onLogin && navigate('/home');
  }, [onLogin, navigate]);
  const handleClick = (event) => {
    const {
      currentTarget: { textContent },
    } = event;
    auth.login(textContent.toLowerCase());
  };
  return (
    <div className={styles.container}>
      <div className={styles.topWrapper}>
        <h2 className={styles.title}>
          Welcome to your <span className={styles.logo}>LaLa land</span>
        </h2>
        {isMobile && <h4 className={styles.message}>Please Login 👇</h4>}
      </div>

      <div className={styles.bottomWrapper}>
        {!isMobile && <h4 className={styles.message}>Please Login 👇</h4>}
        <div className={styles.btns}>
          <button className={styles.btn} onClick={handleClick}>
            Github
          </button>
          <button className={styles.btn} onClick={handleClick}>
            Facebook
          </button>
          <button className={styles.btn} onClick={handleClick}>
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
