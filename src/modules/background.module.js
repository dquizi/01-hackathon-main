import { Module } from '../core/module'
import { random } from '../utils'

export class BackgroundModule extends Module {
  constructor() {
    super('back-ground-color-change', 'Поменять цвет')
  }

  trigger() {
    document.body.style.backgroundColor = `rgb(random(1, 256), random(1, 256), random(1, 256))`
  }
}


