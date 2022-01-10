import { Point } from "../src/point";
import { Actor, IActor } from "../src/Actor";
import { checkLimits } from "../utils/checklimits";
const imagenAlien = require("../public/img/alien.png");
export class Alien extends Actor implements IActor {
  actorAlto: number;
  actorAncho: number;
  position: Point;
  image: HTMLImageElement;
  moveSpeed: number;
  aliens: Alien[];
  canvas: CanvasRenderingContext2D;

  constructor(position: Point, canvas: CanvasRenderingContext2D) {
    super(position);
    this.actorAlto = 35;
    this.actorAncho = 30;
    this.position = position;
    this.image = new Image();
    this.image.src = imagenAlien;
    this.moveSpeed = 35;
    this.aliens = [];
    this.canvas = canvas;
  }
  update(ctx: CanvasRenderingContext2D, delta: number) {
    let newPos: Point = {
      x: this.position.x + this.moveSpeed*delta,
      y: this.position.y,
      
    };
    console.log(newPos);
    if (checkLimits(newPos)) {
      this.position.x= newPos.x; 
    }
  }
  draw(ctx: CanvasRenderingContext2D, delta: number) {
    ctx.drawImage(
      this.image,
      this.position.x + 100,
      this.position.y + 50,
      this.actorAlto,
      this.actorAncho
    );
  }

}
