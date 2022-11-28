import { getKalcoti } from '../helpers/kalco/parseKalcoti';

export default function Index() {
  const kalcoti = getKalcoti();

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
