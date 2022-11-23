import { readable } from 'svelte/store';

const getData = async (endpoint) => {
	try {
		const res = await fetch(`https://worldcupjson.net/${endpoint}`);
		const data = res.json();
		//console.log(data);
		return data;
	} catch (err) {
		console.error(err);
		return [];
	}
};

export const matches = readable(getData('matches'), (set) => {
	const interval = setInterval(async () => {
		set(await getData('matches'));
	}, 600000);

	return function () {
		clearInterval(interval);
	};
});

export const today = readable(getData('matches/today'), (set) => {
	const interval = setInterval(async () => {
		set(await getData('matches'));
	}, 600000);

	return function () {
		clearInterval(interval);
	};
});

export const tomorrow = readable(getData('matches/tomorrow'), (set) => {
	const interval = setInterval(async () => {
		set(await getData('matches'));
	}, 600000);

	return function () {
		clearInterval(interval);
	};
});

export const teams = readable(getData('teams'), (set) => {
	const interval = setInterval(() => {
		set(getData('teams'));
	}, 600000);

	return function () {
		clearInterval(interval);
	};
});
