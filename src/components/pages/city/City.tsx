import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { citySelector } from 'src/store/selector/cities.selector';

export const City = () => {
  const { cityName } = useParams();
  const city = useSelector(citySelector(cityName));
  return <div />;
};
