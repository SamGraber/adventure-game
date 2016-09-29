import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { SpaceComponent } from './space/space.component';
import { BoardService } from './services/board/board.service';

@NgModule({
	imports: [BrowserModule],
	declarations: [
		AppComponent,
		BoardComponent,
		SpaceComponent,
	],
	providers: [
		BoardService,
	],
	bootstrap: [AppComponent],
})
export class AppModule { }
