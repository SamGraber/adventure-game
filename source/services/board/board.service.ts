import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { range, map } from 'lodash';

import { Space } from '../../types/space';
import { set } from '../../util/object';
import { SelectedSpaceService } from '../selectedSpace/selectedSpace.service';

@Injectable()
export class BoardService {
	private stateStream: BehaviorSubject<Space[][]>;

	get state$(): Observable<Space[][]> {
		return this.stateStream.asObservable();
	}

	constructor(private selectedSpaceService: SelectedSpaceService) {
		this.createBoard();
	}

	createBoard(): void {
		const rows = range(0, 10);
		const board = map(rows, row => {
			const cols = range(0, 10);
			return map(cols, col => {
				return {
					x: col,
					y: row,
				};
			});
		});
		this.stateStream = new BehaviorSubject(board);
	}

	updateSpace(space: Space) {
		const board = map(this.stateStream.getValue(), row => map(row, cell => {
			if (space === cell) {
				return space;
			}
			return cell;
		}));
		this.stateStream.next(board);
	}

	selectSpace(space: Space) {
		if (this.selectedSpaceService.hasSelection) {
			// act
			// return;
		}

		const selectedSpace = this.selectedSpaceService.selectSpace(space);
		const board = map(this.stateStream.getValue(), row => map(row, cell => {
			if (selectedSpace === cell) {
				return set(selectedSpace, { selected: true });
			}
			return set(cell, { selected: false });
		}));
		this.stateStream.next(board);
	}
}
