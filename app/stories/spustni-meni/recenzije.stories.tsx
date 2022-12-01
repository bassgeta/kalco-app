import { Recenzije as Component } from '../../components/recenzije/recenzije';
import type { Story } from '@ladle/react';
import type { KalcoRecenzija } from '~/interfaces/kalco';

interface RecenzijeLastnosti {
  recenzije: KalcoRecenzija[];
}

export const Recenzije: Story<RecenzijeLastnosti> = ({ recenzije }) => (
  <Component recenzije={recenzije} />
);

Recenzije.args = {
  recenzije: [
    {
      naslou: 'Nic za klicati domov o',
      besedilo:
        'Je zastonj, kr je kr kul, mal je lhk pa frci bala naokuli. Luknja u enmi goli, pada vn ku das gol.',
      ocena: 2,
    },
    {
      naslou: 'Nic za klicati domov o',
      besedilo:
        'Je zastonj, kr je kr kul, mal je lhk pa frci bala naokuli. Luknja u enmi goli, pada vn ku das gol.',
      ocena: 2,
    },
  ],
};
