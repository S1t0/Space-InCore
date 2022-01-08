export class FPSviewer{
    constructor(position){
        this.position=position;
    }
	update(){};
	draw(ctx,delta) {
		const fps = (1 / delta).toFixed(0);
		 ctx.font='18px Arial';
		 ctx.fillStyle="white";
		 ctx.fillText(`FPS:${fps}`, this.position.x, this.position.y);
	}
}
