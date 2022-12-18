<script>
    import '../app.css';
    import Navbar from '$lib/components/Navbar.svelte';
    import Modal from '$lib/components/Modal.svelte';
    export let data;
</script>

<Navbar user={data?.user} />
<slot />
<Modal title="¡ importante !">
    <p class="py-3">felicidades al ganador crsmax</p>
    <p>gracias a todos por participar</p>
</Modal>
