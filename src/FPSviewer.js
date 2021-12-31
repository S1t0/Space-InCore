export class FPSviewer{
    constructor(position){
        this.position=position;
    }
	draw(ctx,delta) {
		const fps = (1 / delta).toFixed(2);
		 ctx.font='15px Arial';
		 ctx.fillStyle="black";
		 ctx.fillText(`FPS:${fps}`, this.position.x, this.position.y);
	}
}
