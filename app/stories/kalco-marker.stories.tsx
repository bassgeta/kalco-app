import { KalcoMarker as Component } from '../components/kalco-marker/kalco-marker.client';
import { ZemljevidWrapper as WrapperComponent } from '../components/zemljevid/zemljevid-wrapper';
import type { PropsWithChildren } from 'react';
import type { Story } from '@ladle/react';
import type { Kalco } from '~/interfaces/kalco';
import pivnicaUnion from '../data/kalcoti/pivnica-union.json';

interface KalcoMarkerLastnosti {
  kalco: Kalco;
}

export const KalcoMarker: Story<KalcoMarkerLastnosti> = ({ kalco }) => (
  <ZemljevidWrapper>
    <Component kalco={kalco} />
  </ZemljevidWrapper>
);

KalcoMarker.args = {
  kalco: pivnicaUnion,
};

const ZemljevidWrapper: Story<PropsWithChildren<{}>> = ({ children }) => (
  <WrapperComponent children={children} />
);
