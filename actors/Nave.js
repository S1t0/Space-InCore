const imagenNave = require("../public/img/alien.png");
export class Nave {
  constructor(canvas) {
    this.actorAlto = 15;
    this.actorAncho = 15;
     this.position = {
       y: 55,
       x: 400,
     };
    this.image= new Image();
    this.image.src=imagenNave;
    this.moveSpeed = 0.3;
    this.canvas = canvas;
    this.movimientoX = 25;
    this.movimientoY = 20;

    
  }

  draw(ctx, delta) {
    let position = this.position;
    let alto = this.actorAlto;
    let ancho = this.actorAncho;
     //ctx.fillStyle = "green";
     //ctx.fillRect(position.x, position.y, ancho, alto);
   ctx.drawImage(this.image,this.position.x,this.position.y,40,40);
    const naves=[];
for(let i=0;i<5;i++){
    for(let j=0;j<9;j++){
        const nave=new Nave({
            x:i*60,
            y:j*60,
        });
        naves.push(nave)
    }
}
  }
  update(canvas,delta) {
     this.position.x= this.position.x + this.moveSpeed;
     let newPos=this.position.x + this.moveSpeed;
     if(newPos<this.canvas.width){
       this.position.x=newPos
       console.log(newPos);
     }
     else{
       this.position.x-this.moveSpeed;
       console.log(newPos);
    }
    // const leftLimit=this.position.x % width ===0;
    // //const rightLimit=this.position.x % width === width-1;
    // if(leftLimit){
    //   this.position.x=(this.position.x-this.moveSpeed)
    // }
    
   
    
  }

}               