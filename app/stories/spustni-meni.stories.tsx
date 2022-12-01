import { SpustniMeni as Component } from '../components/spustni-meni/spustni-meni';
import type { Story } from '@ladle/react';
import type { Kalco } from '~/interfaces/kalco';

interface SpustniMeniLastnosti {
  kalco: Kalco;
}

export const SpustniMeni: Story<SpustniMeniLastnosti> = ({ kalco }) => (
  <Component kalco={kalco} />
);

SpustniMeni.args = {
  kalco: {
    bar: 'Pivnica Union',
    linkDoSlike: '',
    dzabe: {
      je: true,
      confirmed: true,
    },
    zihr: true,
    zemljevidPovezava: 'https://goo.gl/maps/NFHh4fDLHixAebe4A',
    lat: 46.059765,
    lng: 14.4985854,
    recenzije: [
      {
        naslou: 'Nic za klicati domov o',
        besedilo:
          'Je zastonj, kr je kr kul, mal je lhk pa frci bala naokuli. Luknja u enmi goli, pada vn ku das gol.',
        ocena: 2,
      },
    ],
  },
};
