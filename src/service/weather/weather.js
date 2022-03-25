class Weather {
  constructor(key) {
    this.key = key;
  }

  async getWeather(lat, lon) {
    console.log(lat, lon);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.key}&units=metric`
    );
    const json = await response.json();
    console.log(json);
  }
}

export default Weather;
