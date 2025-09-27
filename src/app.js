import './styles.css'

// import { ContextMenu } from './menu'

// import { Module } from './core/module'

// const that = new ContextMenu()

// document.addEventListener('contextmenu', (event) => {
//     event.preventDefault();
//     that.open()
//     testModule.toHTML()
// })

// const testModule = new Module('color', 'Меняем цвет')

import { ContextMenu } from './menu.js'
import { AlertModule } from './modules/alert'

const menu = new ContextMenu('#menu')

menu.add(new AlertModule())