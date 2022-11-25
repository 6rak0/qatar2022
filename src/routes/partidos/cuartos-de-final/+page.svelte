<script>
	import Match from '$lib/components/Match.svelte';
	export let data;
</script>

<section class="flex flex-wrap justify-center">
	{#each data.matches as match}
		<Match {match} link={data.link.data} />
	{/each}
</section>
