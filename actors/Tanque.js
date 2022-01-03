import {disparo} from "./disparo"

const imagenTanque = require("../public/img/nave.png");
export class Tanque {
  constructor(canvas) {
    this.actorAlto = 35;
    this.actorAncho = 55;
    this.position = {
      y: 505,
      x: 400,
    };
    this.image= new Image();
    this.image.src=imagenTanque;
    this.moveSpeed=10;
    this.canvas=canvas;
  }
  update(){};
  draw(ctx,delta) {
    let position = this.position;
    let alto = this.actorAlto;
    let ancho = this.actorAncho;
    ctx.drawImage(this.image,this.position.x,this.position.y,alto, ancho);
    // ctx.fillStyle = "green";
    // ctx.fillRect(position.x, position.y, ancho, alto);
  }

  keyboard_event(key) {
    let newPosX=this.position.x + this.moveSpeed;
    switch (key) {
      case `ArrowRight`:
        if((this.canvas.width)-25>newPosX){
          this.position.x =newPosX;
        }
        break;
      case `ArrowLeft`:
        newPosX=this.position.x-this.moveSpeed;
        if(0<=newPosX){
          this.position.x =newPosX;
        }
        break;
       
       
        
    }
  }
}
