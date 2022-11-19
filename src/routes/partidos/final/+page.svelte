<script>
	import { matches } from '$lib/stores';
	import Match from '$lib/components/Match.svelte';
	export let data;
	const third = $matches.filter((match) => match.stage_name === 'Play-off for third place');
	const final = $matches.filter((match) => match.stage_name === 'Final');
	const finals = [...third, ...final];
</script>

<section class="grid md:grid-cols-2 place-items-center">
	{#each finals as match}
		<Match {match} link={data.link.data} />
	{/each}
</section>
