import { Routes } from '@angular/router';
import { CounterPageComponet } from './pages/counter/counter-page.component';

import {HeroPageComponent} from './pages/hero/hero-page.component';
import { DragonballPageComponent } from './pages/dragonball/dragonball-page.component';
import { DragonballSuperPageComponent } from './pages/dragonball-super/dragonball-super-page.component';


export const routes: Routes = [
{
    path: '',
    component: CounterPageComponet
},

{
    path: 'hero',
    component: HeroPageComponent
},


{
    path: 'dragonball',
    component: DragonballPageComponent
},

{
    path: 'dragonball-super',
    component: DragonballSuperPageComponent
},

{
    path: '**',
    redirectTo:  '', // este path redirecciona hacia inicio 
},

];

//hola mundo ==> HolaMundoComponet
//admin ==> adminComponent
//==>HomeComponet
//404 ==> PageNotFoundComponent
