import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AppDispatch } from 'src/store';
import { citySelector } from 'src/store/selector/cities.selector';
import { forecastListSelector } from 'src/store/selector/forecast.selector';
import { clearForecast, getForecastAsync } from 'src/store/slice/forecast.slice';

export const City = () => {
  const dispatch = useDispatch<AppDispatch>()

  const { cityName } = useParams();
  const city = useSelector(citySelector(cityName));
  const forecastList = useSelector(forecastListSelector);

  useEffect(() => {
    if (city && !forecastList.length) {
      dispatch(getForecastAsync(city.coordinates))
    }
    return () => {
      dispatch(clearForecast())
    }
  }, [])

  return <div />;
};
