import { serializeNonPOJOs } from '$lib/helpers';

export const load = async ({ locals }) => {
	try {
		const res = await locals.pb
			.collection('qatar2022')
			.getFirstListItem(`link="${locals.user.id}"`);
		const record = serializeNonPOJOs(res);
		return {
			record
		};
	} catch (err) {
		console.error(err);
	}
};
