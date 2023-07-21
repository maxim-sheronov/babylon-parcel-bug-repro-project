import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder"
import { engine, scene } from './scene'
import "@babylonjs/core/Materials/standardMaterial";

async function main(): Promise<void> {
    MeshBuilder.CreateGround(
        'ground',
        { width: 4, height: 4 },
        scene
    )

    engine.runRenderLoop(() => {
        scene.render()
    })
}

main();