import React, { useEffect, useRef, useState } from 'react';
import styles from './music.module.css';
import {
  FaRedoAlt,
  FaStepBackward,
  FaStepForward,
  FaStop,
  FaPlay,
  FaRandom,
} from 'react-icons/fa';

import musics from '../../playlist.json';

const Music = () => {
  const musicList = musics?.musics.map((item) => {
    return {
      ...item,
      address: `${process.env.PUBLIC_URL}/music${item.address}`,
    };
  });
  const [isPlaying, setisPlaying] = useState(false);
  const [onReplay, setOnReplay] = useState(false);
  const audioRef = useRef();
  const [playlist, setplaylist] = useState([]);
  const [selected, setSelected] = useState({});
  const [trackIndex, setTrackIndex] = useState(0);
  useEffect(() => {
    setplaylist(musicList);
    setSelected(musicList[0]);
  }, []);
  console.log(playlist);

  useEffect(() => {
    audioRef.current.volume = 0.3;
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [selected, isPlaying]);

  useEffect(() => {
    audioRef.current.addEventListener('ended', () => {
      if (!onReplay) {
        handleNextSong();
      }
    });
  }, [audioRef, onReplay]);

  const handleShuffle = () => {
    const arr = Array.from(Array(playlist.length), (_, k) => k);
    let newArray = [];
    while (newArray.length < arr.length) {
      let ranNum = parseInt(Math.random() * arr.length);
      if (newArray.includes(ranNum)) {
        continue;
      }
      newArray.push(ranNum);
    }
    console.log(newArray);
    setplaylist(newArray.map((idx) => musicList[idx]));
    setSelected(playlist[0]);
  };

  const handlePlaying = () => {
    setisPlaying(!isPlaying);
    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  const handleNextSong = () => {
    setTrackIndex((curr) => {
      return curr + 1 >= playlist.length ? 0 : curr + 1;
    });
    setSelected(playlist[trackIndex]);
  };

  const handlePrevSong = () => {
    setTrackIndex((curr) => {
      return curr - 1 < 0 ? playlist.length - 1 : curr - 1;
    });
    setSelected(playlist[trackIndex]);
  };

  const handleReplay = () => {
    setOnReplay(!onReplay);
  };

  return (
    <section className={styles.container}>
      <audio src={selected.address} ref={audioRef} loop={onReplay}></audio>
      <div className={styles.title}>{selected.title}</div>
      <div className={styles.btns}>
        <button
          className={`${styles.btn} ${onReplay ? styles.active : null}`}
          onClick={handleReplay}
        >
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
        <button className={styles.btn} onClick={handleShuffle}>
          <FaRandom />
        </button>
      </div>
    </section>
  );
};

export default Music;
