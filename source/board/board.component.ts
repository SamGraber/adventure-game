import { Component } from '@angular/core';
import { range, map } from 'lodash';

@Component({
	moduleId: module.id,
	selector: 'ag-board',
	templateUrl: 'board.component.html',
	styleUrls: ['board.component.css'],
})
export class BoardComponent {
	board: string[][];

	constructor() {
		const rows = range(0, 10);
		this.board = map(rows, row => {
			const cols = range(0, 10);
			return map(cols, col => `${row} - ${col}`);
		});
	}
}
