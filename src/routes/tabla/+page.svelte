<script>
	import { matches, predictions } from '$lib/stores';
</script>

<div class="overflow-x-auto">
	<table class="table table-compact table-zebra w-full">
		<thead>
			<tr>
				<th>nombre</th>
				<th>1</th>
				<th>2</th>
				<th>3</th>
				<th>4</th>
				<th>puntos</th>
			</tr>
		</thead>
		<tbody>
			{#await $predictions}
				<p>...waiting</p>
			{:then predictions}
				{#each predictions as item}
					<tr>
						<td>{item.name}</td>
						<td>{item.data[1]}</td>
						<td>{item.data[2]}</td>
						<td>{item.data[3]}</td>
						<td>{item.data[4]}</td>
						<td>10</td>
					</tr>
				{/each}
			{:catch error}
				<p style="color: red">{error.message}</p>
			{/await}
		</tbody>
		<!-- <tfoot>
			<tr>
				<th />
				<th>Name</th>
				<th>Job</th>
				<th>company</th>
				<th>location</th>
				<th>Last Login</th>
				<th>Favorite Color</th>
			</tr>
		</tfoot> -->
	</table>
</div>
