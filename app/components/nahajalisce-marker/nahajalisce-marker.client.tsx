import type { LatLng } from 'leaflet';
import Leaflet from 'leaflet';
import { Marker, useMapEvents } from 'react-leaflet';
import type { FC } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const customIcon = new Leaflet.Icon.Default({
  iconRetinaUrl:
    'https://upload.wikimedia.org/wikipedia/commons/7/70/%D0%9F%D0%BE%D0%B4%D1%83%D1%88%D0%B5%D1%87%D0%BA%D0%B0_%D1%81%D1%82%D1%83%D0%BF%D0%BD%D0%B8.png',
  iconUrl:
    'https://upload.wikimedia.org/wikipedia/commons/7/70/%D0%9F%D0%BE%D0%B4%D1%83%D1%88%D0%B5%D1%87%D0%BA%D0%B0_%D1%81%D1%82%D1%83%D0%BF%D0%BD%D0%B8.png',
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export const NahajalisceMarker: FC = () => {
  const [position, setPosition] = useState<LatLng | null>(null);

  const map = useMapEvents({
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  useEffect(() => {
    if (map) {
      map.locate();
    }
  }, [map]);

  return position !== null ? (
    <Marker icon={customIcon} position={[position.lat, position.lng]} />
  ) : null;
};
