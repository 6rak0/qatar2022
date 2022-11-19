import { POCKETBASE_URL } from '$env/static/private';
import Pocketbase from 'pocketbase';

export const handle = async ({ event, resolve }) => {
	event.locals.pb = new Pocketbase(POCKETBASE_URL);
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	if (event.locals.pb.authStore.isValid) {
		event.locals.user = event.locals.pb.authStore.model;
		event.locals.link = await event.locals.pb
			.collection('qatar2022')
			.getFirstListItem(`link="${event.locals.user.id}"`);
	}

	const response = await resolve(event);

	response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: true }));

	return response;
};
