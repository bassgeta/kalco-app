import { Marker, Popup } from 'react-leaflet';
import type { FC } from 'react';
import type { Kalco } from '~/interfaces/kalco';
import { Ocena } from '../ocena/ocena';
import styles from './kalco-marker.css';
import type { Marker as LMarker } from 'leaflet';
import { useSearchParams } from '@remix-run/react';

interface KalcoMarkerLastnosti {
  kalco: Kalco;
  addMarkerRef: (markerId: string, markerRef: LMarker) => void;
}

export const KalcoMarker: FC<KalcoMarkerLastnosti> = ({
  addMarkerRef,
  kalco,
}) => {
  const [, setSearchParams] = useSearchParams();
  return (
    <>
      <link rel="stylesheet" href={styles} />
      <Marker
        position={[kalco.lat, kalco.lng]}
        eventHandlers={{
          popupopen: () => {
            setSearchParams({ kalco: kalco.id });
          },
          popupclose: () => {
            setSearchParams({});
          },
        }}
        ref={(m) => {
          if (m !== null) {
            addMarkerRef(kalco.id, m);
          }
        }}
      >
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
    </>
  );
};
