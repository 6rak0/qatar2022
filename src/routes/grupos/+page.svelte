<script>
	import { base } from '$app/paths';

	export let data;
</script>

<svelte:head>
	<title>Qatar 2022 | grupos</title>
</svelte:head>

<section class="flex flex-wrap justify-center justify-center">
	{#each data.groups as { letter, teams }}
		<div class="container w-72 m-8">
			<p class="text-6xl bold text-center">Grupo {letter}</p>
			<div class="overflow-x-auto">
				<table class="table table-zebra w-full">
					<thead>
						<tr>
							<th>Equipo</th>
							<th class="text-center">Puntos</th>
						</tr>
					</thead>
					<tbody>
						{#each teams as { country, name, group_points, wins, draws, losses }}
							<tr>
								<th>
									<div class="flex items-center">
										<img
											src={`${base}/flags/${country}.svg`}
											alt={country}
											class="w-8 my-1"
										/>{name}
									</div>
								</th>
								<td class="text-center">{group_points}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	{/each}
</section>
