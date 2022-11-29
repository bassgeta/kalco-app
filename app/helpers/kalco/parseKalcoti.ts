import type { KalcoEntry, KalcoRating } from '~/interfaces/kalco';
import rawKalcoti from '../../../data.json';

const getKalcoRating = (ratings: KalcoRating[]): number => {
  return Number(
    (
      ratings.reduce((sum, rating) => sum + rating.ocena, 0) / ratings.length
    ).toFixed(2)
  );
};

export function getKalcoti(): KalcoEntry[] {
  return rawKalcoti.map((entry) => ({
    bar: entry.bar,
    linkDoSlike: entry?.linkDoSlike.length > 0 ? entry.linkDoSlike : null,
    ocena: entry.ratings.length > 0 ? getKalcoRating(entry.ratings) : 0,
    dzabe: entry.dzabe,
    zihr: entry.zihr,
    mapsLink: entry.mapsLink,
    lat: entry.lat,
    lng: entry.lng,
    ratings: entry.ratings,
  }));
}
