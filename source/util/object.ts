import { assign } from 'lodash';

export function set<T>(object: T, updateObject: any): T {
	return assign({}, object, updateObject);
}
