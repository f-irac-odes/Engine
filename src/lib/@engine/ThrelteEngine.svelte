<script>
    import {Canvas, T} from '@threlte/core'
    import {useProgress, OrbitControls} from '@threlte/extras'
    import {World, Debug} from '@threlte/rapier'
    import {Gui, guiStores} from '../@gui/index' 

    export let controls = guiStores({
        debug : true,
    })

    const {progress} = useProgress()
</script>

{#if $progress < 1}
    <slot name="LOADING">
        <div class="wrapper">
            <p>Loading</p>
        </div>
    </slot>
{/if}

<Canvas>
    <World>
        {#if $controls.debug === true}
            <Debug/>
        {/if}
        <slot name="SCENE">
            <T.PerpectiveCamera makeDefault position={[0, 10, 13]} fov={20}>
                <OrbitControls/>
            </T.PerpectiveCamera>
            <T.Mesh>
                <T.MeshStandardMaterial/>
                <T.BoxGeometry/>
            </T.Mesh>
        </slot>
    </World>
</Canvas>

<Gui {controls}/>

<style>
    	.wrapper {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background-color: white;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		align-items: center;
		justify-content: center;
		color: black;
	}
</style>