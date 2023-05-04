import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAppComponent } from './user-app.component';
import { ReservarDeporteComponent } from '../reservar-deporte/reservar-deporte.component';

const routes: Routes = [
  { path: '', component: UserAppComponent, 
    children: [
    // { path: '', pathMatch: 'full', redirectTo: '' },
    { path: '', loadChildren: () => import('../../../pages/user/home/home.module').then(m => m.HomeModule) },
    { path: 'reservar', loadChildren: () => import('../reservar-menu/reservar-menu.module').then(m => m.ReservarMenuModule)},
    { path: 'reservar/:id', loadChildren: () => import('../reservar-deporte/reservar-deporte.module').then(m => m.ReservarDeporteModule)},
    { path: 'res', loadChildren: () => import('../reservar-deporte/reservar-deporte.module').then(m => m.ReservarDeporteModule)},
    // { path: "**", redirectTo: "" },
    ],
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAppRoutingModule { }
