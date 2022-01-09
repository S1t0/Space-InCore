import { Tanque } from "../actors/Tanque";
import { FPSviewer } from "../utils/FPSviewer";
import { Alien } from "../actors/Aliens";
import { Disparo } from "../actors/Disparo";

window.onload = () => {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  let actors = [
    new Tanque(ctx),
    new Alien(ctx),
    new FPSviewer({ x: 15, y: 25 }),
    //new Disparo(canvas),
  ];

  let lastFrame = 0;
  const render = (time) => {
    let delta = (time - lastFrame) / 1000;
    lastFrame = time;
    actors.forEach((e) => {
      e.update(delta);
    });
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
