import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Space } from '../../types/space';
import { spacesAreEqual } from '../../util/space.comparer';

@Injectable()
export class SelectedSpaceService {
	private stateStream: BehaviorSubject<Space>;

	get state$(): Observable<Space> {
		return this.stateStream.asObservable();
	}

	get hasSelection(): boolean {
		return !!this.stateStream.getValue();
	}

	constructor() {
		this.stateStream = new BehaviorSubject(null);
	}

	selectSpace(space: Space): Space {
		if (spacesAreEqual(space, this.stateStream.getValue())) {
			this.stateStream.next(null);
			return null;
		}
		this.stateStream.next(space);
		return space;
	}
}
