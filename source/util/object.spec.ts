import { expect } from 'chai';

import { set } from './object';

interface TestObject {
	prop1: string;
	prop2: string;
}

describe('object util', () => {
	describe('set', () => {
		let old: TestObject;
		let updated: TestObject;

		beforeEach(() => {
			old = { prop1: '123', prop2: '456' };
			updated = set(old, { prop2: '789' });
		});

		it('should set the specified properties on the new object', () => {
			expect(updated.prop1).to.equal('123');
			expect(updated.prop2).to.equal('789');
		});

		it('should leave the old object untouched', () => {
			expect(old.prop1).to.equal('123');
			expect(old.prop2).to.equal('456');
		});
	});
});
