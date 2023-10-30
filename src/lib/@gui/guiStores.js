import { writable } from "svelte/store";

export function guiStores(value){
    return writable(value);
} 