import { redirect } from '@sveltejs/kit';

/** The page used to live here; keep old links and search results working. */
export const GET = () => redirect(308, '/contributions');
