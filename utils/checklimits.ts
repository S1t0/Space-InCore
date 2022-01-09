import { Point } from "../src/point";

export const checkLimits = (position:Point) => {
	if (
		position.x < 800 && 
		position.x > 0 &&
		position.y < 600 &&
		position.y > 0
	) {
		return true;
	}
	return false;
};