import styles from './recenzije.css';
import type { FC } from 'react';
import type { KalcoRecenzija } from '~/interfaces/kalco';

interface RecenzijeLastnosti {
  recenzije: KalcoRecenzija[];
}

export function recenzijeLinks() {
  return [{ rel: 'stylesheet', href: styles }];
}

export const Recenzije: FC<RecenzijeLastnosti> = ({ recenzije }) => (
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
