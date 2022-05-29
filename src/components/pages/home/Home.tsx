import { useSelector } from 'react-redux';
import { citiesSelector } from 'src/store/selector/cities.selector';
import { Grid } from '@mui/material'
import { CityList } from './CityList';
import { CitySearch } from './CitySearch';

export const Home = () => {
  const cities = useSelector(citiesSelector);

  return (
    <Grid container justifyContent="center">
      <Grid item sm={4}>
        <CitySearch />
        <CityList cities={cities} />
      </Grid>
    </Grid>
  )
};
