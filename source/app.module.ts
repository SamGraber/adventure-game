import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './rxjs-operators';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { SpaceComponent } from './space/space.component';
import { BoardService } from './services/board/board.service';
import { SelectedSpaceService } from './services/selectedSpace/selectedSpace.service';

@NgModule({
	imports: [BrowserModule],
	declarations: [
		AppComponent,
		BoardComponent,
		SpaceComponent,
	],
	providers: [
		BoardService,
		SelectedSpaceService,
	],
	bootstrap: [AppComponent],
})
export class AppModule { }
