import type { FC } from 'react';
import { useMapEvents } from 'react-leaflet';
import styles from './najdi-me.css';

export const NajdiMe: FC = () => {
  const map = useMapEvents({});

  return (
    <>
      <link rel="stylesheet" href={styles} />
      <button
        className="najdi-me"
        onClick={() => {
          map.locate();
        }}
      >
        Ki sm?🧍
      </button>
    </>
  );
};
