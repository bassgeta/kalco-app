import { SpustniMeni as Component } from '../components/spustni-meni/spustni-meni';
import type { Story } from '@ladle/react';
import type { Kalco } from '~/interfaces/kalco';
import rawKalco from './mockups/kalco.json';

interface SpustniMeniLastnosti {
  kalco: Kalco;
}

export const SpustniMeni: Story<SpustniMeniLastnosti> = ({ kalco }) => (
  <Component kalco={kalco} />
);

SpustniMeni.args = {
  kalco: rawKalco,
};
