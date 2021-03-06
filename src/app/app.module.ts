import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { PlayerComponent } from './player/player.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { ResultComponent } from './result/result.component';
import { MysubscriptionsComponent } from './mysubscriptions/mysubscriptions.component';
import { AccountComponent } from './account/account.component';
import { MaterialModule } from './material.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidemenuComponent,
    PlayerComponent,
    EpisodesComponent,
    ResultComponent,
    MysubscriptionsComponent,
    AccountComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  exports: [
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
