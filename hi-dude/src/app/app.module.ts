import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpeakerComponent } from './speaker/speaker.component';
import { PrinterComponent } from './printer/printer.component';

@NgModule({
  declarations: [
    AppComponent,
    SpeakerComponent,
    PrinterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
