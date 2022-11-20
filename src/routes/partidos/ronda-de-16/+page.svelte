<script>
	import { matches } from '$lib/stores';
	import Match from '$lib/components/Match.svelte';
	export let data;
</script>

<section class="grid md:grid-cols-2 lg:grid-cols-3 place-items-center">
	{#await $matches}
		<p>...waiting</p>
	{:then matches}
		{#each matches as match}
			{#if match.stage_name === 'Round of 16'}
			<Match {match} link={data.link.data} />
			{/if}
		{/each}
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
</section>
