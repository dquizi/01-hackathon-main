import { Module } from '../core/module'
import buuuImg from '../assets/buuu.png'

export class MessageModule extends Module {
  constructor() {
    super('message', 'Сообщение')
    this.messageHTML = document.createElement('div');
  }

  trigger() {
    if (!document.body.contains(this.messageHTML)) {
      this.messageHTML.style.position = 'fixed';
      this.messageHTML.style.right = '0%';
      this.messageHTML.style.bottom = '0%';
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
        this.messageHTML.textContent = 'До появления скримера 3 секунды';
      }, 1000)
      setTimeout(() => {
        this.messageHTML.textContent = 'До появления скримера 2 секунды';
      }, 2000)
      setTimeout(() => {
        this.messageHTML.textContent = 'До появления скримера 1 секунда';
      }, 3000)
      setTimeout(() => {
        this.messageHTML.style.right = '50%';
        this.messageHTML.style.bottom = '50%';
        this.messageHTML.textContent = 'Бу! Испугался!? Не бойся;)';
      }, 4000)
      // setTimeout(() => {
      //   div.style.visibility = 'hidden'
      // }, 5000)
      // setTimeout(() => {
      //   div.style.visibility = 'visible'
      //   this.messageHTML.textContent = ' ';
      //   const JSImageHTML = document.createElement('img');
      //   JSImageHTML.className = 'js-image';
      //   JSImageHTML.src = JS_IMAGE;
      //   this.messageHTML.append(JSImageHTML)
      // }, 6000)
      // setTimeout(() => {
      //   this.messageHTML.remove();
      // },6500)
      setTimeout(() => {
        this.messageHTML.remove();
      }, 4500)
      setTimeout(() => {
        const img = document.createElement('img')
        img.src = buuuImg
        img.alt = 'Buuu'
        img.style.position = 'fixed'
        img.style.top = '50%'
        img.style.left = '50%'
        img.style.transform = 'translate(-50%, -50%)'
        img.style.width = '200px'
        img.style.height = 'auto'
        img.style.zIndex = '1000'
    
        document.body.appendChild(img)
      }, 5000)
      setTimeout(() => {
        img.remove()
      }, 5200)
    }
  }
}