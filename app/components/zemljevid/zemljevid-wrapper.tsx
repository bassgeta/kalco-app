import { ClientOnly } from 'remix-utils';
import { Zemljevid } from './zemljevid.client';
import type { LinksFunction } from '@remix-run/node';
import styles from 'leaflet/dist/leaflet.css';
import type { FC, PropsWithChildren } from 'react';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

export const ZemljevidWrapper: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <ClientOnly>{() => <Zemljevid>{children}</Zemljevid>}</ClientOnly>;
};
