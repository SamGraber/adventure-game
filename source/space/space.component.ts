import { Component, Input } from '@angular/core';

import { Space } from './space';

@Component({
	moduleId: module.id,
	selector: 'ag-space',
	templateUrl: 'space.component.html',
	styleUrls: ['space.component.css'],
})
export class SpaceComponent {
	@Input() space: Space;
}
