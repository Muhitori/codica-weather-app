import { Box, Typography } from '@mui/material';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { TemperatureService } from 'src/services/Temperature.service';
import { AppDispatch } from 'src/store';
import { citySelector } from 'src/store/selector/cities.selector';
import { forecastListSelector } from 'src/store/selector/forecast.selector';
import {
  clearForecast,
  getForecastAsync,
} from 'src/store/slice/forecast.slice';
import { ForecastContainer } from './forecast/ForecastContainer';

export const City = () => {
  const dispatch = useDispatch<AppDispatch>();

  const params = useParams();
  const city = useSelector(citySelector(params.cityName));
  const forecastList = useSelector(forecastListSelector);

  const temperatureLabel = useMemo(() => {
    if (city?.weather.temperature)
      return TemperatureService.getLabel(city.weather.temperature);
    return '';
  }, [city?.weather.temperature]);

  useEffect(() => {
    if (city) {
      dispatch(getForecastAsync(city.coordinates));
    }
    return () => {
      dispatch(clearForecast());
    };
  }, []);

  return (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h1">{city?.name}</Typography>
        <Typography variant="h3">{`Current temperature: ${temperatureLabel}`}</Typography>
        <Typography variant="h5" color="GrayText">
          {`${city?.weather.status}, ${city?.weather.description}`}
        </Typography>
      </Box>
      <ForecastContainer list={forecastList} />
    </Box>
  );
};
