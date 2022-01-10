import { Point } from "../src/point";
export class Disparo {
  velocidad: number;
  position: Point;
  ancho: number;
  alto: number;
  constructor(position: Point) {
    this.velocidad = 2;
    this.ancho = 4;
    this.alto = 5;
    this.position=position;
    
  }

  update(ctx: CanvasRenderingContext2D, delta: number) {
    let newPos:Point={
      x:this.position.x,
      y:this.position.y-this.velocidad
    };
    this.position=newPos;
  }
  draw(ctx: CanvasRenderingContext2D, delta: number) {
    ctx.fillStyle = "red";
    ctx.fillRect(
      this.position.x,
      this.position.y,
      this.ancho,
      this.alto
     
    );
  }
  keyboard_event(key:string){
    //let newPosY = this.position.y + this.velocidad;
    

}
}
function delta(ctx: any, CanvasRenderingContext2D: { new(): CanvasRenderingContext2D; prototype: CanvasRenderingContext2D; }, delta: any, number: any) {
  throw new Error("Function not implemented.");
}

