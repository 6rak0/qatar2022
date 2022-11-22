<script>
	import { base } from '$app/paths';
	import { teams } from '$lib/stores';
	import Spinner from '$lib/components/Spinner.svelte';
</script>

<section class="flex flex-wrap justify-center justify-center">
	{#await $teams}
		<Spinner />
	{:then teams}
		{#each teams.groups as { letter, teams }}
			<div class="container w-72 m-8">
				<p class="text-6xl bold text-center">Grupo {letter}</p>
				<div class="overflow-x-auto">
					<table class="table table-zebra w-full">
						<!-- head -->
						<thead>
							<tr>
								<th>Equipo</th>
								<!-- <th>G</th>
								<th>E</th>
								<th>P</th> -->
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
									<!-- <td>{wins}</td>
									<td>{draws}</td>
									<td>{losses}</td> -->
									<td class="text-center">{group_points}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		{/each}
	{/await}
</section>
