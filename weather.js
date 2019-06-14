class Weather {
  constructor(city, state) {
    this.apiKey = '';
    this.city = city;
    this.state = state;
  }
  // Fetch weather from API
  async getWeather() {
    const response = await fetch;

    const responseData = await response.json();

    return responseData;
  }

  // Change weather location
  changeLocation(city) {
    this.city = city;
  }
}
