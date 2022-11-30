import type { LinksFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import {
  KalcoSeznam,
  links as kalcoSeznamLinks,
} from '~/components/kalco-seznam/kalco-seznam';
import Zemljevid from '~/components/zemljevid/zemljevid.client';
import type { Kalco } from '~/interfaces/kalco';
import { dwabiKalcote } from '../helpers/kalco/parseKalcoti';

export function loader() {
  return dwabiKalcote();
}

export const links: LinksFunction = () => {
  return [...kalcoSeznamLinks()];
};

export default function Index() {
  const kalcoti = useLoaderData<Kalco[]>();

  return (
    <div>
      <h1>Kalčoti!</h1>
      <div style={{ display: 'flex', height: '98vh' }}>
        <KalcoSeznam kalcoti={kalcoti} />
        <Zemljevid />
      </div>
    </div>
  );
}
