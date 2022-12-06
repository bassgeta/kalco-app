import type { FC } from 'react';
import type { Kalco } from '~/interfaces/kalco';
import { SpustniMeni, spustniMeniLinks } from '../spustni-meni/spustni-meni';
import styles from './kalzo-seznam.css';

export function links() {
  return [...spustniMeniLinks(), { rel: 'stylesheet', href: styles }];
}

interface KalcoSeznamLastnosti {
  kalcoti: Kalco[];
}

export const KalcoSeznam: FC<KalcoSeznamLastnosti> = ({ kalcoti }) => {
  return (
    <>
      <div className="kalcoSeznam" id="stranskiMeni">
        {kalcoti.map((kalco) => (
          <SpustniMeni key={kalco.bar} kalco={kalco} />
        ))}
      </div>
    </>
  );
};
