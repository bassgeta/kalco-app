import { ClientOnly } from 'remix-utils';
import type { FC } from 'react';
import { memo } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import styles from 'leaflet/dist/leaflet.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

const Zemljevid: FC = () => {
  return (
    <ClientOnly fallback={<span>ajej</span>}>
      {() => (
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </ClientOnly>
  );
};

export default memo(Zemljevid);
