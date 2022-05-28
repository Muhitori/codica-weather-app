import { Weather } from './Weather'

export interface Coordinates {
  lat: number
  lon: number
}

export interface City {
  name: string
  weather: Weather
  coordinates: Coordinates
}
