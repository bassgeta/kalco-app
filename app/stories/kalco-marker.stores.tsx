import { KalcoMarker as Component } from '../components/kalco-marker/kalco-marker.client';
import type { Story } from '@ladle/react';
import type { Kalco } from '~/interfaces/kalco';
import rawKalcoti from './mockups/kalco.json';

interface KalcoMarkerLastnosti {
  kalco: Kalco;
}

export const KalcoMarker: Story<KalcoMarkerLastnosti> = ({ kalco }) => (
  <Component kalco={kalco} />
);

KalcoMarker.args = {
  rawKalcoti,
};
