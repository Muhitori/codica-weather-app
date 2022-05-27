import { createSlice } from '@reduxjs/toolkit';

export interface Weather {
  temperature: string;
}

export interface City {
  name: string;
  weather: Weather;
}

export interface CitiesState {
  cities: City[];
}

const initialState: CitiesState = {
  cities: [],
};

export const cities = createSlice({
  name: 'cities',
  initialState,
  reducers: {},
});

export default cities.reducer;
