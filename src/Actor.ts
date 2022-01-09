import { Point } from "./point";
export interface IActor{
    position:Point;
    update?:(ctx:CanvasRenderingContext2D,delta:number) => void;
    keyboard_event?:(key:string)=>void;
    draw:(ctx:CanvasRenderingContext2D, delta:number)=>void;

}
export class Actor implements IActor{
    position:Point;
    constructor(position:Point){
        this.position=position;   

    }
    update(ctx:CanvasRenderingContext2D,delta:number){};
    draw(ctx:CanvasRenderingContext2D,delta:number){};
    keyboard_event(key:string){};

}
