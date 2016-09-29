import { Component } from '@angular/core';
import { assign } from 'lodash';

import { Space } from '../types/space';
import { BoardService } from '../services/board/board.service';

@Component({
	moduleId: module.id,
	selector: 'ag-board',
	templateUrl: 'board.component.html',
	styleUrls: ['board.component.css'],
})
export class BoardComponent {
	constructor(public boardService: BoardService) {}

	select(space: Space) {
		console.log('Selected', space)
		this.boardService.selectSpace(space);
	}
}
