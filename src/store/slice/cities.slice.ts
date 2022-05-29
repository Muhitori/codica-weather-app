import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CityService } from 'src/services/City.service';
import { WeatherService } from 'src/services/Weather.service';
import { City, Coordinates } from '../types/City';

export const addCityAsync = createAsyncThunk(
  'city/get-current-weather',
  async (name: string) => {
    const coordinates = await CityService.getCoordinatesByName(name)
    const currentWeather = await WeatherService.getCurrent(coordinates)
    return currentWeather
  }
)

export const updateCityAsync = createAsyncThunk(
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
  reducers: {
    deleteCity: (state, action: PayloadAction<string>) => {
      // eslint-disable-next-line no-param-reassign
      delete state[action.payload];
    }
  },
  extraReducers: (builder) => {

    builder.addCase(addCityAsync.fulfilled, (state, action) => {
      const cityName = action.payload.name
      return { ...state, [cityName]: action.payload }
    })

    builder.addCase(updateCityAsync.fulfilled, (state, action) => {
      const cityName = action.payload.name
      return { ...state, [cityName]: action.payload }
    })
  }
});

export const { deleteCity } = cities.actions
export default cities.reducer;
