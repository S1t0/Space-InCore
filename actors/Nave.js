
const arrayNaves =[
  "XXXXXXXXXXX",
  "XXXXXXXXXXX",
  "XXXXXXXXXXX",
  "XXXXXXXXXXX",
  "XXXXXXXXXXX",
  "XXXXXXXXXXX"
].map(f=>f.split(""));
const imagenNave = require("../public/img/alien.png");
export class Nave {
  constructor(canvas) {
    this.actorAlto = 25;
    this.actorAncho = 25;
     this.position = {
       y: 40,
       x: 55,
     };
    this.image= new Image();
    this.image.src=imagenNave;
    this.moveSpeed = 0.3;
    this.naves=arrayNaves;
  }
  draw(ctx, delta) {
    // let position = this.position;
    // let alto = this.actorAlto;
    // let ancho = this.actorAncho;
    //ctx.drawImage(this.image,this.position.x,this.position.y,40,40);
    for(let x=1;x<arrayNaves.length;x++){
      for(let i=1;i<arrayNaves[x].length;i++){
        arrayNaves[x][i]=="X" && ctx.drawImage(this.image,(i*this.position.x)+70,(x*this.position.y)+30,this.actorAlto,this.actorAncho);
      }
    }
  }
  update() {

   }
}   

            