<script>
	import { matches } from '$lib/stores';
	import Match from '$lib/components/Match.svelte';
	export let data;
	const filteredMatches = $matches.filter((match) => match.stage_name === 'Semi-final');
</script>

<section class="grid md:grid-cols-2 place-items-center">
	{#each filteredMatches as match}
		<Match {match} link={data.link.data} />
	{/each}
</section>
