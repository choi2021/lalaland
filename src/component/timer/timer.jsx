import React, { useEffect, useState } from "react";

const Timer = (props) => {
  const [time, setTime] = useState("00:00:00");
  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      setTime((time) => {
        return `${hours < 10 ? `0${hours}` : `${hours}`}:${
          minutes < 10 ? `0${minutes}` : `${minutes}`
        }:${seconds < 10 ? `0${seconds}` : `${seconds}`}`;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("unmounted");
    };
  }, []);
  return <div>{time}</div>;
};

export default Timer;
