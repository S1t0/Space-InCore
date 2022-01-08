import { script } from "../src/script";
import { alienImage } from "../public/img/alien.png";

const arrayAliens = [];
const imagenAlien = require("../public/img/alien.png");
export class Alien {
  constructor(canvas) {
    this.actorAlto = 35;
    this.actorAncho = 30;
    this.position = {
      y: 40,
      x: 55,
    };
    this.image = new Image();
    this.image.src = imagenAlien;
    this.moveSpeed = 0.2;
    this.aliens = arrayAliens;
    this.canvas = canvas;
  }

  draw(ctx, delta) {
    for (let fila = 0; fila < 5; fila++) {
      for (let colum = 0; colum < 11; colum++) {
        const ali = ctx.drawImage(
          this.image,
          colum * this.position.x + 100,
          fila * this.position.y + 50,
          this.actorAlto,
          this.actorAncho
        );
        arrayAliens.push(ali);
      }
    }
  }
  update(ctx, delta) {}
}
