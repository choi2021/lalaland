import styles from "./App.module.css";
import Weather from "./component/Weather/Weather";
import Name from "./component/name/name";
import Timer from "./component/timer/timer";

function App({ weatherService }) {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <Timer></Timer>
        <Name></Name>
        <Weather weatherService={weatherService}></Weather>
      </header>
    </div>
  );
}

export default App;
