<script>
    import '../app.css';
    import Navbar from '$lib/components/Navbar.svelte';
    import Modal from '$lib/components/Modal.svelte';
    export let data;
</script>

<Navbar user={data?.user} />
<slot />
<Modal title="¡ importante !">
    <p class="py-3">felicidades a los primeros ganadores razel813 y EdgarDiaz.</p>
    <p class="py-3">el día sábado comienzan los octavos y con esto la segunda fase de la quiniela que abarcará hasta la final, en esta fase no habrá opción para elegir empate, únicamente el ganador de cada partido, no importa si se gana en 90 minutos, 120 minutos o tiros penales.</p>
    <p class="py-3">si están interesados en premio $$$ avísenme <a class="link-info" href="https://wa.me/5215628314694" rel="external">aquí</a>, esta fase también tendrá un costo de $50, recuerden que no es obligatorio entrar con dinero, también se puede jugar nada más por la diversión.</p>
    <p class="py-3">buena suerte</p>
</Modal>
