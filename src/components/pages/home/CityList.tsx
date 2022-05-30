import { FC } from 'react';
import { City } from 'src/store/types/City';
import { CityCard } from './CityCard';

interface CityListProps {
  cities: City[];
}

export const CityList: FC<CityListProps> = ({ cities }) => {
  return (
    <>
      {!!cities.length && cities.map((city, index) => (
        <CityCard key={`${city.name}${index}`} city={city} />
      ))}
    </>
  )
};

