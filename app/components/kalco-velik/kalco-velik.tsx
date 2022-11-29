import type { FC } from 'react';
import { useState } from 'react';
import type { Kalco, KalcoRecenzija } from '~/interfaces/kalco';
import styles from './kalco-velik.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

// ne zihr nek warning zgwari djsnu?
// dzabe nek baje zravn

interface KalcoVelikLastnosti {
  kalco: Kalco;
}
export const KalcoVelik: FC<KalcoVelikLastnosti> = ({ kalco }) => {
  const [jeRazsirjen, nastaviJeRazsirjen] = useState(false);

  return (
    <div className="kalcoContainer">
      <button
        className="kalcoGumb"
        onClick={() => nastaviJeRazsirjen((je) => !je)}
      >
        <span className="ime">{kalco.bar}</span>
        {kalco.ocena > 0 && (
          <>
            <span className="ocena">{kalco.ocena}/ </span>
            <span className="pjt">5</span>
          </>
        )}
        <div className={`puscica ${jeRazsirjen ? 'razsirjena' : ''}`}>V</div>
      </button>
      {jeRazsirjen && (
        <div className="kalco-info">
          {!kalco.zihr && <span className="zihrDisklejmr">Ne zihr</span>}
          {kalco.linkDoSlike && (
            <img src={kalco.linkDoSlike} alt="kalco-slika" className="slika" />
          )}
          {kalco.dzabe.je ? (
            <span className="zastonj">Dzabe</span>
          ) : (
            <span className="zaPlacat">Za placat</span>
          )}
          <a
            href={kalco.zemljevidPovezava}
            target="_blank"
            className="povezavaZemljevidi"
            rel="noreferrer"
          >
            🗺️ Navodila za pot
          </a>
          <h3 className="recenzijeNaslov">Strokovne recenzije</h3>
          {kalco.recenzije.length > 0 ? (
            <div className="recenzije">
              {kalco.recenzije.map((recenzija, i) => (
                <div key={`recenzija_${i}`}>
                  <div className="recenzija">
                    <span className="ocena">Ocena: {recenzija.ocena}</span>
                    <span className="naslov">{recenzija.naslou}</span>
                    <span className="tekst">{recenzija.besedilo}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            'Ni se recenzij :('
          )}
        </div>
      )}
    </div>
  );
};
