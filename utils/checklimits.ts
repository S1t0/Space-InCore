import { Point } from "../src/point";

export const checkLimits = (position:Point) => {
	if (
		position.x < 780 && 
		position.x > 10 &&
		position.y < 600 &&
		position.y > 0
	) {
		return true;
	}
	return false;
};