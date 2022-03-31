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

const Music = ({ selected }) => {
  const [isPlaying, setisPlaying] = useState(false);
  const audioRef = useRef();

  useEffect(() => {
    audioRef.current.volume = 0.1;
  }, []);

  const handlePlaying = () => {
    setisPlaying(!isPlaying);
    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  useEffect(() => {
    audioRef.current.addEventListener("ended", () => {
      setisPlaying(false);
    });
  }, [audioRef]);

  return (
    <section className={styles.container}>
      <audio src={selected.address} ref={audioRef}></audio>
      <div>{selected.title}</div>
      <div className={styles.btns}>
        <button className={styles.btn}>
          <FaRedoAlt />
        </button>
        <button className={styles.btn}>
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
        <button className={styles.btn}>
          <FaStepForward></FaStepForward>
        </button>
        <button className={styles.btn}>
          <FaRandom />
        </button>
      </div>
    </section>
  );
};

export default Music;
