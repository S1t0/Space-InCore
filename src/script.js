import { Tanque } from "../actors/Tanque";
import {FPSviewer} from "../utils/FPSviewer";
import {Nave} from "../actors/Nave";

window.onload=()=>{
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
const naves=[];
for(let i=0;i<5;i++){
    for(let j=0;j<9;j++){
        const nave=new Nave({
            x:j*60,
            y:i*60,
        });
        naves.push(nave)
    }
}


let actors=[
    new Tanque(canvas),
    new FPSviewer({x:15,y:25}),
    new Nave(canvas)
    
];


let lastFrame=0;
const render=(time)=>{
    let delta=(time-lastFrame)/1000;
    lastFrame=time;
    //console.log(delta);
    actors.forEach(e =>{e.update(delta)});
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    actors.forEach(e => { e.draw(ctx,delta) });
    window.requestAnimationFrame(render)
}
window.requestAnimationFrame(render);

document.body.addEventListener("keydown", (e) => {
    actors.forEach(a=> { a.keyboard_event(e.key) });
});

}