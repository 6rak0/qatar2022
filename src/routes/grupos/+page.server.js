const getTeams = async () => {
	try {
		const res = await fetch(`https://worldcupjson.net/teams`);
		const data = res.json();
		return data;
	} catch (err) {
		console.error(err);
		return [];
	}
};

const orderGroups = (group) => {
	return group.sort(
		(a, b) => b.group_points - a.group_points || b.goal_differential - a.goal_differential
	);
};

export const load = async () => {
	try {
		const teams = await getTeams();
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
