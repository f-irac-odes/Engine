<script>
    import {T,  useThrelte} from '@threlte/core'
	import { AutoColliders, RigidBody } from '@threlte/rapier';

    let {scene} = useThrelte();
</script>

<RigidBody>
    <AutoColliders>
        <T.Mesh>
            <T.MeshBasicMaterial color="red"/>
            <T.BoxGeometry/>
        </T.Mesh>
    </AutoColliders>
</RigidBody>




