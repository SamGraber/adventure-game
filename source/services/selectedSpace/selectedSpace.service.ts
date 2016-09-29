import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Space } from '../../types/space';
import { spacesAreEqual } from '../../util/space.comparer';

@Injectable()
export class SelectedSpaceService {
	private selectedSpaceStream: BehaviorSubject<Space>;
	private hoveredSpaceStream: BehaviorSubject<Space>;

	get selected(): Observable<Space> {
		return this.selectedSpaceStream.asObservable();
	}

	get hovered(): Observable<Space> {
		return this.hoveredSpaceStream.asObservable();
	}

	get hasSelection(): boolean {
		return !!this.selectedSpaceStream.getValue();
	}

	constructor() {
		this.selectedSpaceStream = new BehaviorSubject(null);
		this.hoveredSpaceStream = new BehaviorSubject(null);
	}

	selectSpace(space: Space): Space {
		if (spacesAreEqual(space, this.selectedSpaceStream.getValue())) {
			this.selectedSpaceStream.next(null);
			return null;
		}
		this.selectedSpaceStream.next(space);
		return space;
	}

	hoverSpace(space: Space): Space {
		this.hoveredSpaceStream.next(space);
		return space;
	}
}
