import { json } from '@remix-run/node'; // or cloudflare/deno
import names from './names.json';

export const loader = async () => {
  // So you can write this:
  return json(names);
};
