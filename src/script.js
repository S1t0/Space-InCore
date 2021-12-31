import { Tanque } from "./Tanque";
import {FPSviewer} from "./FPSviewer";
window.onload=()=>{
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

let actors=[
    new Tanque(),
    new FPSviewer({x:15,y:25}) 
];

 


let lastFrame=0;
const render=(time)=>{
    let delta=(time-lastFrame)/1000;
    lastFrame=time;
    console.log(delta);
    ctx.clearRect(0, 0, 800, 600);
    actors.forEach(e => { e.draw(delta,ctx) });
    window.requestAnimationFrame(render)
}
window.requestAnimationFrame(render);

document.body.addEventListener("keydown", (e) => {
    actors.forEach(a=> { a.keyboard_event(e.key) });
});

// document.body.addEventListener("keydown", (e) => {
// actors.keyboard_event(e.key) });
//
}