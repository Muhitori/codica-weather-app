import axios from 'axios';

const BASE_ULR = 'https://api.openweathermap.org/data/2.5/';

export class WeatherService {
  static async getByCoordinates(lat: number, lon: number) {
    const { data } = await axios.get(`${BASE_ULR}/forecast`, {
      params: {
        lat,
        lon,
        appId: process.env.REACT_APP_API_KEY,
      },
    });
  }
}
