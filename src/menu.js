import { Menu } from './core/menu'

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector)

    document.addEventListener('contextmenu', event => {
      console.log(event)
      event.preventDefault()
      this.open(event.clientX, event.clientY)
    })
  }

  open(x, y) {
    this.el.style.top = y + 'px'
    this.el.style.left = x + 'px'
    this.el.classList.add('open')
  }

  close() {
    this.el.classList.remove('open')
  }

  add(module) {
    this.el.insertAdjacentHTML('beforeend', module.toHTML())
    this.el.querySelector(`[data-type="${module.type}"]`)
      .addEventListener('click', () => module.trigger())
  }
}