export class Tanque {
  constructor(canvas) {
    this.actorAlto = 25;
    this.actorAncho = 35;
    this.position = {
      y: 505,
      x: 400,
    };
    this.moveSpeed=10;
    this.canvas=canvas;
  }
  update(){};
  draw(ctx,delta) {
    let position = this.position;
    let alto = this.actorAlto;
    let ancho = this.actorAncho;
    ctx.fillStyle = "green";
    ctx.fillRect(position.x, position.y, ancho, alto);
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
