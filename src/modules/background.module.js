import { Module } from '../core/module'
import { random } from '../utils'

export class BackgroundModule extends Module {
  constructor() {
    super('back-ground-color-change', 'Поменять цвет')
  }

  trigger() {
    // document.body.style.backgroundColor = `rgb(${random(1, 256)}, ${random(1, 256)}, ${random(1, 256)})`

    // либо замудрить:
    let randomRGB = []
    const createColorIndex = () => {
      for (let i=0; i<3; i++) {
        randomRGB.push(random(1, 256));
      }
    }
    createColorIndex()
    const color = randomRGB.join(',');
    document.body.style.backgroundColor = `rgb(${color})`
  }
}


