import { Component } from '@angular/core';
import { range, map } from 'lodash';

import { Space } from '../space/space';

@Component({
	moduleId: module.id,
	selector: 'ag-board',
	templateUrl: 'board.component.html',
	styleUrls: ['board.component.css'],
})
export class BoardComponent {
	board: Space[][];

	constructor() {
		const rows = range(0, 10);
		this.board = map(rows, row => {
			const cols = range(0, 10);
			return map(cols, col => {
				return {
					x: col,
					y: row,
				};
			});
		});
	}
}
