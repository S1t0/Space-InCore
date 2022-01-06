import { Tanque } from "./Tanque";
export class Disparo {
  constructor(canvas) {
    this.disparos = [];
    this.velocidad = 2;
    this.position = {
      x:400,
      y:400,
    };
    this.ancho = 2;
    this.alto = 5;
  }
  update() {
  }
  draw(ctx,delta) {
    for (let i = 0; i < this.disparos.length; i++) {
        let dis = this.disparos[i];
        ctx.fillStyle = "red";
        ctx.fillRect(this.position.x, this.position.y-this.velocidad, this.ancho, this.alto);
         if (dis.y <= 0) {
            this.disparos.splice(i, 1);
          }
      }
  }
  keyboard_event(key,draw) {
    switch (key) {
        case `Space`:
        this.disparos.push(new Disparo(canvas));
        console.log(keycode);
        break;
    }
  }
}
