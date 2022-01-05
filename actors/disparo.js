import { Tanque } from "../actors/Tanque";
const imagenBala = require("../public/img/disparo.png");
class Disparo {
  constructor(canvas, { x, y }) {
    this.disparos = [];
    this.velocidad = 2;
    this.ancho = 2;
    this.alto = 5;
    this.posicion = Tanque;
    this.image = new Image();
    this.image.src = imagenBala;
  }
  keyboard_event(key) {
    switch (key) {
      case `Space`:
        ctx.drawImage(this.image,500,500,alto, ancho);
          }
       
    }
  }

