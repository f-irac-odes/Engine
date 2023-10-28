import { writable } from "svelte/store";

export function guiStore(values) {
    return writable(values);
}