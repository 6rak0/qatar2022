<script>
	import { matches } from '$lib/stores';
	import Match from '$lib/components/Match.svelte';
	import Spinner from '$lib/components/Spinner.svelte'
	export let data;
</script>

<section class="flex flex-wrap justify-center">
	{#await $matches}
		<Spinner />
	{:then matches}
		{#each matches as match}
			{#if match.stage_name === 'Semi-final'}
			<Match {match} link={data.link.data} />
			{/if}
		{/each}
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
</section>
