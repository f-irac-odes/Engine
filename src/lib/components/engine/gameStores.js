import { writable } from "svelte/store";

export function gameSarted(started){
    return writable(started)
}

export function gameEnded(ended){
    return writable(ended)
}
