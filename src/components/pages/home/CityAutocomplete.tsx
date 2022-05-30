import {
  Autocomplete,
  TextField,
} from '@mui/material'
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'src/store';
import { clearOptions, getOptionsAsync, setCityAsync } from 'src/store/slice/cities.slice';
import { optionsSelector } from 'src/store/selector/cities.selector';
import { CityOption } from 'src/store/types/City';
import { useStyles } from './styles';

interface CitySearchProps {
  toggleIsFocused: () => void
}

export const CityAutocomplete: React.FC<CitySearchProps> = ({ toggleIsFocused }) => {
  const classes = useStyles()
  const dispatch = useDispatch<AppDispatch>()
  const [cityName, setCityName] = useState<string>('')
  const autocompleteRef = useRef();

  const options = useSelector(optionsSelector);

  useEffect(() => {
    dispatch(clearOptions())
  }, [])

  const onCityNameChange = (name: string) => {
    if (name.trim()) {
      dispatch(getOptionsAsync(name))
      setCityName(name)
    } else {
      dispatch(clearOptions())
    }
  }

  const handleSelect = (cityOption: CityOption) => {
    dispatch(setCityAsync(cityOption.value))
    setCityName('')
  }

  return (
    <Autocomplete
      fullWidth
      freeSolo
      disableClearable
      blurOnSelect
      className={classes.autocomplete}
      ref={autocompleteRef}
      options={cityName ? options : []}
      filterOptions={(optionList) => optionList}
      getOptionLabel={(option) => (option as CityOption).label.toString()}
      onChange={(event, value) => handleSelect(value as CityOption)}
      onFocus={toggleIsFocused}
      onBlur={toggleIsFocused}
      inputValue={cityName}
      renderOption={(props, { label, value: { lat, lon } }) => {
        return (
          <li {...props} key={`${label}${lat}${lon}`}>
            {label}
          </li>
        )
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          fullWidth
          variant="filled"
          label="Enter city"
          value={cityName}
          onChange={(event) => onCityNameChange(event.target.value)}
        />
      )}
    />
  )
}