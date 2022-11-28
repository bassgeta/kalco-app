import { useLoaderData } from '@remix-run/react';
import type { KalcoEntry } from '~/interfaces/kalco';
import { getKalcoti } from '../helpers/kalco/parseKalcoti';

export function loader() {
  return getKalcoti();
}

export default function Index() {
  const kalcoti = useLoaderData<KalcoEntry[]>();

  return (
    <div>
      <h1>Kalčoti!</h1>
      <ul>
        {kalcoti.map((kalco) => (
          <li key={kalco.bar}>
            <p>
              {kalco.bar} - {kalco.obstoj}, {kalco.ocena}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
