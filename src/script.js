import { Tanque } from "./Tanque";
import {FPSviewer} from "./FPSviewer";
window.onload=()=>{
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
//ctx.fillStyle = "green";
//ctx.fillRect(100, 100, 10, 10);
let actor= new Tanque();
//console.log(actor);
//actor.draw(ctx);
let fps= new FPSviewer({x:15,y:25});


let lastFrame=0;
const render=(time)=>{
    let delta=(time-lastFrame)/1000;
    lastFrame=time;
    console.log(delta);
    ctx.clearRect(0, 0, 800, 600);
    actor.draw(ctx,delta);
    window.requestAnimationFrame(render)
}
window.requestAnimationFrame(render);

document.body.addEventListener("keydown", (e) => {
actor.keyboard_event(e.key) });
}