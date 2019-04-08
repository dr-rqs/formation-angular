import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpeakerComponent } from './speaker/speaker.component';
import { PrinterComponent } from './printer/printer.component';
import {FormsModule} from "@angular/forms";
import { TechnicalCardComponent } from './technical-card/technical-card.component';
import { FootballClubComponent } from './football-club/football-club.component';

@NgModule({
  declarations: [
    AppComponent,
    SpeakerComponent,
    PrinterComponent,
    TechnicalCardComponent,
    FootballClubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
