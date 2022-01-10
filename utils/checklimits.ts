import { Point } from "../src/point";

export const checkLimits = (position:Point) => {
	if (
		position.x < 740 && 
		position.x > 10 &&
		position.y < 500 &&
		position.y > 0
	) {
		return true;
	}
	return false;
};