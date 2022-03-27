import React, { useEffect, useState } from "react";
import styles from "./Weather.module.css";

const CurrWeather = ({ weatherService }) => {
  const [weatherInfo, setWeatherInfo] = useState({});
  const [icon, setIcon] = useState("");
  const [temp, setTemp] = useState("?");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        weatherService
          .getWeather(lat, lon)
          .then((info) => setWeatherInfo(info));
      },
      () => {
        console.log("위치를 알 수 없습니다.");
      }
    );
  }, []);

  useEffect(() => {
    if (weatherInfo.weather) {
      setIcon(weatherInfo.weather[0].icon);
    }
  }, [weatherInfo]);

  useEffect(() => {
    if (weatherInfo.main) {
      setTemp(weatherInfo.main.temp);
    }
  }, [weatherInfo]);

  return (
    <section className={styles.container}>
      <p className={styles.city}>{weatherInfo.name}</p>
      <p className={styles.tempAndIcon}>
        <span className={styles.temp}>{temp}°C</span>
        <img
          className={styles.icon}
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="icon"
        />
      </p>
    </section>
  );
};

export default CurrWeather;
