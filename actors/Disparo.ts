import { IActor } from "../src/Actor";
import { Point } from "../src/point";
import { Tanque } from "./Tanque";
export class Disparo  {
  disparos:Disparo[];
  velocidad:number;
  position:Point;
  ancho:number;
  alto:number;
  constructor(position:Point) {   
    this.disparos = [];
    this.velocidad = 2;
    this.position = {
      x: 400,
      y: 400,
    };
    this.ancho = 2;
    this.alto = 5;
  }
  update(ctx:CanvasRenderingContext2D,delta:number) {
  };
  draw(ctx:CanvasRenderingContext2D, delta:number) {
    for (let i = 0; i < this.disparos.length; i++) {
      let dis = this.disparos[i];
      ctx.fillStyle = "red";
      ctx.fillRect(
        this.position.x,
        this.position.y - this.velocidad,
        this.ancho,
        this.alto
      );
      if (dis[i] <= 0) {
        this.disparos.splice(i, 1);
      }
    }
  }
  // keyboard_event(key:string) {
  //   switch (key) {
  //     case `Space`:
  //       this.disparos.push(new Disparo(canvas));
  //       break;
  //   }
  // }
}
