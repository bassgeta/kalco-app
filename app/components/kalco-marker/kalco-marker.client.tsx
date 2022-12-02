import { Marker, Popup } from 'react-leaflet';
import type { FC } from 'react';
import type { Kalco } from '~/interfaces/kalco';
import type { LinksFunction } from '@remix-run/node';
import styles from './kalco-marker.css';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

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
          {kalco.ocena > 0 && <span className="ocena">{kalco.ocena} / 5 </span>}
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
