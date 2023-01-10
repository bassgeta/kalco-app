import type { Kalco, KalcoRecenzija } from '~/interfaces/kalco';
// TODO plz better automagic
import balvanija from '~/data/kalcoti/balvanija.json';
import channelZero from '~/data/kalcoti/channel-zero.json';
import foerster from '~/data/kalcoti/foerster.json';
import fontana from '~/data/kalcoti/fontana-cafe.json';
import galaHala from '~/data/kalcoti/gala-hala.json';
import haratsPub from '~/data/kalcoti/harats-pub.json';
import lepaZoga from '~/data/kalcoti/lepa-zoga.json';
import menzaPriKoritu from '~/data/kalcoti/menza-koritu.json';
import ortoBar from '~/data/kalcoti/orto-bar.json';
import pivnicaUnion from '~/data/kalcoti/pivnica-union.json';
import sharkBar from '~/data/kalcoti/shark-bar.json';
import sportnaHisa from '~/data/kalcoti/sportna-hisa.json';
import zorica from '~/data/kalcoti/zorica.json';
import panda from '~/data/kalcoti/panda-bar.json';
import sombrero from '~/data/kalcoti/sombrero-bar.json';
import klub300 from '~/data/kalcoti/klub-300.json';

const dwabiKalcoOceno = (recenzije: KalcoRecenzija[]): number => {
  return Number(
    (
      recenzije.reduce((sum, rating) => sum + rating.ocena, 0) /
      recenzije.length
    ).toFixed(2),
  );
};

export function dwabiKalcote(): Kalco[] {
  return [
    balvanija,
    channelZero,
    foerster,
    fontana,
    galaHala,
    haratsPub,
    lepaZoga,
    menzaPriKoritu,
    ortoBar,
    pivnicaUnion,
    sharkBar,
    sportnaHisa,
    zorica,
    panda,
    sombrero,
    klub300,
  ].map((entry) => ({
    id: entry.id,
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
