<script lang="ts">
export let item
export let index
</script>

<gridlayout rows="*, auto, auto" backgroundColor={item.color} class="item">
	<htmllabel text={`Odd ${item.index}`}/>
	<htmllabel text={`Odd ${item.index}`}/>
	<htmllabel text={`Odd ${item.index}`}/>
	<htmllabel text={`Odd ${item.index}`}/>
	<htmllabel text={`Odd ${item.index}`}/>
	<htmllabel text={`Odd ${item.index}`}/>
	<htmllabel text={`Odd ${item.index}`}/>
	<htmllabel text={`Odd ${item.index}`}/>
	<htmllabel text={`Odd ${item.index}`}/>
	<stacklayout row="1">
		<htmllabel text={`Odd ${index}`}/>
		<htmllabel row="1" text={item.name} class="title" />
		<htmllabel row="1" text={item.color} class="subtitle" />
	</stacklayout>
	<button text="button" />
	<button text="button" />
	<button text="button" />
	<button text="button" />
	<button text="button" />
	<button text="button" />
</gridlayout>

<!-- <svelte:options immutable={true}/> -->