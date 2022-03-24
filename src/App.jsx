import styles from "./App.module.css";
import Name from "./component/name/name";
import Timer from "./component/timer/timer";

function App() {
  return (
    <div className={styles.app}>
      <header>
        <Timer></Timer>
        <Name></Name>
      </header>
    </div>
  );
}

export default App;
