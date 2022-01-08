export const checkLimits = (position) => {
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