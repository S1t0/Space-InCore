import { Nave } from ("./src/Nave");

window.onload=()=>{
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

let actor= new Nave();
actor.draw(ctx);

}