import { Terrain } from './terrain.enum';
import { Unit } from './unit';

export interface Space {
	x: number;
	y: number;
	terrain: Terrain;
	selected?: boolean;
	visible?: boolean;
	contains?: Unit;
}
