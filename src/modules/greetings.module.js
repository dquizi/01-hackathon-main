import { Module } from '../core/module'

export class GreetingsModule extends Module {
  constructor() {
    super('gteetings', 'Приветствие')
  }

  trigger() {
    alert('Привет!')
  }
}