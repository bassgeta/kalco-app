import type { FC, PropsWithChildren } from 'react';
import type { LatLngTuple } from 'leaflet';
import Leaflet from 'leaflet';
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';

Leaflet.Icon.Default.imagePath = '../node_modules/leaflet';

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://upload.wikimedia.org/wikipedia/commons/7/70/%D0%9F%D0%BE%D0%B4%D1%83%D1%88%D0%B5%D1%87%D0%BA%D0%B0_%D1%81%D1%82%D1%83%D0%BF%D0%BD%D0%B8.png',
  iconUrl:
    'https://upload.wikimedia.org/wikipedia/commons/7/70/%D0%9F%D0%BE%D0%B4%D1%83%D1%88%D0%B5%D1%87%D0%BA%D0%B0_%D1%81%D1%82%D1%83%D0%BF%D0%BD%D0%B8.png',
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
    <MapContainer
      center={LJUBLJANA_CENTER}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ClickHandler />
      {children}
    </MapContainer>
  );
};
