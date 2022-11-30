<script>
	export let title
</script>

<input type="checkbox" id="my-modal-6" class="modal-toggle" checked />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg">{title}</h3>
    <slot>
    	<p class="py-4">placeholder</p>
    </slot>
    <div class="modal-action">
      <label for="my-modal-6" class="btn">cerrar</label>
    </div>
  </div>
</div>