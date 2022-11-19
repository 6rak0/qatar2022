export async function POST({ locals, request }) {
	const payload = await request.json();
	try {
		await locals.pb.collection('qatar2022').update(locals.link.id, {
			data: { ...locals.link.data, ...payload }
		});
		return new Response();
	} catch (error) {
		console.error(error.data);
		return new Response(new Blob(), {
			status: error.data.code
		});
	}
}
