export class Nave {
  constructor(canvas) {
    this.actorAlto = 15;
    this.actorAncho = 15;
    this.position = {
      y: 55,
      x: 400,
    };
    this.moveSpeed = 0.3;
    this.canvas = canvas;
    
  }

  draw(ctx, delta) {
    let position = this.position;
    let alto = this.actorAlto;
    let ancho = this.actorAncho;
    ctx.fillStyle = "green";
    ctx.fillRect(position.x, position.y, ancho, alto);
  }
  update(canvas) {
    this.position.x=(this.position.x +this.moveSpeed) %800;
   
    
  }
}
