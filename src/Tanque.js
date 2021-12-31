import { checkLimits } from "../utils/limits";
export class Tanque {
  constructor() {
    this.actorAlto = 35;
    this.actorAncho = 25;
    this.position = {
      y: 550,
      x: 400,
    };
    this.moveSpeed=25;
  }
  
  draw(ctx,delta) {
    let position = this.position;
    let alto = this.actorAlto;
    let ancho = this.actorAncho;
    ctx.fillStyle = "green";
    ctx.fillRect(position.x, position.y, alto, ancho);
  }

  keyboard_event(key) {
    switch (key) {
      case `ArrowRight`:
        console.log("right");
        console.log(this.position.x);
        this.position.x =this.position.x + this.moveSpeed;
        break;
      case `ArrowLeft`:
        console.log("left");
        console.log(this.position.x);
        this.position.x = this.position.x - this.moveSpeed;
        break;
    }
  }
}
