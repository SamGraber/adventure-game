export interface TerrainTypes {
	clear: Terrain;
	forest: Terrain;
	mountain: Terrain;
	
	all(): Terrain[];
}

export const terrain: TerrainTypes = {
	clear: { 
		id: 1,
		class: 'grass',
	},
	forest: { 
		id: 2,
		class: 'forest',
	},
	mountain: { 
		id: 3,
		class: 'mountain',
	},

	all: () => [terrain.clear, terrain.forest, terrain.mountain],
}

export interface Terrain {
	id: number;
	class: string;
}