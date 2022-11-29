<script>
	import { base } from '$app/paths';
	import dayjs from 'dayjs';
	import mx from 'dayjs/locale/es-mx';
	import relativeTime from 'dayjs/plugin/relativeTime';
	dayjs.locale(mx);
	dayjs.extend(relativeTime);

	export let match;
	export let link;

	const isPlayable = (date) => {
		if (dayjs(date).diff(dayjs(), 'm', true) > 5) return true;
		else return false;
	};

	const handleSelect = async (e) => {
		if(isPlayable(match.datetime)){
			await fetch(`${base}/api/update`, {
				method: 'post',
				body: JSON.stringify({
					[e.target.name]: e.target.value
				}),
				headers: {
					'content-type': 'application/json'
				}
			});
		} else return
	};

	const displayGoals = (goals) => {
		if (goals == 0 || goals) {
			if (goals == 0) {
				return 0
			} else return goals
		} else return '-'
	} 
</script>

<div class="card w-72 bg-base-100 shadow-xl image-full m-8">
	<figure><img src={`${base}/stadiums/${match.venue}.jpg`} alt="venue" /></figure>
	<div class="card-body">
		<h2 class="card-title self-center">
			{dayjs(match.datetime).format('dddd DD/MM - HH:mm')}
		</h2>
		<p class="self-end">{match.id} | {match.stage_name}</p>
		<p class="italic">{match.venue}</p>
		<div class="container grid grid-cols-5 m-3 justify-start items-center">
			{#if match.home_team_country}
				<img
					src={`${base}/flags/${match.home_team_country}.svg`}
					alt={match.home_team_country}
					class="w-8 my-1"
				/>
				<p class="text-xl col-span-3">{match.home_team.name}</p>
				<p class="text-2xl bold">{displayGoals(match.home_team.goals)}</p>
			{:else}
				<p class="text-xl col-span-4">{match.home_team.name}</p>
				<p class="text-2xl bold">{match.home_team.goals || '-'}</p>
			{/if}
			{#if match.away_team_country}
				<img
					src={`${base}/flags/${match.away_team_country}.svg`}
					alt={match.away_team_country}
					class="w-8 m-y1"
				/>
				<p class="text-xl col-span-3">{match.away_team.name}</p>
				<p class="text-2xl bold">{displayGoals(match.away_team.goals)}</p>
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
				{#if match.stage_name === 'First stage'}
					<option value="DRAW">Empate</option>
				{/if}
				<option value={match.away_team_country}>{match.away_team.name}</option>
			</select>
		{:else}
			<p class="text-xl bold text-center">elegiste</p>
			{#if link[match.id] === 'DRAW'}
				<div class="draw">
					<p class="text-2xl">empate</p>
				</div>
			{:else}
				<img src={`${base}/flags/${link[match.id]}.svg`} alt="flag" class="w-8 my-1 self-center" />
			{/if}
		{/if}
	</div>
</div>

<style>
	.draw {
		margin: 5px;
		padding: 8px;
		border-radius: 10px;
		background: hsl(var(--p));
		text-align: center;
	}
</style>
