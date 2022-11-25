import { getData, orderGroups } from '$lib/helpers';

export const load = async () => {
	try {
		const teams = await getData('teams');
		const groups = [];
		teams.groups.forEach((group) => {
			groups.push({
				letter: group.letter,
				teams: orderGroups(group.teams)
			});
		});
		return {
			groups
		};
	} catch (err) {
		console.error(err);
	}
};
