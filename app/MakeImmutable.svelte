<script>
	export let item
	export let index
</script>

<slot item={item} index={index}/>

<svelte:options immutable/>