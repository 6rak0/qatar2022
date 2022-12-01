import { getData, serializeNonPOJOs } from '$lib/helpers';
import { redirect } from '@sveltejs/kit';
import { base } from '$app/paths';

export const load = async ({ locals }) => {
	if (!locals.pb.authStore.isValid) {
		throw redirect(303, `${base}/login`);
	} else {
		try {
			let matches = await getData('matches');
			matches.sort((a, b) => a.id - b.id);
			//matches.filter((match) => match.stage_name != 'First stage');
			const records = await locals.pb.collection('qatar2022').getFullList();
			let predictions = serializeNonPOJOs(records);

			predictions.forEach((user) => {
				let sum = 0;
				Object.entries(user.data).forEach((entry) => {
					let winner;
					if (entry[0] > 48) {
						if (matches[entry[0] - 1].winner_code) {
							winner = matches[entry[0] - 1].winner_code;
						} else {
							winner = 'null';
						}
						if (entry[1] === winner.toUpperCase()) {
							sum++;
						}
					}
				});
				user.points = sum;
			});
			return {
				predictions,
				matches: matches.filter((match) => match.stage_name != 'First stage')
			};
		} catch (err) {
			console.error(err);
		}
	}
};
