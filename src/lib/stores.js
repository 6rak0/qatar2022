import { readable } from 'svelte/store';
import { getData } from '$lib/helpers';

export const today = readable(getData('matches/today'), (set) => {
	const interval = setInterval(async () => {
		set(await getData('matches/today'));
	}, 60000);

	return function () {
		clearInterval(interval);
	};
});

export const tomorrow = readable(getData('matches/tomorrow'), (set) => {
	const interval = setInterval(async () => {
		set(await getData('matches/tomorrow'));
	}, 60000);

	return function () {
		clearInterval(interval);
	};
});
