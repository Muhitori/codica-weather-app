export interface Weather {
  temperature: number
  status: string
  description: string
  icon: string
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
