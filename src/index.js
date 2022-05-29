import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Weather from './service/weatherService/weatherService';
import TodoDB from './service/todoDB/todoDB';
import Youtube from './service/youtube/youtube';
import Auth from './service/auth/auth';
import { BrowserRouter } from 'react-router-dom';

const weatherService = new Weather(process.env.REACT_APP_WEATHER_API_KEY);
const todoDB = new TodoDB();
const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);
const auth = new Auth();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App
        weatherService={weatherService}
        todoDB={todoDB}
        youtube={youtube}
        auth={auth}
      />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
