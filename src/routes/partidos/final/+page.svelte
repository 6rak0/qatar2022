<script>
	//import { enhance } from '$app/forms';
	import { matches } from '$lib/stores'
	import Match from '$lib/components/Match.svelte'

	const third = $matches.filter((match) => match.stage_name === 'Play-off for third place')
	const final = $matches.filter((match) => match.stage_name === 'Final')
	const finals = [...third,...final]

</script>

<section class="grid md:grid-cols-2 place-items-center">
	<!-- <form action="partidos" method="POST" use:enhance> -->
		{#each finals as match}
			<Match {match}/>
		{/each}
		<!-- <div class="flex justify-center my-8">
			<button class="btn btn-primary btn-wide">enviar</button>
		</div> -->
	<!-- </form> -->
</section>