import { Module } from '../core/module'

export class GreetingsModule extends Module {
  constructor() {
    super('greetings', 'Приветствие')
  }

  trigger() {
    // alert('Привет!')
    const messageHTML = document.createElement('div');
    // messageHTML.className = 'menu-item';
    messageHTML.style.possision = 'bottom'
    messageHTML.textContent = 'hello'
    document.body.append(messageHTML);
  }
}