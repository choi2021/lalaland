import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Weather from "./service/weatherService/weatherService";
import TodoDB from "./service/todoDB/todoDB";
import Youtube from "./service/youtube/youtube";

const weatherService = new Weather(process.env.REACT_APP_WEATHER_API_KEY);
const todoDB = new TodoDB();
const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);

ReactDOM.render(
  <React.StrictMode>
    <App weatherService={weatherService} todoDB={todoDB} youtube={youtube} />
  </React.StrictMode>,
  document.getElementById("root")
);
