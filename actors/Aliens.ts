import { Point } from "../src/point";
const arrayAliens = [];
import {Actor, IActor } from "../src/Actor";
const imagenAlien = require("../public/img/alien.png")

export class Alien extends Actor implements IActor {
  actorAlto:number;
  actorAncho:number;
  position:Point;
  image:HTMLImageElement;
  moveSpeed:number;
  aliens:Alien[];
  canvas:CanvasRenderingContext2D;
  constructor(position:Point) {
    super(position)
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
    this.canvas = this.canvas;
  }

  draw(ctx:CanvasRenderingContext2D, delta:number) {
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
  update(ctx:CanvasRenderingContext2D, delta:number) {
    

  }



}
