import type { Kalco, KalcoRecenzija } from '~/interfaces/kalco';
import fs from 'fs';
import path from 'path';

const dwabiKalcoOceno = (recenzije: KalcoRecenzija[]): number => {
  return Number(
    (
      recenzije.reduce((sum, rating) => sum + rating.ocena, 0) /
      recenzije.length
    ).toFixed(2),
  );
};

export async function dwabiKalcote(): Promise<Kalco[]> {
  console.log(`ma kaj ${__dirname}`);
  const kalcotiDir = await fs.promises.readdir(
    `${__dirname}/../app/data/kalcoti`,
  );

  const kalcoti = await Promise.all(
    kalcotiDir.map(async (kalcoPath) => {
      const buffer = await fs.promises.readFile(
        path.join(`${__dirname}/../app/data/kalcoti`, kalcoPath),
      );
      const entry = JSON.parse(buffer.toString());

      return {
        id: entry.id,
        bar: entry.bar,
        linkDoSlike: entry?.linkDoSlike.length > 0 ? entry.linkDoSlike : null,
        ocena:
          entry.recenzije.length > 0 ? dwabiKalcoOceno(entry.recenzije) : 0,
        dzabe: entry.dzabe,
        zihr: entry.zihr,
        zemljevidPovezava: entry.zemljevidPovezava,
        lat: entry.lat,
        lng: entry.lng,
        recenzije: entry.recenzije,
      };
    }),
  );

  return kalcoti;
}
