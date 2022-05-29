import axios from 'axios';
import { Coordinates, City } from 'src/store/types/City';
import { Forecast, ForecastWeatherResponse } from 'src/store/types/Weather';
import { TemperatureService } from './Temperature.service';

const BASE_ULR = 'https://api.openweathermap.org/data/2.5/';

export class WeatherService {
  static async getForecast({ lat, lon }: Coordinates) {
    const { data: { list } } = await axios.get(`${BASE_ULR}/forecast`, {
      params: {
        lat,
        lon,
        appId: process.env.REACT_APP_API_KEY,
      },
    });

    const forecastList: Forecast[] = list.map((weather: ForecastWeatherResponse) =>
      ({ temperature: TemperatureService.getInCelsius(weather.main.temp), date: weather.dt_txt }));

    return forecastList;
  }

  static async getCurrent({ lat, lon }: Coordinates): Promise<City> {
    const { data } = await axios.get(`${BASE_ULR}/weather`, {
      params: {
        lat,
        lon,
        appId: process.env.REACT_APP_API_KEY,
      },
    });

    const {
      name, main, weather, coord: coordinates,
    } = data;

    const { main: status, description, icon } = weather[0];
    const temperature = TemperatureService.getInCelsius(main.temp);

    return {
      name,
      coordinates,
      weather: { status, temperature, description, icon },
    }
  }
}
