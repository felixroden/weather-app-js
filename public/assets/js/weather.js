class weather {
  constructor(weather) {
    this.weather = weather;
    this.location = weather.name;
    this.country = weather.sys.country;
    this.temp = weather.main.temp;
    this.feelsLike = weather.main.feels_like;
    this.tempMin = weather.temp_min;
    this.tempMax = weather.temp_max;
  }
}