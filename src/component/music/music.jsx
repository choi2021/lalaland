import React, { useEffect, useRef, useState } from "react";
import styles from "./music.module.css";
import {
  FaRedoAlt,
  FaStepBackward,
  FaStepForward,
  FaStop,
  FaPlay,
  FaRandom,
} from "react-icons/fa";

const Music = ({ selected, setNextSong, setPrevSong, setRandomSong }) => {
  const [isPlaying, setisPlaying] = useState(false);
  const [onReplay, setOnReplay] = useState(false);
  const audioRef = useRef();

  useEffect(() => {
    audioRef.current.volume = 0.2;
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [selected]);

  useEffect(() => {
    audioRef.current.addEventListener("ended", () => {
      if (!onReplay) {
        setNextSong();
      }
    });
  }, [audioRef, onReplay]);

  const handlePlaying = () => {
    setisPlaying(!isPlaying);
    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  const handleNextSong = () => {
    setNextSong();
  };

  const handlePrevSong = () => {
    setPrevSong();
  };

  const handleReplay = () => {
    setOnReplay(!onReplay);
  };

  return (
    <section className={styles.container}>
      <audio src={selected.address} ref={audioRef} loop={onReplay}></audio>
      <div>{selected.title}</div>
      <div className={styles.btns}>
        <button className={styles.btn} onClick={handleReplay}>
          <FaRedoAlt />
        </button>
        <button className={styles.btn} onClick={handlePrevSong}>
          <FaStepBackward />
        </button>
        {isPlaying ? (
          <button className={styles.btn} onClick={handlePlaying}>
            <FaStop />
          </button>
        ) : (
          <button className={styles.btn} onClick={handlePlaying}>
            <FaPlay />
          </button>
        )}
        <button className={styles.btn} onClick={handleNextSong}>
          <FaStepForward></FaStepForward>
        </button>
        <button className={styles.btn} onClick={setRandomSong}>
          <FaRandom />
        </button>
      </div>
    </section>
  );
};

export default Music;
