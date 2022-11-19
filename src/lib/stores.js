import { readable } from 'svelte/store';
import data from '$lib/matches.json';

import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
import Pocketbase from 'pocketbase';
import { serializeNonPOJOs } from '$lib/helpers';

const pb = new Pocketbase(PUBLIC_POCKETBASE_URL);

const getPredictions = async () => {
	const records = await pb.collection('qatar2022').getFullList();
	const predictions = serializeNonPOJOs(records);
	return predictions;
};

// const getData = async () => {
// 	try {
// 		const res = await fetch('https://worldcupjson.net/matches');
// 		const data = res.json();
// 		return data;
// 	} catch (err) {
// 		console.error(err);
// 		return [];
// 	}
// };

// export const matches = readable(getData(), (set) => {
// 	const interval = setInterval(async () => {
// 		set(await getData());
// 	}, 60000);

// 	return function () {
// 		clearInterval(interval);
// 	};
// });

export const matches = readable(data);

export const predictions = readable(getPredictions());
