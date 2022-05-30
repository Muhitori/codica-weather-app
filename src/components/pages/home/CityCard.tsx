import { Card, CardMedia, Box, CardContent, Typography, CardActions, Button, CardActionArea } from '@mui/material';
import { FC } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { AppDispatch } from 'src/store';
import { deleteCity, setCityAsync } from 'src/store/slice/cities.slice';
import { City } from 'src/store/types/City'

interface CityCardProps {
  city: City
}


const getIconUrl = (icon: string) => {
  return `http://openweathermap.org/img/wn/${icon}@4x.png`
}

export const CityCard: FC<CityCardProps> = ({
  city: {
    name,
    weather: { status, temperature, description, icon },
    coordinates
  }
}) => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate();

  const onCardClick = () => {
    navigate(`/${name}`);
  }

  const handleUpdate = () => {
    dispatch(setCityAsync(coordinates))
  }

  const handleDelete = () => {
    dispatch(deleteCity(name))
  }

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
              {`${temperature} ℃`}
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
  )
}
