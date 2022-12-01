import { Recenzije as Component } from '../components/recenzije/recenzije';
import type { Story } from '@ladle/react';
import type { KalcoRecenzija } from '~/interfaces/kalco';
import rawRecenzije from './mockups/recenzije.json';

interface RecenzijeLastnosti {
  recenzije: KalcoRecenzija[];
}

export const Recenzije: Story<RecenzijeLastnosti> = ({ recenzije }) => (
  <Component recenzije={recenzije} />
);

Recenzije.args = {
  recenzije: rawRecenzije,
};
