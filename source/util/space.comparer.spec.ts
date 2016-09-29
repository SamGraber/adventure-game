import { expect } from 'chai';

import { spacesAreEqual } from './space.comparer';

describe('space comparer', () => {
	it('should return true if the x and y coordinates are the same', () => {
		const first: any = { x: 1, y: 1 };
		const second: any = { x: 1, y: 1 };

		expect(spacesAreEqual(first, second)).to.be.true;
	});

	it('should return true if the x coordinate is different', () => {
		const first: any = { x: 1, y: 1 };
		const second: any = { x: 2, y: 1 };

		expect(spacesAreEqual(first, second)).to.be.false;
	});

	it('should return true if the y coordinate is different', () => {
		const first: any = { x: 1, y: 1 };
		const second: any = { x: 1, y: 2 };

		expect(spacesAreEqual(first, second)).to.be.false;
	});

	it('should return true if both are null', () => {
		expect(spacesAreEqual(null, null)).to.be.true;
	});

	it('should return false if one is null', () => {
		const first: any = { x: 1, y: 1 };
		expect(spacesAreEqual(first, null)).to.be.false;
	});
});
