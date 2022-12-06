import { Marker, Popup } from 'react-leaflet';
import type { FC } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import type { Kalco } from '~/interfaces/kalco';
import { Ocena } from '../ocena/ocena';
import styles from './kalco-marker.css';
import type { Marker as LMarker } from 'leaflet';
import { useSearchParams } from '@remix-run/react';

interface KalcoMarkerLastnosti {
  kalco: Kalco;
}

export const KalcoMarker: FC<KalcoMarkerLastnosti> = ({ kalco }) => {
  const [, setSearchParams] = useSearchParams();
  const markerRef = useRef<LMarker>(null);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const aktivenKalco = searchParams.get('kalco');

    if (!markerRef.current) {
      return;
    }

    if (aktivenKalco === kalco.id) {
      markerRef.current.openPopup();
    } else {
      markerRef.current.closePopup();
    }
  }, [kalco.id, searchParams]);

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
        ref={markerRef}
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
