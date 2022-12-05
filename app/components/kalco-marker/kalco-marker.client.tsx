import { Marker, Popup } from 'react-leaflet';
import type { FC } from 'react';
import type { Kalco } from '~/interfaces/kalco';
import { Ocena } from '../ocena/ocena';

interface KalcoMarkerLastnosti {
  kalco: Kalco;
}

export const KalcoMarker: FC<KalcoMarkerLastnosti> = ({ kalco }) => {
  return (
    <Marker position={[kalco.lat, kalco.lng]}>
      <Popup>
        <div className="kalco-povzetek">
          <span className="bar">{kalco.bar}</span>
          {kalco.dzabe.je ? (
            <span className="zastonj-malu">Dzabe</span>
          ) : (
            <span className="zaPlacat-malu">Za placat</span>
          )}
          <Ocena ocena={kalco.ocena} />
          <a
            href={kalco.zemljevidPovezava}
            target="_blank"
            className="pejdi-cje"
            rel="noreferrer"
          >
            👀 Grmo sm?
          </a>
        </div>
      </Popup>
    </Marker>
  );
};
