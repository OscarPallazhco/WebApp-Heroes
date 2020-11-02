import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'heroes', component: HeroesComponent},
    { path: 'heroe/:nombreHeroe', component: HeroeComponent},
    { path: 'busqueda/:termino', component: BusquedaComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}


