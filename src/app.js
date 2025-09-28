import './styles.css'
import { ContextMenu } from './menu'
import { ClicksModule } from './modules/clicks.module'
import { ShapeModule } from './modules/shape.module'
import { SoundModule } from './modules/sound.module'
import { BackgroundModule } from './modules/background.module'
import { MessageModule } from './modules/message.module'

const menuHTML = new ContextMenu('#menu')

menuHTML.add(new ClicksModule())
menuHTML.add(new ShapeModule())
menuHTML.add(new SoundModule())
menuHTML.add(new BackgroundModule())
menuHTML.add(new MessageModule())