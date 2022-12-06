import type { FC } from 'react';
import { useState } from 'react';
import { Recenzije, recenzijeLinks } from '../recenzije/recenzije';
import styles from './spustni-meni.css';
import type { Kalco } from '~/interfaces/kalco';
import { Ocena, links as ocenaLinks } from '../ocena/ocena';
import { useSearchParams } from '@remix-run/react';

interface SpustniMeniLastnosti {
  kalco: Kalco;
}

export function spustniMeniLinks() {
  return [
    ...recenzijeLinks(),
    ...ocenaLinks(),
    { rel: 'stylesheet', href: styles },
  ];
}

export const SpustniMeni: FC<SpustniMeniLastnosti> = ({ kalco }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const aktivenKalco = searchParams.get('kalco');
  const jeRazsirjen = aktivenKalco === kalco.id;

  return (
    <div className="kalcoContainer">
      <button
        className="kalcoGumb"
        onClick={() => {
          if (jeRazsirjen) {
            setSearchParams({});
          } else {
            setSearchParams({ kalco: kalco.id });
          }
        }}
      >
        <div className="ocenaInIme">
          <h3 className="ime">{kalco.bar}</h3>
          <Ocena ocena={kalco.ocena} />
        </div>
        <div className={`puscica ${jeRazsirjen ? 'razsirjena' : ''}`}>
          {'↓'}
        </div>
      </button>
      {jeRazsirjen && (
        <div className="kalco-info">
          {!kalco.zihr && <h4 className="zihrDisklejmr">Ne zihr</h4>}
          {kalco.linkDoSlike && (
            <img src={kalco.linkDoSlike} alt="kalco-slika" className="slika" />
          )}
          {kalco.dzabe.je ? (
            <h4 className="zastonj">Dzabe</h4>
          ) : (
            <h4 className="zaPlacat">Za placat</h4>
          )}
          <a
            href={kalco.zemljevidPovezava}
            target="_blank"
            className="povezavaZemljevidi"
            rel="noreferrer"
          >
            🗺️ Navodila za pot
          </a>
          <Recenzije recenzije={kalco.recenzije} />
        </div>
      )}
    </div>
  );
};
