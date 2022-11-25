export const serializeNonPOJOs = (obj) => {
	return JSON.parse(JSON.stringify(obj));
};

export const getData = async (endpoint) => {
	try {
		const res = await fetch(`https://worldcupjson.net/${endpoint}`);
		const data = res.json();
		return data;
	} catch (err) {
		console.error(err);
		return [];
	}
};

export const orderGroups = (group) => {
	return group.sort(
		(a, b) => b.group_points - a.group_points || b.goal_differential - a.goal_differential
	);
};
