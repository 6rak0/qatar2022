import { redirect } from '@sveltejs/kit';
import base from '$app/paths';

export const GET = ({ locals }) => {
	locals.pb.authStore.clear();
	locals.user = undefined;

	throw redirect(303, `${base}/`);
};
