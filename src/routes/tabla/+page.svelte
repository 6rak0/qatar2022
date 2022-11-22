<script>
	import { matches, predictions} from '$lib/stores'
		
	const calculateScore = async (item) => {
		const m = [...await $matches]
		let sum = 0
		Object.entries(item).forEach((entry) => {
			let winner
			if (m[entry[0]-1].winner_code){
				winner = m[entry[0]-1].winner_code
			} else {
				winner = 'null'
			}
			if(entry[1] === winner.toUpperCase()){
				sum++
			}
		})
		return sum
	}
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
				{#each predictions as {name, data}}
					<tr>
						<th>{name}</th>
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
						<!-- <td>{data[49] || '-'}</td>
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
						<td>{data[64] || '-'}</td> -->
						{#await calculateScore(data)}
							<p>...waiting</p>
						{:then score}
							<td>{score}</td>
						{:catch error}
							<p style="color: red">{error.message}</p>
						{/await}
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
