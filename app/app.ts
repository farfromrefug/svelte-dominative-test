/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

import { ContentView, aliasTagName, globalRegister, makeListView, registerDOMElement, registerElement } from 'dominative';
import App from './App.svelte';
import { CollectionView, CollectionViewTraceCategory } from '@nativescript-community/ui-collectionview';
import { Event } from 'undom-ng';
import { Application, Trace } from '@nativescript/core';

Event.prototype.initCustomEvent = Event.prototype.initEvent;
globalRegister(global);
registerElement('CollectionView', CollectionView);
// registerElement('ContentView', ContentView);
registerDOMElement('dummy');

aliasTagName((tag) => tag.toLowerCase());

Trace.addCategories(CollectionViewTraceCategory);
Trace.enable();

//@ts-ignore

//@ts-ignore
const app = new App({ target: document });
//@ts-ignore
Application.run({ create: () => app.$$.root });
