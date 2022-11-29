import type { Kalco, KalcoRecenzija } from '~/interfaces/kalco';
import rawKalcoti from '../../../data.json';

const dwabiKalcoOceno = (recenzije: KalcoRecenzija[]): number => {
  return Number(
    (
      recenzije.reduce((sum, rating) => sum + rating.ocena, 0) /
      recenzije.length
    ).toFixed(2)
  );
};

export function dwabiKalcote(): Kalco[] {
  return rawKalcoti.map((entry) => ({
    bar: entry.bar,
    linkDoSlike: entry?.linkDoSlike.length > 0 ? entry.linkDoSlike : null,
    ocena: entry.recenzije.length > 0 ? dwabiKalcoOceno(entry.recenzije) : 0,
    dzabe: entry.dzabe,
    zihr: entry.zihr,
    zemljevidPovezava: entry.zemljevidPovezava,
    lat: entry.lat,
    lng: entry.lng,
    recenzije: entry.recenzije,
  }));
}
