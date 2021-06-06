import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroeDetailPageComponent } from './components/heroe-detail-page/heroe-detail-page.component';
import { HeroesPageComponent } from './components/heroes-page/heroes-page.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesPageComponent },
  { path: 'heroe/:id', component: HeroeDetailPageComponent },
  { path: '', pathMatch: 'full', redirectTo: 'heroes' },
  { path: '**', pathMatch: 'full', redirectTo: 'heroes' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
