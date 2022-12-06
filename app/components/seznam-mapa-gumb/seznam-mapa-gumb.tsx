import type { FC } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './seznam-mapa-gumb.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export const SeznamMapaGumb: FC = () => {
  const [jeSeznam, setJeSeznam] = useState(true);

  useEffect(() => {
    const sidebar = document.getElementById('stranskiMeni');

    if (!sidebar) {
      return;
    }

    if (jeSeznam) {
      sidebar.classList.remove('skrij-ga-gagagigo');
    } else {
      sidebar.classList.add('skrij-ga-gagagigo');
    }
  }, [jeSeznam]);

  return (
    <div className="gumb-kontejnr">
      <button
        className={`menjacina-gumb ${jeSeznam ? '' : ''}`}
        onClick={() => setJeSeznam((prej) => !prej)}
      >
        {jeSeznam ? '🌎' : '📝'}
      </button>
    </div>
  );
};
