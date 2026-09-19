import { redirect } from '@sveltejs/kit';

/** The app was called AirPad first; keep that link working. */
export const GET = () => redirect(308, '/privacy/pen-friend');
