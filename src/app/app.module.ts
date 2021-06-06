import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { HeroesPageComponent } from './components/heroes-page/heroes-page.component';
import { HeroeDetailPageComponent } from './components/heroe-detail-page/heroe-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesPageComponent,
    HeroeDetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
