<script>
	export let data;
</script>

<svelte:head>
	<title>Qatar 2022 | tabla de puntuación</title>
</svelte:head>

<div class="overflow-x-auto">
	<table class="table table-compact table-zebra w-full">
		<thead>
			<tr>
				<th>nombre</th>
				<th>puntos</th>
				{#each data.matches.sort((a,b) => a.id - b.id) as match}
					<th>{match.home_team_country || 'TBD'} - {match.away_team_country || 'TBD'}</th>
				{/each}
				<th>puntos</th>
			</tr>
		</thead>
		<tbody class="text-center">
			{#each data.predictions.sort((a, b) => b.points - a.points) as { name, data, isPaying2, points }}
				<tr>
					<th class="text-left">
						{#if isPaying2}
							<div class="indicator">
								<span class="indicator-item indicator-middle indicator-start badge badge-primary"
									>$</span
								>
								<p class="pl-4">{name}</p>
							</div>
						{:else}
							{name}
						{/if}
					</th>
					<td>{points}</td>
					<td>{data[49] || '-'}</td>
					<td>{data[50] || '-'}</td>
					<td>{data[51] || '-'}</td>
					<td>{data[52] || '-'}</td>
					<td>{data[53] || '-'}</td>
					<td>{data[54] || '-'}</td>
					<td>{data[55] || '-'}</td>
					<td>{data[56] || '-'}</td>
					<td>{data[57] || '-'}</td>
					<td>{data[58] || '-'}</td>
					<td>{data[59] || '-'}</td>
					<td>{data[60] || '-'}</td>
					<td>{data[61] || '-'}</td>
					<td>{data[62] || '-'}</td>
					<td>{data[63] || '-'}</td>
					<td>{data[64] || '-'}</td>
					<td>{points}</td>
				</tr>
			{/each}
		</tbody>
		<tfoot>
			<tr>
				<th>nombre</th>
				<th>puntos</th>
				{#each data.matches as match}
					<th>{match.home_team_country || 'TBD'} - {match.away_team_country || 'TBD'}</th>
				{/each}
				<th>puntos</th>
			</tr>
		</tfoot>
	</table>
</div>
