import { Module } from '../core/module'
import buuuImg from '../assets/buuu.png'

export class MessageModule extends Module {
  constructor() {
    super('message', 'Сообщение')
  }
  
  trigger() {
    const messageHTML = document.createElement('div');
    messageHTML.style.position = 'fixed';
    messageHTML.style.right = '0%';
    messageHTML.style.bottom = '0%';
    messageHTML.style.margin = '20px';
    messageHTML.style.fontSize = '30px';
    messageHTML.style.padding = '15px 20px';
    messageHTML.style.borderRadius = '8px';
    messageHTML.style.background = '#353535ff';
    messageHTML.style.color = '#eee';
    messageHTML.style.boxShadow = '0 3px 8px rgba(0, 0, 0, 0.5)';
    messageHTML.style.transition = 'opacity 1s';
    
    document.body.append(messageHTML);
    
    messageHTML.textContent = 'Добро пожаловать на наш сайт!';

    setTimeout(() => {
      messageHTML.textContent = 'До появления скримера 3 секунды';
    }, 1000)
    setTimeout(() => {
      messageHTML.textContent = 'До появления скримера 2 секунды';
    }, 2000)
    setTimeout(() => {
      messageHTML.textContent = 'До появления скримера 1 секунда';
    }, 3000)
    setTimeout(() => {
      messageHTML.style.right = '50%';
      messageHTML.style.bottom = '50%';
      messageHTML.textContent = 'Бу! Испугался!? Не бойся;)';
    }, 4000)
    setTimeout(() => {
      messageHTML.style.opacity = '0';
    }, 5100)
    
    const img = document.createElement('img')
    setTimeout(() => {
      img.src = buuuImg
      img.style.position = 'fixed'
      img.style.bottom = '0%'
      img.style.left = '50%'
      img.style.width = '600px'
      
      document.body.append(img)
    }, 6000)
    
    setTimeout(() => {
      img.remove();
      messageHTML.remove();
    }, 6250)
  }
}