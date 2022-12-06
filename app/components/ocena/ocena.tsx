import type { FC } from 'react';
import styles from './ocena.css';
import type { LinksFunction } from '@remix-run/node';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

interface OcenaLastnosti {
  ocena: number;
}

export const Ocena: FC<OcenaLastnosti> = ({ ocena }) => (
  <div className="ocenaInStevilka">
    <span className="ocenaStevilka">({ocena})</span>
    <span
      className="ocena"
      style={
        {
          '--ocene-sirina': `${Math.round((ocena / 5) * 100)}%`,
        } as React.CSSProperties
      }
    >
      ★★★★★
    </span>
  </div>
);
