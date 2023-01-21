<script lang="ts">

export let item;
export let index;

</script>

<gridlayout rows="*, auto, auto" backgroundColor={item.color} class="item">
    <stacklayout row="1">
        <label>Odd {index}/{item.index}</label>
        <label row="1" text={item.name} class="title" />
        <label row="1" text={item.color} class="subtitle" />
    </stacklayout>
</gridlayout>