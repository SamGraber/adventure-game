import { Terrain } from './terrain.enum';

export interface Space {
	x: number;
	y: number;
	terrain: Terrain;
	selected?: boolean;
	visible?: boolean;
}
