import type { Story } from '@ladle/react';
import styles from './recenzije.css';
import type { KalcoRecenzija } from '~/interfaces/kalco';

interface RecenzijeLastnosti {
  recenzije: KalcoRecenzija[];
}

export function recenzijeLinks() {
  return [{ rel: 'stylesheet', href: styles }];
}

export const Recenzije: Story<RecenzijeLastnosti> = ({ recenzije }) => (
  <div className='recenzije-okvir'>
    <h4 className='glavni-naslov'>Strokovne recenzije:</h4>
    {recenzije.length > 0 ? (
      <div className='recenzije'>
        {recenzije.map((recenzija, i) => (
          <div className='recenzija' key={`recenzija_${i}`}>
            <span className='ocena'>Ocena: {recenzija.ocena}</span>
            <span className='naslov'>{recenzija.naslou}</span>
            <p>{recenzija.besedilo}</p>
          </div>
        ))}
      </div>
    ) : (
      <div className='recenzije'>Ni se recenzij :(</div>
    )}
  </div>
);

recenzijeLinks.storyName = 'fuj to, ne klikn';

Recenzije.args = {
  recenzije: [
    {
      naslou: 'Nic za klicati domov o',
      besedilo:
        'Je zastonj, kr je kr kul, mal je lhk pa frci bala naokuli. Luknja u enmi goli, pada vn ku das gol.',
      ocena: 2,
    },
    {
      naslou: 'Nic za klicati domov o',
      besedilo:
        'Je zastonj, kr je kr kul, mal je lhk pa frci bala naokuli. Luknja u enmi goli, pada vn ku das gol.',
      ocena: 2,
    },
  ],
};

export default {
  title: 'spustni-meni--recenzije',
};
