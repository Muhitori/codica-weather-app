import { RootState } from '../store'

export const forecastListSelector = (state: RootState) => state.forecast.forecastList
