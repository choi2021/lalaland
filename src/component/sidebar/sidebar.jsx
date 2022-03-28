import React from "react";
import Menulist from "../menulist/menulist";
import { FaBars } from "react-icons/fa";
import styles from "./sidebar.module.css";

const Sidebar = (props) => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <button className={styles.btn}>
          <FaBars></FaBars>
        </button>
        <h2 className={styles.title}>Menu</h2>
      </div>
      <Menulist></Menulist>
    </section>
  );
};

export default Sidebar;
