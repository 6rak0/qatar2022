<script>
	import { today, tomorrow } from '$lib/stores';
	import Match from '$lib/components/Match.svelte';
	import Spinner from '$lib/components/Spinner.svelte'
	export let data;
</script>

<section class="grid place-items-center">
	<!-- The button to open modal -->
	<label for="my-modal-3" class="btn my-6">información</label>
	<h1 class="text-center text-3xl">próximos partidos</h1>
	<div class="container grid md:grid-cols-2 lg:grid-cols-3 place-items-center">
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
	<div class="container grid md:grid-cols-2 lg:grid-cols-3 place-items-center">
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

	<!-- Put this part before </body> tag -->
	<input type="checkbox" id="my-modal-3" class="modal-toggle" />
	<div class="modal">
		<div class="modal-box relative">
			<label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
			<div class="p-6 text-lg">
				<p class="text-3xl">hola</p>
				<p class="m-5">
					la tabla de predicciones general está lista y ya aparecen los puntos, también aparece un $ al lado de las personas que decidieron entrar con una cuota de $50, si quieren participar por el premio monetario avísenme por favor
				</p>
				<p class="m-5">
					si decides cambiar de opinión sobre algún resultado basta con elegir tu nueva predicción
					para que se actualice en la base de datos, obviamente esto solo estará disponible hasta 5
					minutos antes de que el partido comience
				</p>
				<p class="m-5">si tienes más dudas contáctame</p>
			</div>
		</div>
	</div>
</section>
