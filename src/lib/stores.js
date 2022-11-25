import { readable } from 'svelte/store';
import { getData } from '$lib/helpers';

export const matches = readable(getData('matches'), (set) => {
	const interval = setInterval(async () => {
		set(await getData('matches'));
	}, 60000);

	return function () {
		clearInterval(interval);
	};
});

export const today = readable(getData('matches/today'), (set) => {
	const interval = setInterval(async () => {
		set(await getData('matches'));
	}, 60000);

	return function () {
		clearInterval(interval);
	};
});

export const tomorrow = readable(getData('matches/tomorrow'), (set) => {
	const interval = setInterval(async () => {
		set(await getData('matches'));
	}, 60000);

	return function () {
		clearInterval(interval);
	};
});
