import { Module } from '../core/module'

export class MessageModule extends Module {
  constructor() {
    super('message', 'Сообщение')
    this.messageHTML = document.createElement('div');
  }

  trigger() {
    if (!document.body.contains(this.messageHTML)) {
      this.messageHTML.style.position = 'fixed';
      this.messageHTML.style.right = '0';
      this.messageHTML.style.bottom = '0';
      this.messageHTML.style.margin = '20px';
      this.messageHTML.style.fontSize = '30px';
      this.messageHTML.style.padding = '15px 20px';
      this.messageHTML.style.borderRadius = '8px';
      this.messageHTML.style.background = '#5f5f5fff';
      this.messageHTML.style.color = '#eee';
      this.messageHTML.style.boxShadow = '0 3px 8px rgba(0, 0, 0, 0.5)';

      document.body.append(this.messageHTML);

      this.messageHTML.textContent = 'Добро пожаловать на наш сайт!';
      setTimeout(() => {
        this.messageHTML.textContent = 'До взлома вашего аккаунта осталось 3 секунды';
      }, 1000)
      setTimeout(() => {
        this.messageHTML.textContent = 'До взлома вашего аккаунта осталось 2 секунды';
      }, 2000)
      setTimeout(() => {
        this.messageHTML.textContent = 'До взлома вашего аккаунта осталось 1 секунды';
      }, 3000)
      setTimeout(() => {
        this.messageHTML.textContent = 'Спасибо за сотрудничество! ;)';
      }, 4000)
      setTimeout(() => {
        this.messageHTML.remove();
      }, 5000)
    }
  }
}