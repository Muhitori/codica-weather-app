import { IconButton, InputAdornment, TextField } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/store';
import { addCityAsync } from 'src/store/slice/cities.slice';
import { useStyles } from './styles';

export const CitySearch = () => {
  const classes = useStyles();
  const dispatch = useDispatch<AppDispatch>();
  const [cityName, setCityName] = useState<string>('');

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (cityName) {
      dispatch(addCityAsync(cityName))
    }
  }

  const onCityNameChange = (name: string) => {
    setCityName(name.trim());
  }

  return (
      <form className={classes.search} onSubmit={onSubmit}>
        <TextField
          fullWidth
          variant="filled"
          value={cityName}
          onChange={(event) => onCityNameChange(event.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={onSubmit} edge="end">
                  <AddCircleIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </form>
  )
}