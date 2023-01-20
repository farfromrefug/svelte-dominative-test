<script lang="ts">
    import { document as _document } from 'dominative'
    import { tick } from 'svelte'

    let wrappers = []

    let dummyWrapper
    const createView = (event) => {
        console.log('creating...')
        event.view = _document.createElement('ContentView')
    }

    const itemLoading = (event) => {
        const {view, item, index} = event

        if (!view.__inited) {
            view.__inited = true
            view.__key = wrappers.length
            wrappers = [...wrappers, view]
            tick().then(() => {
                view.appendChild(view.__wrapper.firstElementChild)
            })
        }

        // for triggering update on the specific item only
        // actually wrappers[view.__key] === view
        wrappers[view.__key].__item = item
        wrappers[view.__key].__index = index
    }
</script>

<itemtemplate on:createView={createView} on:itemLoading={itemLoading} {...$$props}>
    <dummy bind:this={dummyWrapper}>
        {#each wrappers as wrapper, index (wrapper.__key)}
        <dummy bind:this={wrappers[index].__wrapper}>
            <slot item={wrapper.__item} index={wrapper.__index}></slot>
        </dummy>
        {/each}
    </dummy>
</itemtemplate>