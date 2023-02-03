import { json } from '@remix-run/node'; // or cloudflare/deno
import names from './names.json';

export const loader = async () => {
  return json(names);
};
