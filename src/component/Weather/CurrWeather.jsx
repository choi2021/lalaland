import React, { useEffect, useState } from 'react';
import styles from './CurrWeather.module.css';

const CurrWeather = ({ weatherService }) => {
  const [weatherInfo, setWeatherInfo] = useState({});
  const [icon, setIcon] = useState('');
  const [temp, setTemp] = useState('?');
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(() => {
    let isMounted = true;
    navigator.geolocation.getCurrentPosition(
      (position) => {
        if (isMounted) {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          weatherService
            .getWeather(lat, lon)
            .then((info) => setWeatherInfo(info));
        }
      },
      () => {
        isMounted && setErrorMessage('위치를 알려주세요😊');
      }
    );
    return () => {
      isMounted = false;
    };
  }, [weatherService]);

  useEffect(() => {
    if (weatherInfo.weather) {
      setIcon(weatherInfo.weather[0].icon);
    }
    if (weatherInfo.main) {
      setTemp(weatherInfo.main.temp);
    }
  }, [weatherInfo]);

  return (
    <section className={styles.container}>
      {errorMessage ? (
        <div className={styles.msg}>{errorMessage}</div>
      ) : (
        <>
          <p className={styles.city}>{weatherInfo.name}</p>
          <p className={styles.tempAndIcon}>
            <span className={styles.temp}>{temp}°C</span>
            {!errorMessage && (
              <img
                className={styles.icon}
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                alt='icon'
              />
            )}
          </p>
        </>
      )}
    </section>
  );
};

export default CurrWeather;
