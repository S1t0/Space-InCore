import { checkLimits } from "../utils/limits";
export class Tanque {
  constructor(canvas) {
    this.actorAlto = 35;
    this.actorAncho = 25;
    this.position = {
      y: 550,
      x: 400,
    };
    this.moveSpeed=10;
    this.canvas=canvas;
  }
  
  draw(ctx,delta) {
    let position = this.position;
    let alto = this.actorAlto;
    let ancho = this.actorAncho;
    ctx.fillStyle = "green";
    ctx.fillRect(position.x, position.y, alto, ancho);
  }

  keyboard_event(key) {
    let newPosX=this.position.x + this.moveSpeed;
    switch (key) {
      case `ArrowRight`:
        console.log("right");
        //console.log(this.position.x);
        console.log(newPosX,canvas.width-50);
        if((this.canvas.width)-25>newPosX){
          this.position.x =newPosX;
        }
        break;
      case `ArrowLeft`:
        console.log("left");
        console.log(this.position.x);
        newPosX=this.position.x-this.moveSpeed;
        if(0<=newPosX){
          this.position.x =newPosX;
        }
        break;
    }
  }
}
