import { Nave } from "./Nave";
window.onload=()=>{
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
//ctx.fillStyle = "green";
//ctx.fillRect(100, 100, 10, 10);
let actor= new Nave();
console.log(actor);
actor.draw(ctx);

setInterval(() => {
    ctx.clearRect(0, 0, 500, 400);
    actor.draw(ctx);
    console.log("Bucle de renderizado");
}, 10)

document.body.addEventListener("keydown", (e) => {
actor.keyboard_event(e.key) });
}