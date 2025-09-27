import {Module} from '../core/module'

export class BackgroundModule extends Module {
    constructor() {
        super('back-ground-color-change', 'Поменять цвет')
    }

    trigger() {
        function getRandomRgb() {
            const red = Math.floor(Math.random() * 256)
            const green = Math.floor(Math.random() * 256)
            const blue = Math.floor(Math.random() * 256)
            return `rgb(${red}, ${green}, ${blue})`
        }
        document.body.style.backgroundColor = getRandomRgb()
    }
}