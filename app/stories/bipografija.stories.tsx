import styles from '../styles/global.css';

export function BipografijaLinks() {
  return [{ rel: 'stylesheet', href: styles }];
}

export const Bipografija = () => (
  <>
    <h1>Naslov</h1>
    <h2>Naslov</h2>
    <h3>Naslov</h3>
    <h4>Naslov</h4>
    <small>majhni</small>
    <p>paragraf</p>
    <span>span</span>
    <br />
    <span className="text--xs">span z majhnim</span>
    <br />
    <a>Link</a>
  </>
);
