import React from 'react';
import { Box, Typography } from '@mui/material';
import { Forecast } from 'src/store/types/Weather';
import { ForecastWeather } from './ForecastWeather';

interface ForecastProps {
  list: Forecast[];
}
export const ForecastContainer: React.FC<ForecastProps> = ({ list }) => {
  return (
    <Box width="100%">
      <Typography variant="h5" color="GrayText">
        {'Forecast: '}
      </Typography>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-end"
        width="100%"
        p={2}
      >
        {list.map((forecast) => (
          <ForecastWeather key={forecast.date} forecast={forecast} />
        ))}
      </Box>
    </Box>
  );
};
