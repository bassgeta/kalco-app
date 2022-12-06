import type { FC, PropsWithChildren } from 'react';
import type { LatLngTuple } from 'leaflet';
import Leaflet from 'leaflet';
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import styles from 'leaflet/dist/leaflet.css';

Leaflet.Icon.Default.imagePath = '../node_modules/leaflet';

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://i.imgur.com/UxAiBHa.png',
  iconUrl: 'https://i.imgur.com/UxAiBHa.png',
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const LJUBLJANA_CENTER: LatLngTuple = [46.0542, 14.52];

const ClickHandler = () => {
  const map = useMapEvents({
    popupopen: (a) => {
      console.log('ajej!', a);
    },
  });

  return null;
};
export const Zemljevid: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <link rel="stylesheet" href={styles} />
      <MapContainer
        center={LJUBLJANA_CENTER}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ClickHandler />
        {children}
      </MapContainer>
    </>
  );
};
