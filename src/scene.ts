import { Engine } from '@babylonjs/core/Engines/engine'
import { Scene } from '@babylonjs/core/scene'
import { canvas } from './dom_items'
import { Vector3 } from '@babylonjs/core/Maths/math.vector'
import { Color4 } from '@babylonjs/core/Maths/math.color'
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera'
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight'


export const engine = new Engine(canvas, true)
export const scene = makeScene()


window.addEventListener('resize', () => {
    engine.resize()
})


function makeScene(): Scene {
    const scene = new Scene(engine)
    createCamera(scene)
    createLight(scene)
    setBackground(scene)
    return scene
}

function createCamera(scene: Scene): void {
    const alpha = Math.PI / 4
    const beta = Math.PI / 3
    const radius = 8
    const target = new Vector3(0, 0, 0)

    new ArcRotateCamera(
        'camera1',
        alpha,
        beta,
        radius,
        target,
        scene
    ).attachControl(canvas, true)
}

function createLight(scene: Scene): void {
    new HemisphericLight(
        'light1',
        new Vector3(1, 1, 0),
        scene
    )
}

function setBackground(scene: Scene): void {
    scene.clearColor = new Color4(0, 0, 0, 1)
}

