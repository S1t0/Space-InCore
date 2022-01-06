
const arrayAliens =[
  "XXXXXXXXXXX",
  "XXXXXXXXXXX",
  "XXXXXXXXXXX",
  "XXXXXXXXXXX",
  "XXXXXXXXXXX",
].map(f=>f.split(""));
const imagenAlien = require("../public/img/alien.png");
export class Alien {
  constructor(canvas) {
    this.actorAlto = 35;
    this.actorAncho = 30;
     this.position = {
       y: 40,
       x: 55,
     };
    this.image= new Image();
    this.image.src=imagenAlien;
    this.moveSpeed =0.3;
    this.aliens=arrayAliens;
  }
  draw(ctx, delta) {
    for(let x=0;x<arrayAliens.length;x++){
      for(let i=0;i<arrayAliens[x].length;i++){
        arrayAliens[x][i]=="X" && ctx.drawImage(this.image,(i*this.position.x)+100,(x*this.position.y)+50,this.actorAlto,this.actorAncho);
      }
    }
  }
  
  update(ctx,canvas) {
   this.arrayAliens+this.moveSpeed;
    }
} 
 

            