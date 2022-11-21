import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
import Pocketbase from 'pocketbase';
import { serializeNonPOJOs } from '$lib/helpers';
import { readable } from 'svelte/store';
//import data from '$lib/matches.json';

const pb = new Pocketbase(PUBLIC_POCKETBASE_URL);

const getPredictions = async () => {
	const records = await pb.collection('qatar2022').getFullList();
	const predictions = serializeNonPOJOs(records);
	return predictions;
};

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

//export const matches = readable([]);

export const predictions = readable(getPredictions(), (set) => {
	const interval = setInterval(async () => {
		set(await getPredictions());
	}, 600000);

	return function () {
		clearInterval(interval);
	};
});

//export const matchesTest = readable(data);

//export const predictions = readable(getPredictions());
