import { useLoaderData } from '@remix-run/react';
import type { KalcoEntry } from '~/interfaces/kalco';
import { getKalcoti } from '../helpers/kalco/parseKalcoti';

export function loader() {
  return getKalcoti();
}

export default function Index() {
  const kalcoti = useLoaderData<KalcoEntry[]>();

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Kalcoti!</h1>
      <ul>
        {kalcoti.map((kalco) => (
          <li key={kalco.bar}>
            {kalco.bar} - {kalco.obstoj}, {kalco.ocena}
          </li>
        ))}
      </ul>
    </div>
  );
}
