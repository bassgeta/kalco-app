import type { LinksFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import {
  KalcoSeznam,
  links as kalcoSeznamLinks,
} from '~/components/kalco-seznam/kalco-seznam';
import type { Kalco } from '~/interfaces/kalco';
import { dwabiKalcote } from '../helpers/kalco/parseKalcoti';
import { Zemljevid } from '~/components/zemljevid/zemljevid.client';
import { KalcoMarker } from '~/components/kalco-marker/kalco-marker.client';
import styles from '../styles/index.css';
import { ClientOnly } from 'remix-utils';

export function loader() {
  return dwabiKalcote();
}

export const links: LinksFunction = () => {
  return [...kalcoSeznamLinks(), { rel: 'stylesheet', href: styles }];
};

export default function Index() {
  const kalcoti = useLoaderData<Kalco[]>();

  return (
    <div className="index-page">
      <KalcoSeznam kalcoti={kalcoti} />
      <div className="map">
        <ClientOnly>
          {() => (
            <Zemljevid>
              {kalcoti.map((kalco) => (
                <KalcoMarker key={kalco.id} kalco={kalco} />
              ))}
            </Zemljevid>
          )}
        </ClientOnly>
      </div>
    </div>
  );
}
