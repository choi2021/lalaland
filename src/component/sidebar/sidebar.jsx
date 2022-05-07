import React, { useState } from "react";
import Menulist from "../menulist/menulist";
import { FaBars } from "react-icons/fa";
import styles from "./sidebar.module.css";

const setDirection = (direction) => {
  if (direction === "row") {
    return styles.row;
  } else {
    return styles.column;
  }
};

const Sidebar = ({ direction }) => {
  const [isClicked, setIsClicked] = useState(false);
  const onClick = () => {
    setIsClicked(!isClicked);
  };
  console.log(direction);

  return (
    <section className={`${styles.container} ${setDirection(direction)}`}>
      <div className={styles.header}>
        <button
          className={`${styles.btn} ${isClicked ? styles.active : null}`}
          onClick={onClick}
        >
          <FaBars></FaBars>
        </button>
        <h2 className={styles.title}>Menu</h2>
      </div>
      <Menulist isClicked={isClicked} direction={direction}></Menulist>
    </section>
  );
};

export default Sidebar;
