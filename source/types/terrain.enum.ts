export interface TerrainTypes {
	clear: Terrain;
	forest: Terrain;
	mountain: Terrain;
	
	all(): Terrain[];
}

export const terrain: TerrainTypes = {
	clear: { 
		id: 1,
		name: 'Clear',
		class: 'grass',
	},
	forest: { 
		id: 2,
		name: 'Forest',
		class: 'forest',
	},
	mountain: { 
		id: 3,
		name: 'Mountain',
		class: 'mountain',
	},

	all: () => [terrain.clear, terrain.forest, terrain.mountain],
}

export interface Terrain {
	id: number;
	name: string;
	class: string;
}