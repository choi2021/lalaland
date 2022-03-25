import styles from "./App.module.css";
import CurrWeather from "./component/currweather/currweather";
import Name from "./component/name/name";
import Timer from "./component/timer/timer";

function App({ weather }) {
  return (
    <div className={styles.app}>
      <header>
        <Timer></Timer>
        <Name></Name>
        <CurrWeather weather={weather}></CurrWeather>
      </header>
    </div>
  );
}

export default App;
