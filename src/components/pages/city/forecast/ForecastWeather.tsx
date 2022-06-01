import React, { useMemo } from 'react';
import { Box, Tooltip, Typography } from '@mui/material';
import { Forecast } from 'src/store/types/Weather';
import { TemperatureService } from 'src/services/Temperature.service';

const getGradient = (temperature: number) => {
  return `linear-gradient(0deg, #FFF 0%, rgb(${
    temperature * 10
  },200,200) 100%)`;
};

interface ForecastProps {
  forecast: Forecast;
}
export const ForecastWeather: React.FC<ForecastProps> = ({
  forecast: {
    temperature: { current },
    date,
  },
}) => {
  const temperatureLabel = useMemo(
    () => TemperatureService.getLabel(current),
    [current]
  );

  return (
    <Tooltip title={date}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mb={current}
        p={0.5}
        sx={{
          background: getGradient(current),
          cursor: 'pointer',
        }}
      >
        <Typography>{temperatureLabel}</Typography>
      </Box>
    </Tooltip>
  );
};
