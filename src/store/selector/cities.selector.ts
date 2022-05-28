import { RootState } from '../store';
import { City } from '../types/City';

type Return = (state: RootState) => City | undefined
export const citySelector = (name: string): Return => (state: RootState) => state.cities[name];
