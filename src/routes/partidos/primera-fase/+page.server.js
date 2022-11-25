import { getData } from '$lib/helpers';
import { redirect } from '@sveltejs/kit';
import { base } from '$app/paths';

export const load = async ({ locals }) => {
	if (!locals.pb.authStore.isValid) {
		throw redirect(303, `${base}/login`);
	} else {
		try {
			const matches = await getData('matches');
			return {
				matches: matches.filter((match) => match.stage_name === 'First stage')
			};
		} catch (err) {
			console.error(err);
		}
	}
};
