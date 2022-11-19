<script>
	export let form;
	let isSignUp = false;
</script>

<section class="grid place-items-center" style="min-height: 666px;">
	{#if form?.success}
		<div class="alert alert-success shadow-lg">
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="stroke-current flex-shrink-0 h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
				<span>Gracias, tus datos han sido enviados correctamente [código 201]</span>
			</div>
		</div>
	{:else if form?.error}
		<div class="alert alert-error shadow-lg">
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="stroke-current flex-shrink-0 h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
				{#if form?.status == 400 }
					<span>
						Petición no válida, revisa los datos enviados [código 400]
					</span>
				{:else}
					<span> Servidor no disponible, comunícate con un administrador [código 503] </span>
				{/if}
			</div>
		</div>
	{/if}
	{#if isSignUp}
		<form action="?/register" method="POST" class="container text-center grid place-items-center">
			<input type="text" placeholder="usuario" class="input input-bordered input-primary w-full max-w-xs my-3" name="username" />
			<input type="password" placeholder="contraseña" class="input input-bordered input-primary w-full max-w-xs my-3" name="password" />
			<input type="password" placeholder="repite contraseña" class="input input-bordered input-primary w-full max-w-xs my-3" name="passwordConfirm" />
			<button class="btn btn-primary my-3">regístrate</button>
			<button on:click={() => (isSignUp = !isSignUp)} class="link link-primary-content my-3"
				>¿ya tienes cuenta? inicia sesión</button
			>
		</form>
	{:else}
		<form action="?/login" method="POST" class="container text-center grid place-items-center">
			<input type="text" placeholder="usuario" class="input input-bordered input-primary w-full max-w-xs my-3" name="username" />
			<input type="password" placeholder="contraseña" class="input input-bordered input-primary w-full max-w-xs my-3" name="password" />
			<button class="btn btn-primary my-3">login</button>
			<button on:click={() => (isSignUp = !isSignUp)} class="link link-primary-content my-3"
				>¿todavía no tienes cuenta? regístrate</button
			>
		</form>
	{/if}
</section>
