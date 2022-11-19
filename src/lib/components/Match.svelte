<script>
	import {base} from '$app/paths';
	import dayjs from 'dayjs';
	import mx from 'dayjs/locale/es-mx';
	import relativeTime from 'dayjs/plugin/relativeTime';
	dayjs.locale(mx);
	dayjs.extend(relativeTime);

	export let match;
	export let link;

	const isPlayable = (date) => {
		if (dayjs(date).diff(dayjs(), 'w', true) < 1) return true;
		else return false;
	};

	const handleSelect = async (e) => {
		await fetch(`${base}/api/update`, {
			method: 'post',
			body: JSON.stringify({
				[e.target.name]: e.target.value
			}),
			headers: {
				'content-type': 'application/json'
			}
		});
	};
</script>

<div class="card w-80 bg-base-100 shadow-xl image-full my-4">
	<figure><img src={`/stadiums/${match.venue}.jpg`} alt="venue" /></figure>
	<div class="card-body">
		<h2 class="card-title self-center">
			{dayjs(match.datetime).format('dddd DD/MM - HH:mm')}
		</h2>
		<p class="self-end">{match.id} | {match.stage_name}</p>
		<p class="italic">{match.venue}</p>
		<div class="container grid grid-cols-5 m-3 justify-start items-center">
			{#if match.home_team_country}
				<img
					src={`/flags/${match.home_team_country}.svg`}
					alt={match.home_team_country}
					class="w-8 my-1"
				/>
				<p class="text-xl col-span-3">{match.home_team.name}</p>
				<p class="text-2xl bold">{match.home_team.goals || `-`}</p>
			{:else}
				<p class="text-xl col-span-4">{match.home_team.name}</p>
				<p class="text-2xl bold">{match.home_team.goals || `-`}</p>
			{/if}
			{#if match.away_team_country}
				<img
					src={`/flags/${match.away_team_country}.svg`}
					alt={match.away_team_country}
					class="w-8 m-y1"
				/>
				<p class="text-xl col-span-3">{match.away_team.name}</p>
				<p class="text-2xl bold">{match.away_team.goals || `-`}</p>
			{:else}
				<p class="text-xl col-span-4">{match.away_team.name}</p>
				<p class="text-2xl bold">{match.away_team.goals || `-`}</p>
			{/if}
		</div>
		{#if isPlayable(match.datetime)}
			<select
				class="select select-bordered w-full max-w-xs"
				style="color:hsl(var(--p))"
				name={match.id}
				on:change={handleSelect}
				bind:value={link[match.id]}
			>
				<option disabled selected>elige tu resultado</option>
				<option value={match.home_team_country}>{match.home_team.name}</option>
				<option value="DRAW">Empate</option>
				<option value={match.away_team_country}>{match.away_team.name}</option>
			</select>
		{/if}
	</div>
</div>
