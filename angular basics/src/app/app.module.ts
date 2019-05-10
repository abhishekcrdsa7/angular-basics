import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WarningAlert } from './warningAlert/warningAlert.component';
import { SuccessAlert } from './successAlert/successAlert.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { Highlight } from './highlight.directive';
import { Cond } from './condition.directive';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlert,
    SuccessAlert,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    Highlight,
    Cond
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
