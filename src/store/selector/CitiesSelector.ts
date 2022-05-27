import { CitiesState } from '../slice/cities.slice';

export const citiesSelector = (state: CitiesState) => state.cities;
