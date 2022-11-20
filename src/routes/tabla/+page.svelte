<script>
	import { matches, predictions } from '$lib/stores';
</script>

<div class="overflow-x-auto">
	<table class="table table-compact table-zebra w-full">
		<thead>
			<tr>
				<th>nombre</th>
				{#await $matches}
					<p>...waiting</p>
				{:then matches}
					{#each matches as match}
						{#if match.stage_name === 'First stage'}
							<th>{match.home_team_country || 'TBD'} - {match.away_team_country || 'TBD'}</th>
						{/if}
					{/each}
				{:catch error}
					<p style="color: red">{error.message}</p>
				{/await}
				<th>puntos</th>
			</tr>
		</thead>
		<tbody class="text-center">
			{#await $predictions}
				<p>...waiting</p>
			{:then predictions}
				{#each predictions as item}
					<tr>
						<td>{item.name}</td>
						<td>{item.data[1] || '-'}</td>
						<td>{item.data[2] || '-'}</td>
						<td>{item.data[3] || '-'}</td>
						<td>{item.data[4] || '-'}</td>
						<td>{item.data[5] || '-'}</td>
						<td>{item.data[6] || '-'}</td>
						<td>{item.data[7] || '-'}</td>
						<td>{item.data[8] || '-'}</td>
						<td>{item.data[9] || '-'}</td>
						<td>{item.data[10] || '-'}</td>
						<td>{item.data[11] || '-'}</td>
						<td>{item.data[12] || '-'}</td>
						<td>{item.data[13] || '-'}</td>
						<td>{item.data[14] || '-'}</td>
						<td>{item.data[15] || '-'}</td>
						<td>{item.data[16] || '-'}</td>
						<td>{item.data[17] || '-'}</td>
						<td>{item.data[18] || '-'}</td>
						<td>{item.data[19] || '-'}</td>
						<td>{item.data[20] || '-'}</td>
						<td>{item.data[21] || '-'}</td>
						<td>{item.data[22] || '-'}</td>
						<td>{item.data[23] || '-'}</td>
						<td>{item.data[24] || '-'}</td>
						<td>{item.data[25] || '-'}</td>
						<td>{item.data[26] || '-'}</td>
						<td>{item.data[27] || '-'}</td>
						<td>{item.data[28] || '-'}</td>
						<td>{item.data[29] || '-'}</td>
						<td>{item.data[30] || '-'}</td>
						<td>{item.data[31] || '-'}</td>
						<td>{item.data[32] || '-'}</td>
						<td>{item.data[33] || '-'}</td>
						<td>{item.data[34] || '-'}</td>
						<td>{item.data[36] || '-'}</td>
						<td>{item.data[35] || '-'}</td>
						<td>{item.data[38] || '-'}</td>
						<td>{item.data[37] || '-'}</td>
						<td>{item.data[40] || '-'}</td>
						<td>{item.data[39] || '-'}</td>
						<td>{item.data[42] || '-'}</td>
						<td>{item.data[41] || '-'}</td>
						<td>{item.data[44] || '-'}</td>
						<td>{item.data[43] || '-'}</td>
						<td>{item.data[46] || '-'}</td>
						<td>{item.data[45] || '-'}</td>
						<td>{item.data[48] || '-'}</td>
						<td>{item.data[47] || '-'}</td>
						<!-- <td>{item.data[49] || '-'}</td>
						<td>{item.data[50] || '-'}</td>
						<td>{item.data[51] || '-'}</td>
						<td>{item.data[52] || '-'}</td>
						<td>{item.data[53] || '-'}</td>
						<td>{item.data[54] || '-'}</td>
						<td>{item.data[55] || '-'}</td>
						<td>{item.data[56] || '-'}</td>
						<td>{item.data[57] || '-'}</td>
						<td>{item.data[58] || '-'}</td>
						<td>{item.data[59] || '-'}</td>
						<td>{item.data[60] || '-'}</td>
						<td>{item.data[61] || '-'}</td>
						<td>{item.data[62] || '-'}</td>
						<td>{item.data[63] || '-'}</td>
						<td>{item.data[64] || '-'}</td> -->
						<td>-</td>
					</tr>
				{/each}
			{:catch error}
				<p style="color: red">{error.message}</p>
			{/await}
		</tbody>
		<tfoot>
			<tr>
				<th>nombre</th>
				{#await $matches}
					<p>...waiting</p>
				{:then matches}
					{#each matches as match}
						{#if match.stage_name === 'First stage'}
							<th>{match.home_team_country || 'TBD'} - {match.away_team_country || 'TBD'}</th>
						{/if}
					{/each}
				{:catch error}
					<p style="color: red">{error.message}</p>
				{/await}
				<th>puntos</th>
			</tr>
		</tfoot>
	</table>
</div>
