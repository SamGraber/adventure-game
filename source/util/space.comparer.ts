import { Space } from '../types/space';

export function spacesAreEqual(space1: Space, space2: Space): boolean {
	if (!space1 || !space2) {
		return space1 === space2;
	}
	
	return space1.x === space2.x
		&& space1.y === space2.y;
}
