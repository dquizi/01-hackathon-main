import './styles.css'
import { ContextMenu } from './menu.js'
import { GreetingsModule } from './modules/greetings.module.js'

const menuHTML = new ContextMenu('#menu')

menuHTML.add(new GreetingsModule())