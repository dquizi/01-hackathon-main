import {Module} from '../core/module'

export class AlertModule extends Module {
  constructor() {
    super('alert', 'Показать alert')
  }

  trigger() {
    alert('Привет!')
  }
}