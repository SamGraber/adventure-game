import { Component, Input, Output, EventEmitter} from '@angular/core';

import { Space } from './space';

@Component({
	moduleId: module.id,
	selector: 'ag-space',
	templateUrl: 'space.component.html',
	styleUrls: ['space.component.css'],
})
export class SpaceComponent {
	@Input() space: Space;
	@Output() select: EventEmitter<void> = new EventEmitter<void>();
}
