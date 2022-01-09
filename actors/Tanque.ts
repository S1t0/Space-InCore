import { Actor } from "../src/Actor";
import { Point } from "../src/point";
import { Disparo } from "./Disparo";


const imagenTanque = require("../public/img/nave.png"); //me daba fallo con el import
export class Tanque{
  actorAlto:number;
  actorAncho:number;
  position:Point;
  moveSpeed:number;
  canvas:CanvasRenderingContext2D;
  image:HTMLImageElement;
  canvasAncho:800;
  constructor(canvas:CanvasRenderingContext2D) {
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
    this.canvasAncho=800;
  }
  update() {}
  draw(ctx:CanvasRenderingContext2D, delta:number) {
    let position = this.position;
    let alto = this.actorAlto;
    let ancho = this.actorAncho;
    ctx.drawImage(this.image, this.position.x, this.position.y, alto, ancho);
  }

  keyboard_event(key:string) {
    let newPosX = this.position.x + this.moveSpeed;
    switch (key) {
      case `ArrowRight`:
        if (this.canvasAncho - 25 > newPosX) {
          this.position.x = newPosX;
        }
        break;
      case `ArrowLeft`:
        newPosX = this.position.x - this.moveSpeed;
        if (0 <= newPosX) {
          this.position.x = newPosX;
        }
        break;
    }
  }
}
