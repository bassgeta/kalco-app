import type { KalcoEntry } from '~/interfaces/kalco';
import rawKalcoti from '../../../data.json';

export function getKalcoti(): KalcoEntry[] {
  return rawKalcoti.map((entry) => ({
    bar: entry.bar,
    linkDoSlike: entry?.linkDoSlike.length > 0 ? entry.linkDoSlike : null,
    ocena: entry.ocena,
    dzabe: entry.dzabe,
    obstoj: entry.obstoj === 'zihr' ? 'zihr' : 'nezihr',
    mapsLink: entry.mapsLink,
    lat: entry.lat,
    lng: entry.lng,
    notes: entry.notes,
  }));
}
