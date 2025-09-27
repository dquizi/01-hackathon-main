import { Module } from '../core/module'

export class GreetingsModule extends Module {
  constructor() {
    super('greetings', 'Приветствие')
  }

  trigger() {
    // alert('Привет!')
    const messageHTML = document.createElement('div');
    // messageHTML.className = 'menu-item';
    messageHTML.style.right = '0';
    messageHTML.style.pisition = 'absolute';
    messageHTML.style.width = '200px';
    messageHTML.style.height = '200px';
    messageHTML.style.margin = '10px';
    messageHTML.style.background = '#1b1a1a';
    messageHTML.style.color = '#eee';
    messageHTML.style.display = 'block';
    messageHTML.style.boxSizing = 'border-box';
    // const text = 'Hello';
    messageHTML.textContent = 'Hello'.repeat(40);
    document.body.append(messageHTML);
  }
}