import { script } from "../src/script";
import { Disparo } from "../actors/Disparo";
const imagenTanque = require("../public/img/nave.png"); //me daba fallo con el import
export class Tanque {
  constructor(canvas) {
    this.actorAlto = 40;
    this.actorAncho = 70;
    this.position = {
      y: 505,
      x: 400,
    };

    this.image = new Image();
    this.image.src = imagenTanque;
    this.moveSpeed = 5;
    this.canvas = canvas;
  }
  update() {}
  draw(ctx, delta) {
    let position = this.position;
    let alto = this.actorAlto;
    let ancho = this.actorAncho;
    ctx.drawImage(this.image, this.position.x, this.position.y, alto, ancho);
  }

  keyboard_event(key) {
    let newPosX = this.position.x + this.moveSpeed;
    switch (key) {
      case `ArrowRight`:
        if (this.canvas.width - 25 > newPosX) {
          this.position.x = newPosX;
        }
        break;
      case `ArrowLeft`:
        newPosX = this.position.x - this.moveSpeed;
        if (0 <= newPosX) {
          this.position.x = newPosX;
        }
        break;
      //       case `Space`:
      //       this.disparos.push(new Disparo(canvas));
      //       console.log(keycode);
      //       break;
      // }
    }
  }
}
