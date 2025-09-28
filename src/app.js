import './styles.css'
import { ContextMenu } from './menu.js'
import { ClicksModule } from './modules/clicks.module.js'
import { SoundModul } from './modules/sound.modul.js'
import { BackgroundModule } from './modules/background.module.js'
import { MessageModule } from './modules/message.module'

const menuHTML = new ContextMenu('#menu')

menuHTML.add(new ClicksModule())
menuHTML.add(new SoundModul())
menuHTML.add(new BackgroundModule())
menuHTML.add(new MessageModule())