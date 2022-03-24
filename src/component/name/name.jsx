import React, { useEffect, useRef, useState } from "react";
import styles from "./name.module.css";

const Name = (props) => {
  const [name, setName] = useState();
  const [onName, setOnName] = useState(false);
  const inputRef = useRef();
  const formRef = useRef();

  useEffect(() => {
    getName();
  }, []);

  const getName = () => {
    const user = localStorage.getItem("user");
    user && setName(user);
    user && setOnName(true);
  };

  const setNameIntoLocalStrorage = (name) => {
    localStorage.setItem("user", name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    setName(value);
    setNameIntoLocalStrorage(value);
    formRef.current.reset();
  };

  return (
    <section>
      <form onSubmit={handleSubmit} ref={formRef}>
        {!onName ? (
          <input
            ref={inputRef}
            className={styles.input}
            type="text"
            placeholder="What is your name?"
          />
        ) : (
          <span className={`${styles.name} ${activateName(onName)}`}>
            {name}
          </span>
        )}
      </form>
    </section>
  );
};

function activateName(on) {
  if (!on) {
    return;
  } else {
    return styles.active;
  }
}

export default Name;
