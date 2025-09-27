import './styles.css'
import { ContextMenu } from './menu.js'
import { AlertModule } from './modules/alert'

const menuHTML = new ContextMenu('#menu')

menuHTML.add(new AlertModule())