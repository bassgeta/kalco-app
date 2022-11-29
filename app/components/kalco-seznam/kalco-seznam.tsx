import type { FC } from 'react';
import type { Kalco } from '~/interfaces/kalco';
import {
  KalcoVelik,
  links as kalcoVelikLinks,
} from '../kalco-velik/kalco-velik';
import styles from './kalzo-seznam.css';

export function links() {
  return [...kalcoVelikLinks(), { rel: 'stylesheet', href: styles }];
}

interface KalcoSeznamLastnosti {
  kalcoti: Kalco[];
}
export const KalcoSeznam: FC<KalcoSeznamLastnosti> = ({ kalcoti }) => {
  return (
    <div className="kalcoSeznam">
      {kalcoti.map((kalco) => (
        <KalcoVelik key={kalco.bar} kalco={kalco} />
      ))}
    </div>
  );
};
