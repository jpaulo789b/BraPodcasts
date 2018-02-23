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

import {MatButtonModule, 
        MatMenuModule, 
        MatToolbarModule, 
        MatIconModule, 
        MatCardModule,
        MatSidenavModule } from '@angular/material';

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
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
