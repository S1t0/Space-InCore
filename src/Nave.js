export class Nave{
    constructor() {
        this.actorAlto=35;
        this.actorAncho=25;
        this.position= {
            y=100,
            x=100
        }
    }


  draw(ctx){
    let position=this.position;
    let alto=this.actorAlto;
    let ancho=this.actorAncho;
    ctx.fillStyle = "green";
    ctx.fillRect(position.x, position.y, alto, ancho);
    }
    

}



            
