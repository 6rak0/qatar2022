import { serializeNonPOJOs } from '$lib/helpers';

export const load = ({ locals }) => {
	if (locals.user) {
		return {
			user: serializeNonPOJOs(locals.user),
			link: serializeNonPOJOs(locals.link)
		};
	}
};
