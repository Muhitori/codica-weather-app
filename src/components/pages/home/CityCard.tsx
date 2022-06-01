import {
  Card,
  CardMedia,
  Box,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardActionArea,
} from '@mui/material';
import { FC, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TemperatureService } from 'src/services/Temperature.service';
import { AppDispatch } from 'src/store';
import { deleteCity, setCityAsync } from 'src/store/slice/cities.slice';
import { City } from 'src/store/types/City';

interface CityCardProps {
  city: City;
}

const getIconUrl = (icon: string) => {
  return `https://openweathermap.org/img/wn/${icon}@4x.png`;
};

export const CityCard: FC<CityCardProps> = ({
  city: {
    name,
    weather: { status, temperature, description, icon },
    coordinates,
  },
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const onCardClick = () => {
    navigate(`${process.env.PUBLIC_URL}/${name}`);
  };

  const handleUpdate = () => {
    dispatch(setCityAsync(coordinates));
  };

  const handleDelete = () => {
    dispatch(deleteCity(name));
  };

  const temperatureLabel = useMemo(
    () => TemperatureService.getLabel(temperature),
    [temperature]
  );

  return (
    <Card sx={{ marginBottom: 4 }}>
      <CardActionArea
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-start',
        }}
        onClick={onCardClick}
      >
        <CardMedia component="img" src={getIconUrl(icon)} alt="flat image" />
        <Box
          display="flex"
          width="100%"
          flexDirection="column"
          alignItems="center"
        >
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography mb={1} variant="h5">{`${name}`}</Typography>
            <Typography mb={1} variant="h3">
              {temperatureLabel}
            </Typography>
            <Typography mb={1} variant="body1" color="text.secondary">
              {`${status},${description}`}
            </Typography>
          </CardContent>
        </Box>
      </CardActionArea>
      <CardActions sx={{ flexGrow: 1 }}>
        <Button fullWidth color="primary" onClick={handleUpdate}>
          Update
        </Button>
        <Button fullWidth color="secondary" onClick={handleDelete}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};
