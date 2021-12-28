import {Nave} from "./Nave";
const lastFrame=0;

const render=(time)=>{
    let delta=(time-lastFrame);
    lastFrame=time;
    ctx.clearRect(0, 0, 500, 400);
    actor.draw(ctx);
    console.log("Bucle de renderizado");
    window.requestAnimationFrame(render);
}
window.requestAnimationFrame(render);