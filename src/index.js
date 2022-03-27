import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Weather from "./service/weatherService/weatherService";
import TodoDB from "./service/todoDB/todoDB";

const weatherService = new Weather(process.env.REACT_APP_WEATHER_API_KEY);
const todoDB = new TodoDB();

ReactDOM.render(
  <React.StrictMode>
    <App weatherService={weatherService} todoDB={todoDB} />
  </React.StrictMode>,
  document.getElementById("root")
);
