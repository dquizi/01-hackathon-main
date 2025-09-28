import { Module } from '../core/module'
import { random } from '../utils'

export class BackgroundModule extends Module {
  constructor() {
    super('back-ground-color-change', 'Поменять цвет')
  }

  trigger() {
    const randomColor = random(1, 256);
    document.body.style.backgroundColor = `rgb(${randomColor}, ${randomColor}, ${randomColor})`
  }
}


