import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { range, map, assign } from 'lodash';

import { Space } from '../../types/space';

@Injectable()
export class BoardService {
	private stateStream: BehaviorSubject<Space[][]>;

	get state$(): Observable<Space[][]> {
		return this.stateStream.asObservable();
	}

	constructor() {
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
		const board = map(this.stateStream.getValue(), row => map(row, cell => {
			if (space === cell) {
				return assign({}, space, { selected: true });
			}
			return assign({}, cell, { selected: false });
		}));
		this.stateStream.next(board);
	}
}
