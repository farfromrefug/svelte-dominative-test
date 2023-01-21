/* @ts-nocheck */

/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

import App from './App.svelte';
import { CollectionView, CollectionViewTraceCategory } from '@nativescript-community/ui-collectionview';
import { Application, Trace } from '@nativescript/core';
import { Label } from '@nativescript-community/ui-label';
import CollectionViewElement from '@nativescript-community/ui-collectionview/svelte';
import { registerNativeViewElement } from 'svelte-native/dom';
import { svelteNative } from 'svelte-native';
CollectionViewElement.register();
registerNativeViewElement('htmllabel', () => Label as any, null, {}, { override: true });


// Trace.addCategories(CollectionViewTraceCategory);
// Trace.enable();

//@ts-ignore

//@ts-ignore
svelteNative(App, {});
