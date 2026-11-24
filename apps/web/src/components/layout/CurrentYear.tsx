import { connection } from 'next/server';

/**
 * Current year, read at request time. Render inside <Suspense> so the rest of the page can
 * still be served from the static shell.
 */
export async function CurrentYear() {
  await connection();
  return <>{new Date().getFullYear()}</>;
}
