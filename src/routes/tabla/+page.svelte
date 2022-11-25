<script>
	import { matches } from '$lib/stores';
	import Spinner from '$lib/components/Spinner.svelte';
	export let data;
</script>

<div class="overflow-x-auto">
	<table class="table table-compact table-zebra w-full">
		<thead>
			<tr>
				<th>nombre</th>
				<th>puntos</th>
				{#await $matches}
					<Spinner />
				{:then matches}
					{#each matches as match}
						{#if match.stage_name === 'First stage'}
							<th>{match.home_team_country || 'TBD'} - {match.away_team_country || 'TBD'}</th>
						{/if}
					{/each}
				{:catch error}
					<p style="color: red">{error.message}</p>
				{/await}
			</tr>
		</thead>
		<tbody class="text-center">
			{#each data.predictions.sort((a, b) => b.points - a.points) as { name, data, isPaying, points }}
				<tr>
					<th class="text-left">
						{#if isPaying}
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
					<td>{data[1] || '-'}</td>
					<td>{data[2] || '-'}</td>
					<td>{data[3] || '-'}</td>
					<td>{data[4] || '-'}</td>
					<td>{data[5] || '-'}</td>
					<td>{data[6] || '-'}</td>
					<td>{data[7] || '-'}</td>
					<td>{data[8] || '-'}</td>
					<td>{data[9] || '-'}</td>
					<td>{data[10] || '-'}</td>
					<td>{data[11] || '-'}</td>
					<td>{data[12] || '-'}</td>
					<td>{data[13] || '-'}</td>
					<td>{data[14] || '-'}</td>
					<td>{data[15] || '-'}</td>
					<td>{data[16] || '-'}</td>
					<td>{data[17] || '-'}</td>
					<td>{data[18] || '-'}</td>
					<td>{data[19] || '-'}</td>
					<td>{data[20] || '-'}</td>
					<td>{data[21] || '-'}</td>
					<td>{data[22] || '-'}</td>
					<td>{data[23] || '-'}</td>
					<td>{data[24] || '-'}</td>
					<td>{data[25] || '-'}</td>
					<td>{data[26] || '-'}</td>
					<td>{data[27] || '-'}</td>
					<td>{data[28] || '-'}</td>
					<td>{data[29] || '-'}</td>
					<td>{data[30] || '-'}</td>
					<td>{data[31] || '-'}</td>
					<td>{data[32] || '-'}</td>
					<td>{data[33] || '-'}</td>
					<td>{data[34] || '-'}</td>
					<td>{data[36] || '-'}</td>
					<td>{data[35] || '-'}</td>
					<td>{data[38] || '-'}</td>
					<td>{data[37] || '-'}</td>
					<td>{data[40] || '-'}</td>
					<td>{data[39] || '-'}</td>
					<td>{data[42] || '-'}</td>
					<td>{data[41] || '-'}</td>
					<td>{data[44] || '-'}</td>
					<td>{data[43] || '-'}</td>
					<td>{data[46] || '-'}</td>
					<td>{data[45] || '-'}</td>
					<td>{data[48] || '-'}</td>
					<td>{data[47] || '-'}</td>
				</tr>
			{/each}
		</tbody>
		<tfoot>
			<tr>
				<th>nombre</th>
				<th>puntos</th>
				{#await $matches}
					<Spinner />
				{:then matches}
					{#each matches as match}
						{#if match.stage_name === 'First stage'}
							<th>{match.home_team_country || 'TBD'} - {match.away_team_country || 'TBD'}</th>
						{/if}
					{/each}
				{:catch error}
					<p style="color: red">{error.message}</p>
				{/await}
			</tr>
		</tfoot>
	</table>
</div>
