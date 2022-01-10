import { Tanque } from "../actors/Tanque";
import { Actor } from "../src/Actor";
import { FPSviewer } from "../utils/FPSviewer";
import { Alien } from "../actors/Aliens";
import { Disparo } from "../actors/Disparo";

export let actors: Actor[] = [];


window.onload = () => {
   var canvas = document.getElementById("canvas") as HTMLCanvasElement;
   var ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  actors.push(new Tanque({ x: 400, y: 500 }, ctx));
  actors.push(new FPSviewer({ x: 15, y: 25 }));
  for (let fila = 0; fila < 5; fila++) {//hago el bucle en el script, porque al hacerlo la clase Alien, no se movian correctamente
    for (let colum = 0; colum < 11; colum++) {
      actors.push(new Alien({ x: 40 + colum * 50, y: 40 + fila * 50 }, ctx));
    }
  }
  console.log(Tanque.newPosX);
  let lastFrame = 0;
  const render = (time: number) => {
    let delta = (time - lastFrame) / 1000;
    lastFrame = time;
    actors.forEach((e) => e.update(ctx, delta));
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    actors.forEach((e) => {
      e.draw(ctx, delta);
    });
   

    window.requestAnimationFrame(render);
  };
  window.requestAnimationFrame(render);

  document.body.addEventListener("keydown", (e) => {
    actors.forEach((a) => {
      a.keyboard_event(e.key);
    });
  });
};
