import {Module} from '../core/module'
import { random } from '../utils'

export class ShapeModule extends Module {
    constructor() {
        super('random-shape', 'Случайная фигура');
            this.shape = document.createElement('div');
  }

  trigger() {
    // randomSize
    const size = random(100, 500);

    // randomColor
    let randomRGB = []
    const createColorIndex = () => {
        for (let i=0; i<3; i++) {
            randomRGB.push(random(1, 256));
        }
    }
    createColorIndex();
    const color = randomRGB.join(',');

    // randomBorderRadius
    const borderRadius = Math.round(random(0, 50) / 10) * 10;

    // randomPosition
    let position = 0;
    const setPosition = () => position = random(30, 60);
    
    const setFigure = () => {
        this.shape.style.width = `${size}px`;
        this.shape.style.height = `${size}px`;
        this.shape.style.background = `rgb(${color})`;
        this.shape.style.borderRadius = `${borderRadius}%`
        this.shape.style.position = 'absolute'
        this.shape.style.top = `${setPosition()}%`;
        this.shape.style.left = `${setPosition()}%`;
        
        console.log(borderRadius)
        document.body.append(this.shape);
    }
    
    !document.body.contains(this.shape) ? setFigure() : this.shape.remove(); setFigure()
  }
}