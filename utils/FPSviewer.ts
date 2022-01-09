import { Actor } from "../src/Actor";
import { Point } from "../src/point";
export class FPSviewer extends Actor{
	update(ctx:CanvasRenderingContext2D,delta:number){};
	draw(ctx:CanvasRenderingContext2D,delta:number) {
		const fps = (1 / delta).toFixed(0);
		 ctx.font='18px Arial';
		 ctx.fillStyle="white";
		 ctx.fillText(`FPS:${fps}`, this.position.x, this.position.y);
	}
}
