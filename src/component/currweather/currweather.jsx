import React, { useEffect, useState } from "react";

const CurrWeather = ({ weather }) => {
  const [position, setPosition] = useState({});

  useEffect(() => {
    getLocation();
    weather.getWeather(position.lat, position.lon);
  }, []);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setPosition((curr) => {
          return {
            ...curr,
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          };
        });
      },
      () => {
        console.log("위치를 알 수 없습니다.");
      }
    );
  };

  return <div></div>;
};

export default CurrWeather;
