import axios from 'axios';
import {
  CityOption,
  CityOptionResponse,
  Coordinates,
} from 'src/store/types/City';

const BASE_ULR = 'https://api.openweathermap.org/geo/1.0/direct';
const CITIES_LIMIT = 5;

export class CityService {
  static async getOptions(cityName: string): Promise<CityOption[]> {
    const { data } = await axios.get(`${BASE_ULR}`, {
      params: {
        q: cityName,
        limit: CITIES_LIMIT,
        appId: process.env.REACT_APP_API_KEY,
      },
    });

    return data.map(({ name, country, lat, lon }: CityOptionResponse) => ({
      label: `${name},${country}`,
      value: { lat, lon },
    }));
  }

  static async getCoordinatesByName(name: string): Promise<Coordinates> {
    const { data } = await axios.get(`${BASE_ULR}`, {
      params: {
        q: name,
        appId: process.env.REACT_APP_API_KEY,
      },
    });
    const { lat, lon } = data[0];
    return { lat, lon };
  }
}
