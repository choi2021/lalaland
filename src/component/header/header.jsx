import React from "react";
import Music from "../music/music";
import Timer from "../timer/timer";
import CurrWeather from "../Weather/CurrWeather";
import styles from "./header.module.css";

const Header = ({
  location,
  selected,
  setNextSong,
  setPrevSong,
  shuffleMusics,
  weatherService,
  user,
}) => {
  return (
    <header className={styles.header}>
      <Timer></Timer>
      {location === "home" ? (
        <>
          <div className={styles.musicAndWeather}>
            <Music
              selected={selected}
              setNextSong={setNextSong}
              setPrevSong={setPrevSong}
              setRandomSong={shuffleMusics}
            ></Music>
            <CurrWeather weatherService={weatherService}></CurrWeather>
          </div>
        </>
      ) : null}
    </header>
  );
};

export default Header;
