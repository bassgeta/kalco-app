import { useState, FC } from 'react';
import { Recenzije, recenzijeLinks } from '../recenzije/recenzije';
import styles from './spustni-meni.css';
import type { Kalco } from '~/interfaces/kalco';

interface SpustniMeniLastnosti {
  kalco: Kalco;
}

export function spustniMeniLinks() {
  return [{ rel: 'stylesheet', href: styles }, ...recenzijeLinks()];
}

export const SpustniMeni: FC<SpustniMeniLastnosti> = ({ kalco }) => {
  const [jeRazsirjen, nastaviJeRazsirjen] = useState(false);

  return (
    <div className="kalcoContainer">
      <button
        className="kalcoGumb"
        onClick={() => nastaviJeRazsirjen((je) => !je)}
      >
        <div className="ocenaInIme">
          <h3 className="ime">{kalco.bar}</h3>
          <div className="ocenaInStevilka">
            <span className="ocenaStevilka">({kalco.ocena})</span>
            <span
              className="ocena"
              style={
                {
                  '--ocene-sirina': `${Math.round((kalco.ocena / 5) * 100)}%`,
                } as React.CSSProperties
              }
            >
              ★★★★★
            </span>
          </div>
        </div>
        <div className={`puscica ${jeRazsirjen ? 'razsirjena' : ''}`}>
          {'->'}
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
