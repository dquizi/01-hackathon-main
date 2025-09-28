import './styles.css'
import { ContextMenu } from './menu'
import { MessageModule } from './modules/message.module'
import { BackgroundModule } from './modules/background.module'

const menuHTML = new ContextMenu('#menu')

menuHTML.add(new MessageModule())
menuHTML.add(new BackgroundModule())