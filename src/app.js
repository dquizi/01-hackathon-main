import './styles.css'
import { ContextMenu } from './menu.js'
import { BackgroundModule } from './modules/background.module.js'
import { MessageModule } from './modules/message.module'
import { ClicksModule } from './modules/clicks.module.js'
import { SoundModul } from './modules/sound.modul.js'

menuHTML.add(new BackgroundModule())
menuHTML.add(new ClicksModule())
menuHTML.add(new SoundModul())
menuHTML.add(new MessageModule())

const menuHTML = new ContextMenu('#menu')

