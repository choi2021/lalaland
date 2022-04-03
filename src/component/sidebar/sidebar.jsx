import React, { useState } from "react";
import Menulist from "../menulist/menulist";
import { FaBars } from "react-icons/fa";
import styles from "./sidebar.module.css";

const Sidebar = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const onClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <button
          className={`${styles.btn} ${isClicked ? styles.active : null}`}
          onClick={onClick}
        >
          <FaBars></FaBars>
        </button>
        <h2 className={styles.title}>Menu</h2>
      </div>
      <Menulist isClicked={isClicked}></Menulist>
    </section>
  );
};

export default Sidebar;
