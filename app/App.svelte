<script lang="ts">
    import { ObservableArray } from '@nativescript/core';
    import { GC } from '@nativescript/core/utils';
    import CustomComponent from './CustomComponent.svelte';
    import {Template} from 'svelte-native/components';
    let items = new ObservableArray([
        { index: 0, name: 'TURQUOISE', color: '#1abc9c' },
        { index: 1, name: 'EMERALD', color: '#2ecc71' },
        { index: 2, name: 'PETER RIVER', color: '#3498db' },
        { index: 3, name: 'AMETHYST', color: '#9b59b6' },
        { index: 4, name: 'WET ASPHALT', color: '#34495e' },
        { index: 5, name: 'GREEN SEA', color: '#16a085' },
        { index: 6, name: 'NEPHRITIS', color: '#27ae60' },
        { index: 7, name: 'BELIZE HOLE', color: '#2980b9' },
        { index: 8, name: 'WISTERIA', color: '#8e44ad' },
        { index: 9, name: 'MIDNIGHT BLUE', color: '#2c3e50' },
        { index: 10, name: 'SUN FLOWER', color: '#f1c40f' },
        { index: 11, name: 'CARROT', color: '#e67e22' },
        { index: 12, name: 'ALIZARIN', color: '#e74c3c' },
        { index: 13, name: 'CLOUDS', color: '#ecf0f1' },
        { index: 14, name: 'CONCRETE', color: '#95a5a6' },
        { index: 15, name: 'ORANGE', color: '#f39c12' },
        { index: 16, name: 'PUMPKIN', color: '#d35400' },
        { index: 17, name: 'POMEGRANATE', color: '#c0392b' },
        { index: 18, name: 'SILVER', color: '#bdc3c7' },
        { index: 19, name: 'ASBESTOS', color: '#7f8c8d' }
    ]);

    function onItemTap({ index, item }) {
        console.log(`EVENT TRIGGERED: Tapped on ${index} ${item.name}`);
    }
    function onLoadMoreItems() {
        console.log('EVENT TRIGGERED: onLoadMoreItems()');
        items.push(...items);
    }

    function refresh() {
        const test = items.slice();
        console.log('test', test.length);
        items = new ObservableArray([
            { index: 0, name: 'TURQUOISE', color: '#1abc9c' },
            { index: 1, name: 'EMERALD', color: '#2ecc71' },
            { index: 2, name: 'PETER RIVER', color: '#3498db' },
            { index: 3, name: 'AMETHYST', color: '#9b59b6' },
            { index: 4, name: 'WET ASPHALT', color: '#34495e' },
            { index: 5, name: 'GREEN SEA', color: '#16a085' },
            { index: 6, name: 'NEPHRITIS', color: '#27ae60' },
            { index: 7, name: 'BELIZE HOLE', color: '#2980b9' },
            { index: 8, name: 'WISTERIA', color: '#8e44ad' },
            { index: 9, name: 'MIDNIGHT BLUE', color: '#2c3e50' },
            { index: 10, name: 'SUN FLOWER', color: '#f1c40f' },
            { index: 11, name: 'CARROT', color: '#e67e22' },
            { index: 12, name: 'ALIZARIN', color: '#e74c3c' },
            { index: 13, name: 'CLOUDS', color: '#ecf0f1' },
            { index: 14, name: 'CONCRETE', color: '#95a5a6' },
            { index: 15, name: 'ORANGE', color: '#f39c12' },
            { index: 16, name: 'PUMPKIN', color: '#d35400' },
            { index: 17, name: 'POMEGRANATE', color: '#c0392b' },
            { index: 18, name: 'SILVER', color: '#bdc3c7' },
            { index: 19, name: 'ASBESTOS', color: '#7f8c8d' }
        ]);
    }

    // function onNavigatedFrom() {
    //     console.log('onNavigatedFrom')
    //     setTimeout(()=>{
    //         GC()
    //     }, 10)
    // }
</script>

<page>
    <!-- <actionbar title="Simple Grid" /> -->
    <!-- <gridlayout rows="auto, *, auto, *"> -->
        <!-- <label row="0">Keyed</label> -->
        <gridlayout row="1" backgroundColor="red">
            <collectionview {items} colWidth="50%" rowHeight="200" on:loadMoreItems={onLoadMoreItems} backgroundColor="blue" itemTemplateSelector="$index % 2 ? 'odd' : 'even'">
                    <Template let:item let:index key="odd">
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
                                    <htmllabel text={`Odd ${item.index}`}/>
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
                    </Template>
                    <Template let:item let:index key="even">
                        <gridlayout rows="*, auto, auto" backgroundColor={item.color} class="item">
                                <htmllabel text={`Even ${item.index}`}/>
                                <htmllabel text={`Even ${item.index}`}/>
                                <htmllabel text={`Even ${item.index}`}/>
                                <htmllabel text={`Even ${item.index}`}/>
                                <htmllabel text={`Even ${item.index}`}/>
                                <htmllabel text={`Even ${item.index}`}/>
                                <htmllabel text={`Even ${item.index}`}/>
                                <htmllabel text={`Even ${item.index}`}/>
                                <stacklayout row="1">
                                    <htmllabel text={`Even ${item.index}`}/>

                                <htmllabel row="1" text={item.name} class="title" />
                                <htmllabel row="1" text={item.color} class="subtitle" />
                            </stacklayout>
                            <button text="button" />
                                <button text="button" />
                                <button text="button" />
                                <button text="button" />
                                <button text="button" />
                                <button text="button" />
                                <button text="button" />
                        </gridlayout>
                    </Template>
            </collectionview>
        </gridlayout>
        <!-- <label row="2">NonKeyed, ListView</label>
        <gridlayout row="3" backgroundColor="green">
            <listview {items} on:loadMoreItems={onLoadMoreItems} backgroundColor="blue">
                <Template let:item let:index>
                    <gridlayout rows="*, auto, auto" backgroundColor={item.color} class="item">
                        <stacklayout row="1">
                            <label>{index}/{item.index}</label>
                            <label row="1" text={item.name} class="title" />
                            <label row="1" text={item.color} class="subtitle" />
                        </stacklayout>
                    </gridlayout>
                </Template>
            </listview>
        </gridlayout> -->
    <!-- </gridlayout> -->
</page>
