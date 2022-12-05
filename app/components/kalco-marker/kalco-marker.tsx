import type { Kalco } from '~/interfaces/kalco';
import { KalcoMarker } from './kalco-marker.client';
import { FC } from 'react';
import { LinksFunction } from '@remix-run/node';
import styles from './kalco-marker.css';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

interface KalcoMarkerWrapperLastnosti {
  kalco: Kalco;
}

export const KalcoMarkerWrapper: FC<KalcoMarkerWrapperLastnosti> = ({
  kalco,
}) => <KalcoMarker kalco={kalco} />;
