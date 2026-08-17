import { error } from '@sveltejs/kit';
import { SORTED } from '../data';
import type { PageLoad } from './$types';

export const prerender = true;

export const entries = () => SORTED.map((post) => ({ slug: post.slug }));

export const load: PageLoad = ({ params }) => {
	const index = SORTED.findIndex((post) => post.slug === params.slug);
	if (index === -1) error(404, 'No such post');

	return {
		post: SORTED[index],
		next: SORTED[index + 1] ?? null
	};
};
