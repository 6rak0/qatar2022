<script>
	import { matches } from '$lib/stores'
	import Match from '$lib/components/Match.svelte'

	export let data
	const filteredMatches = $matches.filter((match) => match.stage_name === 'First stage')
</script>

<section class="grid md:grid-cols-2 lg:grid-cols-3 place-items-center">
		{#each filteredMatches as match}
			<Match {match} link={data.link.data}/>
		{/each}
</section>