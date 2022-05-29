import { RootState } from '../store';
import { City } from '../types/City';

type Return = (state: RootState) => City | undefined

export const citiesSelector = (state: RootState) => Object.values(state.cities);
export const citySelector = (name: string | undefined): Return =>
  (state: RootState) => {
    if (!name) return undefined;
    return state.cities[name]
  };
