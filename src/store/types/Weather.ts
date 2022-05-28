export interface Weather {
  temperature: number
  status: string
}

export interface ForecastWeatherResponse {
  dt_txt: string
  main: {
    temp: number
  }
}

export interface Forecast {
  temperature: number
  date: string
}
