import { getData, serializeNonPOJOs } from '$lib/helpers';
import { redirect } from '@sveltejs/kit';
import { base } from '$app/paths';

export const load = async ({ locals }) => {
	if (!locals.pb.authStore.isValid) {
		throw redirect(303, `${base}/login`);
	} else {
		try {
			const matches = await getData('matches');
			const records = await locals.pb.collection('qatar2022').getFullList();
			let predictions = serializeNonPOJOs(records);

			predictions.forEach((user) => {
				let sum = 0;
				Object.entries(user.data).forEach((entry) => {
					let winner;
					if (matches[entry[0] - 1].winner_code) {
						winner = matches[entry[0] - 1].winner_code;
					} else {
						winner = 'null';
					}
					if (entry[1] === winner.toUpperCase()) {
						sum++;
					}
				});
				user.points = sum;
			});
			return {
				predictions
			};
		} catch (err) {
			console.error(err);
		}
	}
};
