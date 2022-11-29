<script>
	import Match from '$lib/components/Match.svelte';
	export let data;
</script>

<svelte:head>
	<title>Qatar 2022 | 8vos</title>
</svelte:head>

<section class="flex flex-wrap justify-center">
	{#each data.matches as match}
		<Match {match} link={data.link.data} />
	{/each}
</section>
