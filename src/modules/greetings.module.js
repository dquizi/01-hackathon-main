import { Module } from '../core/module'

export class GreetingsModule extends Module {
  constructor() {
    super('greetings', 'Приветствие')
  }

  trigger() {
    alert('Привет!')
  }
}