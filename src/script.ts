import { Tanque } from "../actors/Tanque";
import { FPSviewer } from "../utils/FPSviewer";
import { Alien } from "../actors/Aliens";
window.onload = () => {
  var canvas= document.getElementById("canvas") as HTMLCanvasElement;
  var ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

  let actors = [
    new Tanque({x:400,y:500}),
    new Alien({x:55,y:40}),
    new FPSviewer({ x: 15, y: 25 }),
    //new Disparo(canvas),
  ];

  let lastFrame = 0;
  const render = (time:number) => {
    let delta = (time - lastFrame) / 1000;
    lastFrame = time;
    actors.forEach((e) => e.update(ctx,delta));
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
