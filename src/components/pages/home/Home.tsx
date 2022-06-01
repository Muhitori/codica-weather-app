import { useSelector } from 'react-redux';
import { citiesSelector } from 'src/store/selector/cities.selector';
import { Box, Grid } from '@mui/material';
import { useState } from 'react';
import { CityList } from './CityList';
import { CityAutocomplete } from './CityAutocomplete';
import { useStyles } from './styles';

export const Home = () => {
  const classes = useStyles();

  const cities = useSelector(citiesSelector);
  const [isFocused, setIsFocused] = useState(false);

  const toggleIsFocused = () => {
    setIsFocused(!isFocused);
  };

  return (
    <Grid container justifyContent="center">
      <Grid item sm={4}>
        <CityAutocomplete toggleIsFocused={toggleIsFocused} />
        <Box
          className={classes.listContainer}
          sx={{ filter: isFocused ? 'blur(3px)' : '' }}
        >
          <CityList cities={cities} />
        </Box>
      </Grid>
    </Grid>
  );
};
