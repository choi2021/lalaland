import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.css';

const Login = ({ auth, setUserObj }) => {
  const navigate = useNavigate();
  useEffect(() => {
    auth.observeChange((userObj) => {
      setUserObj(userObj);
      navigate('/home');
    });
  }, []);

  const handleClick = (event) => {
    const {
      currentTarget: { textContent },
    } = event;
    auth.login(textContent.toLowerCase());
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Welcome to your <span className={styles.logo}>LaLa land</span>
      </h1>
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
  );
};

export default Login;
