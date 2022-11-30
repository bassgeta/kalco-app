import { Marker, Popup } from 'react-leaflet';
import type { FC } from 'react';
import type { Kalco } from '~/interfaces/kalco';

interface KalcoMarkerLastnosti {
  kalco: Kalco;
}
export const KalcoMarker: FC<KalcoMarkerLastnosti> = ({ kalco }) => {
  return (
    <Marker position={[kalco.lat, kalco.lng]}>
      <Popup>{kalco.bar}</Popup>
    </Marker>
  );
};
