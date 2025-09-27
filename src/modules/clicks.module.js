import { Module } from '../core/module'

export class ClicksModule extends Module {
  constructor() {
    super('clicks', 'Клики');
  }

  trigger() {
    alert('Таймер запущен (5 сек)! Делайте клики!');

    let counter = 0;

    setTimeout();

    document.addEventListener('click', () => {
      counter += counter;
    })
  }
}