export class Nave {
  constructor() {
    this.actorAlto = 35;
    this.actorAncho = 25;
    this.position = {
      y: 550,
      x: 400,
    };
    this.moveSpeed=25;
  }

  draw(ctx) {
    let position = this.position;
    let alto = this.actorAlto;
    let ancho = this.actorAncho;
    ctx.fillStyle = "green";
    ctx.fillRect(position.x, position.y, alto, ancho);
    console.log(ctx);
  }

  keyboard_event(key) {
    switch (key) {
      case `ArrowRight`:
        console.log("right");
        this.position.x =(this.position.x + this.moveSpeed);
        break;
      case `ArrowLeft`:
        console.log("left");
        this.position.x = this.position.x - this.moveSpeed;
        break;
    }
  }
}
