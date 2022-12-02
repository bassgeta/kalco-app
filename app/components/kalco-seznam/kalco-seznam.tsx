import type { FC } from 'react';
import { useState } from 'react';
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
// TODO refactor u sidebar pa seznam posjbi
export const KalcoSeznam: FC<KalcoSeznamLastnosti> = ({ kalcoti }) => {
  const [jePokazan, setJePokazan] = useState(true);

  return (
    <>
      <div className={`kalcoSeznam ${!jePokazan ? 'kalcoSeznam-closed' : ''}`}>
        <button className="close-button" onClick={() => setJePokazan(false)}>
          X
        </button>
        {kalcoti.map((kalco) => (
          <KalcoVelik key={kalco.id} kalco={kalco} />
        ))}
      </div>
      <button
        className={`open-button ${jePokazan ? 'open-button-hidden' : ''}`}
        onClick={() => setJePokazan(true)}
      >
        O
      </button>
    </>
  );
};
