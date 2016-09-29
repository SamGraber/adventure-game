import { Component, Input, Output, EventEmitter} from '@angular/core';

import { Space } from '../types/space';

@Component({
	moduleId: module.id,
	selector: 'ag-space',
	templateUrl: 'space.component.html',
	styleUrls: ['space.component.css'],
})
export class SpaceComponent {
	@Input() space: Space;
	@Output() select: EventEmitter<Space> = new EventEmitter<Space>();
	@Output() hover: EventEmitter<Space> = new EventEmitter<Space>();

	get spaceClass(): string {
		if (this.space.visible) {
			return this.space.terrain.class;
		} else {
			return '';
		}
	}
}
