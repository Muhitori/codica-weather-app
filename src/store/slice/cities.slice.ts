import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CityService } from 'src/services/City.service';
import { WeatherService } from 'src/services/Weather.service';
import { City, Coordinates } from '../types/City';

export const getCityCurrentWeatherAsync = createAsyncThunk(
  'city/get-current-weather',
  async (name: string) => {
    const coordinates = await CityService.getCoordinatesByName(name)
    const currentWeather = await WeatherService.getCurrent(coordinates)
    return currentWeather
  }
)

export const updateCityCurrentWeatherAsync = createAsyncThunk(
  'city/update-current-weather',
  async (coordinates: Coordinates) => {
    const currentWeather = await WeatherService.getCurrent(coordinates)
    return currentWeather
  }
)

interface CitiesState {
  [name: string]: City;
}

const initialState: CitiesState = {};

export const cities = createSlice({
  name: 'cities',
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(getCityCurrentWeatherAsync.fulfilled,
    (state, action) => {
      const cityName = action.payload.name
      return { ...state, [cityName]: action.payload }
    })

    builder.addCase(
      updateCityCurrentWeatherAsync.fulfilled,
      (state, action) => {
        const cityName = action.payload.name
        return { ...state, [cityName]: action.payload }
      }
    )
  }
});

export default cities.reducer;
