import type { FC } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import type { LatLngTuple } from 'leaflet';
import Leaflet from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';
import styles from 'leaflet/dist/leaflet.css';
import type { Kalco } from '~/interfaces/kalco';
import { KalcoMarker } from '../kalco-marker/kalco-marker.client';
import { useSearchParams } from '@remix-run/react';

Leaflet.Icon.Default.imagePath = '../node_modules/leaflet';

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://i.imgur.com/UxAiBHa.png',
  iconUrl: 'https://i.imgur.com/UxAiBHa.png',
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const LJUBLJANA_CENTER: LatLngTuple = [46.0542, 14.52];

interface ZemljevidLastnosti {
  kalcoti: Kalco[];
}

export const Zemljevid: FC<ZemljevidLastnosti> = ({ kalcoti }) => {
  const mapRef = useRef<Leaflet.Map>(null);
  const markerRefs = useRef<Record<string, Leaflet.Marker>>({});

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const aktivenKalco = searchParams.get('kalco');

    if (aktivenKalco !== null) {
      const markerToOpen: Leaflet.Marker = markerRefs.current[aktivenKalco];
      if (markerToOpen) {
        markerToOpen.openPopup();
        mapRef.current?.flyTo(markerToOpen.getLatLng());
      }
    } else {
      mapRef.current?.closePopup();
    }
  }, [searchParams]);

  const addMarkerRef = (kalcoId: string, markerRef: Leaflet.Marker) => {
    markerRefs.current[kalcoId] = markerRef;
  };

  return (
    <>
      <link rel="stylesheet" href={styles} />
      <MapContainer
        center={LJUBLJANA_CENTER}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {kalcoti.map((kalco) => (
          <KalcoMarker
            key={kalco.id}
            kalco={kalco}
            addMarkerRef={addMarkerRef}
          />
        ))}
      </MapContainer>
    </>
  );
};
