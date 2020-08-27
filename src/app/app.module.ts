import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { Level1Component } from './components/level1/level1.component';
import { Level2Component } from './components/level2/level2.component';
import { Level3Component } from './components/level3/level3.component';
import { Level4Component } from './components/level4/level4.component';
import { WrongComponent } from './components/wrong/wrong.component';
import { CorrectComponent } from './components/correct/correct.component';

import { AppRoutingModule } from '../app/app-routing/app-routing.module';

import { LevelsJsonService } from '../app/services/levels-json.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    Level1Component,
    Level2Component,
    Level3Component,
    Level4Component,
    WrongComponent,
    CorrectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LevelsJsonService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
