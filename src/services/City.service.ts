import axios from 'axios';
import { Coordinates } from 'src/store/types/City';

const BASE_ULR = 'http://api.openweathermap.org/geo/1.0/direct';

export class CityService {
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
