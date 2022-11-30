import type { LinksFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import {
  KalcoSeznam,
  links as kalcoSeznamLinks,
} from '~/components/kalco-seznam/kalco-seznam';
import type { Kalco } from '~/interfaces/kalco';
import { dwabiKalcote } from '../helpers/kalco/parseKalcoti';
import {
  ZemljevidWrapper,
  links as zemljoLinks,
} from '~/components/zemljevid/zemljevid-wrapper';
import { KalcoMarker } from '~/components/kalco-marker/kalco-marker.client';
import styles from '../styles/index.css';

export function loader() {
  return dwabiKalcote();
}

export const links: LinksFunction = () => {
  return [
    ...kalcoSeznamLinks(),
    ...zemljoLinks(),
    { rel: 'stylesheet', href: styles },
  ];
};

export default function Index() {
  const kalcoti = useLoaderData<Kalco[]>();

  return (
    <div className="index-page">
      <KalcoSeznam kalcoti={kalcoti} />
      <div className="map">
        <ZemljevidWrapper>
          {kalcoti.map((kalco) => (
            <KalcoMarker key={kalco.bar} kalco={kalco} />
          ))}
        </ZemljevidWrapper>
      </div>
    </div>
  );
}
