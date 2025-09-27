import { Module } from '../core/module'

export class SoundModul extends Module {
  constructor() {
    super('sound', 'Случайный звук')
  }

  trigger() {
    const sounds = ["https://www.fesliyanstudios.com/play-mp3/366", "https://www.fesliyanstudios.com/play-mp3/4896", "https://www.fesliyanstudios.com/play-mp3/382", "https://www.fesliyanstudios.com/play-mp3/384", "https://www.fesliyanstudios.com/play-mp3/385"];

    const soundItem = document.querySelector(`[data-type="sound"]`);

    soundItem.addEventListener('click', () => {
      const randomIndex = Math.floor(Math.random() * sounds.length)
      const audio = new Audio(sounds[randomIndex])
      audio.play()
    })
  }
}