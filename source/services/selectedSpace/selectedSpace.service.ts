import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Space } from '../../types/space';

@Injectable()
export class SelectedSpaceService {
	private stateStream: BehaviorSubject<Space>;

	get state$(): Observable<Space> {
		return this.stateStream.asObservable();
	}

	constructor() {
		this.stateStream = new BehaviorSubject(null);
	}

	selectSpace(space: Space) {
		this.stateStream.next(space);
	}
}
