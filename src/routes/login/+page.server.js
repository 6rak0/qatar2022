import { redirect } from '@sveltejs/kit';
import { invalid } from '@sveltejs/kit';

export const load = ({ locals }) => {
	if (locals.pb.authStore.isValid) {
		throw redirect(303, '/');
	}
};

export const actions = {
	login: async ({ request, locals }) => {
		const formData = await request.formData();
		const data = Object.fromEntries([...formData]);
		try {
			await locals.pb.collection('users').authWithPassword(data.username, data.password);
			redirect(301, '/');
		} catch (error) {
			console.error(error);
			return invalid(error.status, {
				error: true,
				status: error.status
			});
		}
	},
	register: async ({ request, locals }) => {
		const formData = await request.formData();
		const data = Object.fromEntries([...formData]);
		try {
			const { id } = await locals.pb.collection('users').create(data);
			console.log(id);
			await locals.pb.collection('users').authWithPassword(data.username, data.password);
			const payload = {
				link: id,
				isPaying: false,
				data: {}
			};
			await locals.pb.collection('qatar2022').create(payload);
			redirect(301, '/');
		} catch (error) {
			console.error(error);
			return invalid(error.status, {
				error: true,
				status: error.status
			});
		}
	}
};
