<script>
    export let controls

    const entries = Object.entries($controls)
    const isNotEmpty = entries.length > 0

    const is = {
        number : (value) => typeof value === 'number',
        boolean : (value) => typeof value === 'boolean',
        text : (value) => typeof value === 'string' && !value.startsWith('#'),
        color : (value) => typeof value === 'string' && value.startsWith('#'),
        range : (value) => typeof value === 'object',
    }

    function updateControls(e) {
        let {value, type , dataset, checked, step, min, max} = e.target

        switch (type) {
            case 'number':
                $controls[dataset.key] = Number(value)
                break
            case 'range':
                if (e.type === 'wheel') {
                    let direction = e.deltaY < 0 ? 'up' : 'down'

                    if (direction === 'up') {
                        $controls[dataset.key].value < max && ($controls.value += +step)
                    }else{
                        $controls[dataset.key].value > min && ($controls.value -= +step)
                    }
                }else {
                    $controls[dataset.key].value = +value
                }
                break
            case 'checkbox':
                $controls[dataset.key] = checked
                break

            default:
                $controls[dataset.key] = value
        }
    }
</script>

{#if isNotEmpty}
     <div class="fixed right-3 px-5 py-7 backdrop-blur-lg border-2 border-gray-600 grid gap-10 rounded-md">
        {#each entries as [label, value]}
             {#if is.number(value)}
             <label>
                {label}
                 <input on:change={updateControls} on:wheel={updateControls} type="number" value={$controls[label]} data-key={label}/>
             </label>
             {/if}
             {#if is.boolean(value)}
             <label>
                {label}
                 <input on:change={updateControls} type="checkbox" checked={$controls[label]} data-key={label}/>
             </label>
             {/if}
             {#if is.text(value)}
             <label>
                {label}
                 <input on:input={updateControls} type="text" value={$controls[label]} data-key={label}/>
             </label>
             {/if}
             {#if is.range(value)}
             <label>
                {label}
                 <input 
                 on:input={updateControls} 
                 on:wheel={updateControls} 
                 type="range" 
                 value={$controls[label].value} 
                 min={$controls[label].min} 
                 max={$controls[label].max} 
                 step={$controls[label].step} 
                 data-key={label}/>
             </label>
             {/if}
             {#if is.color(value)}
             <label>
                {label}
                 <input on:input={updateControls} type="color" value={$controls[label]} data-key={label}/>
             </label>
             {/if}
        {/each}
     </div>
{/if}