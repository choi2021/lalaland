import React from 'react';
import { useMediaQuery } from 'react-responsive';
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
  const isDesktop = useMediaQuery({ minWidth: 1100 });
  const isMobile = useMediaQuery({ maxWidth: 800 });
  return (
    <header className={styles.header}>
      <div className={styles.leftBox}>
        <Timer></Timer>
        {!isDesktop && location === 'home' && (
          <CurrWeather weatherService={weatherService} />
        )}
      </div>

      {location === 'home' && (
        <div className={styles.rightBox}>
          {!isMobile && (
            <Music
              selected={selected}
              setNextSong={setNextSong}
              setPrevSong={setPrevSong}
              setRandomSong={shuffleMusics}
            ></Music>
          )}
          {isDesktop && (
            <CurrWeather weatherService={weatherService}></CurrWeather>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
