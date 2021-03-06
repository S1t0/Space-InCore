import { Actor, IActor } from "../src/Actor";
import { Point } from "../src/point";
import { Disparo } from "./Disparo";
import {actors} from "../src/script";
const imagenTanque = require("../public/img/nave.png"); //me daba fallo con el import


export class Tanque extends Actor implements IActor {
  actorAlto: number;
  actorAncho: number;
  position: Point;
  moveSpeed: number;
  canvas: CanvasRenderingContext2D;
  image: HTMLImageElement;
  canvasAncho: 800;
  static newPosX: number;
  static newPox: number;
  constructor(position: Point, canvas: CanvasRenderingContext2D) {
    super(position);
    this.actorAlto = 40;
    this.actorAncho = 70;
    this.position = position;

    this.image = new Image();
    this.image.src = imagenTanque;
    this.moveSpeed = 5;
    this.canvas = canvas;
    this.canvasAncho = 800;
  }
  update(ctx: CanvasRenderingContext2D, delta: number) {}
  draw(ctx: CanvasRenderingContext2D, delta: number) {
    let position = this.position;
    let alto = this.actorAlto;
    let ancho = this.actorAncho;
    ctx.drawImage(this.image, this.position.x, this.position.y, alto, ancho);
  }

  keyboard_event(key: string) {
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
          case ` `:
            for(let i=0;i<Disparo.length;i++){
              actors.push(new Disparo({x:newPosX+11,y:500}))
              
            }
            break;
      };
    }
  }

