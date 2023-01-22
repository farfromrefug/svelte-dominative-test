<script>
	import { document as _document } from 'dominative'
	import { flush } from 'svelte'

	import MakeImmutable from './MakeImmutable.svelte'

	let wrapperViews = []

	const createView = (event) => {
		event.view = _document.createElement('ContentView')
	}

	const itemLoading = (event) => {
		const {view, item, index} = event

		if (view.__inited) {
			wrapperViews[view.__key].__item = item
			wrapperViews[view.__key].__index = index
			flush()
		} else {
			view.__key = wrapperViews.length
			view.__item = item
			view.__index = index
			wrapperViews = [...wrapperViews, view]
			flush()
			if (view.__wrapper.firstElementChild) {
				const renderedView = view.__wrapper.firstElementChild
				view.appendChild(renderedView)
				view.__inited = true
			}
		}
	}
</script>

<itemtemplate on:createView={createView} on:itemLoading={itemLoading} {...$$props}>
	<dummy>
		{#each wrapperViews as wrapperView, index (wrapperView.__key)}
		<dummy bind:this={wrapperViews[index].__wrapper}>
			<MakeImmutable item={wrapperView.__item} index={wrapperView.__index} let:item let:index>
				<slot item={item} index={index}></slot>
			</MakeImmutable>
		</dummy>
		{/each}
	</dummy>
</itemtemplate>