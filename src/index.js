import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Weather from "./service/weatherService/weatherService";

const weatherService = new Weather("883f192704568f81e08ccd7d56a18e78");

ReactDOM.render(
  <React.StrictMode>
    <App weatherService={weatherService} />
  </React.StrictMode>,
  document.getElementById("root")
);
