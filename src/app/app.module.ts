import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AquariumComponent } from './components/aquarium/aquarium.component';
import { BoxButtonComponent } from './components/box-button/box-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    AquariumComponent,
    BoxButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
