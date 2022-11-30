<script>
	import { today, tomorrow } from '$lib/stores';
	import Match from '$lib/components/Match.svelte';
	import Spinner from '$lib/components/Spinner.svelte'
	export let data;
</script>

<svelte:head>
	<title>Qatar 2022</title>
</svelte:head>

<section class="grid place-items-center">
	<h1 class="text-center text-3xl">próximos partidos</h1>
	<div class="flex flex-wrap justify-center">
		{#await $today}
			<Spinner />
		{:then matches}
			{#each matches as match}
				<Match {match} link={data.link.data} />
			{/each}
		{:catch error}
			<p style="color: red">{error.message}</p>
		{/await}
	</div>
	<div class="flex flex-wrap justify-center">
		{#await $tomorrow}
			<Spinner />
		{:then matches}
			{#each matches as match}
				<Match {match} link={data.link.data} />
			{/each}
		{:catch error}
			<p style="color: red">{error.message}</p>
		{/await}
	</div>
</section>
