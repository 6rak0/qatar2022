import { readable } from 'svelte/store';
import data from '$lib/matches.json';

// const getData = async () => {
// 	try {
// 		const res = await fetch('https://worldcupjson.net/matches', {
// 			mode: 'no-cors'
// 		});
// 		const data = res.json();
// 		return data;
// 	} catch (err) {
// 		console.error(err);
// 		return [];
// 	}
// };

export const matches = readable(data, (set) => {
	const interval = setInterval(() => {
		set(data);
	}, 60000);

	return function () {
		clearInterval(interval);
	};
});

// export const first = derived(matches, ($matches) => {
// 	$matches.filter((match) => match.stage_name === 'First stage');
// });
