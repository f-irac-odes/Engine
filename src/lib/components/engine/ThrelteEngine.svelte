<script>
    import {Gui, guiStore} from '../gui/index'
    import {Engine, gameEnded, gameSarted} from './index'
    import {Canvas} from '@threlte/core'
    import {Debug, World} from '@threlte/rapier'
  
    const gui = guiStore({
          pysics : true,
          debug: false,
      })
  </script>
<div class="w-[100vw] h-[100vh]">
    <Canvas>
        {#if $gui.pysics === true}
        <World>
            <Debug/>
            <Engine/>
        </World>
        {/if}
    </Canvas>
</div>
  
<Gui controls={gui}/>