<script>
	import { teams } from '$lib/stores';
	import Spinner from '$lib/components/Spinner.svelte'
</script>

{#await $teams}
	<Spinner />
{:then teams}
	<pre>{JSON.stringify(teams.groups, null, 2)}</pre>
{/await}