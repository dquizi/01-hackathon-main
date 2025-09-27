import { Module } from '../core/module'

export class GreetingsModule extends Module {
  constructor() {
    super('alert', 'Приветствие')
  }

  trigger() {
    alert('Привет!')
  }
}