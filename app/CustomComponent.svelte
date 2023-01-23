<script lang="ts">
    export let item;
    export let index;
</script>

<gridlayout rows="*, auto, auto" backgroundColor={item.color} class="item">
    <htmllabel text={`Odd ${item.index}`} />
    <htmllabel html={`Odd ${item.index}`} />
    <htmllabel html={`Odd ${item.index}`} />
    <htmllabel html={`Odd ${item.index}`} />
    <htmllabel html={`Odd ${item.index}`} />
    <htmllabel html={`Odd ${item.index}`} />
    <htmllabel html={`Odd ${item.index}`} />
    <htmllabel html={`Odd ${item.index}`} />
    <htmllabel html={`Odd ${item.index}`} />
    <stacklayout row="1">
        <htmllabel text={`Odd ${index}`} />
        <htmllabel row="1" html={`<span style="color:${item.color}">${item.name}</span>`} class="title" backgroundColor="black" />
        <htmllabel row="1" html={`<span style="color:${item.color}">${item.color}</span>`} class="subtitle" backgroundColor="black" />
    </stacklayout>
    <button text="button">
        <span text={`Button ${item.index}`} />
    </button>
    <button text="button">
        <span text={`Button ${item.index}`} />
    </button>
    <button text="button">
        <span text={`Button ${item.index}`} />
    </button>
    <button text="button">
        <span text={`Button ${item.index}`} />
    </button>
    <button text="button">
        <span text={`Button ${item.index}`} />
    </button>
    <button text="button">
        <span text={`Button ${item.index}`} />
    </button>
</gridlayout>

<!-- <svelte:options immutable={true}/> -->
