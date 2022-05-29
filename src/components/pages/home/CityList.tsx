import { Box } from '@mui/material'
import { FC } from 'react';
import { City } from 'src/store/types/City';
import { CityCard } from './CityCard';
import { useStyles } from './styles';

interface CityListProps {
  cities: City[];
}

export const CityList: FC<CityListProps> = ({ cities }) => {
  const classes = useStyles();
  return (
    <Box className={classes.listContainer}>
      {cities.map((city) => (
        <CityCard key={city.name} city={city} />
      ))}
    </Box>
  )
};

