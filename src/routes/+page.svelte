<script>
	//import { base } from '$app/paths';
	// import { match } from '$lib/stores';
	// import Match from '$lib/components/Match.svelte';
	// export let data;
</script>

<section class="grid place-items-center">
	<!-- <div class="p-6 text-lg">
		<p class="text-3xl">hola</p>
		<p class="m-5">este es el intento de quiniela para este mundial</p>
		<p class="m-5">lo más seguro es que nos encontremos algunos errores sobre la marcha, pero creo que ya es lo suficientemente estable por lo menos para el partido de mañana</p>
		<p class="m-5">lo primero que hay que hacer para poder participar es registrar una cuenta en el botón <a href={`${base}/login`} style="color:hsl(var(--in))">'login'</a>, asegúrate de elegir la opción de registrar</p>
		<p class="m-5">después de crear la cuenta es necesario empezar en la fase de grupos <a href={`${base}/partidos/primera-fase`} style="color:hsl(var(--in))">aquí</a>, ya que obviamente las demás fases aún no tienen datos.</p>
		<p class="m-5">una vez en el listado de partidos existe la opción de elegir tu predicción, no es necesario apretar un botón para 'guardar', cuando eliges una de las tres opciones la base de datos recibe dicha selección y la guarda</p>
		<p class="m-5">si decides cambiar tu elección basta con elegir tu nueva predicción para que se actualice en la base de datos, obviamente esto solo estará disponible hasta 5 minutos antes de que el partido comience</p>
		<p class="m-5">por el momento la tabla de posiciones y predicciones de todos no está terminada</p>
		<p class="m-5">si tienes más dudas contáctame</p>
	</div> -->
	<!-- <div class="container">
		{#await $match}
			<p>...waiting</p>
		{:then match}
			{#each match as match}
				<Match {match} link={data.link.data} />
			{/each}
			<pre>{JSON.stringify(match, null, 2)}</pre>
		{:catch error}
			<p style="color: red">{error.message}</p>
		{/await}
	</div> -->
</section>
