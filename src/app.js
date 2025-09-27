import './styles.css'
import { ContextMenu } from './menu.js'
import { GreetingsModule } from './modules/greetings.module.js'
import { BackgroundModule } from './modules/background.module.js'
import { ClicksModule } from './modules/clicks.module.js'

const menuHTML = new ContextMenu('#menu')

menuHTML.add(new GreetingsModule())
menuHTML.add(new BackgroundModule())
menuHTML.add(new ClicksModule())