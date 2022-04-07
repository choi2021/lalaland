import React from "react";
import Music from "../music/music";
import Name from "../name/name";
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
}) => {
  return (
    <header className={styles.header}>
      <Timer></Timer>
      <Name></Name>
      <div className={styles.musicAndWeather}>
        {location === "home" ? (
          <Music
            selected={selected}
            setNextSong={setNextSong}
            setPrevSong={setPrevSong}
            setRandomSong={shuffleMusics}
          ></Music>
        ) : null}
        <CurrWeather weatherService={weatherService}></CurrWeather>
      </div>
    </header>
  );
};

export default Header;