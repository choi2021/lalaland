import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Weather from "./service/weather/weather";

const weather = new Weather(process.env.REACT_APP_WEATHER_API_KEY);

ReactDOM.render(
  <React.StrictMode>
    <App weather={weather} />
  </React.StrictMode>,
  document.getElementById("root")
);
