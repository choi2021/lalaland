import React from 'react';
import Music from '../music/music';
import Timer from '../timer/timer';
import CurrWeather from '../Weather/CurrWeather';
import styles from './header.module.css';

const Header = ({
  location,
  selected,
  setNextSong,
  setPrevSong,
  shuffleMusics,
  weatherService,
}) => {
  return (
    <header className={styles.header}>
      <div className={styles.leftBox}>
        <Timer></Timer>
        {location === 'home' && (
          <Music
            selected={selected}
            setNextSong={setNextSong}
            setPrevSong={setPrevSong}
            setRandomSong={shuffleMusics}
          ></Music>
        )}
      </div>

      {location === 'home' && (
        <div className={styles.rightBox}>
          {location === 'home' && (
            <Music
              selected={selected}
              setNextSong={setNextSong}
              setPrevSong={setPrevSong}
              setRandomSong={shuffleMusics}
            ></Music>
          )}
          <CurrWeather weatherService={weatherService}></CurrWeather>
        </div>
      )}
    </header>
  );
};

export default Header;
