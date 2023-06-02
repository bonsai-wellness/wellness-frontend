import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAppComponent } from './user-app.component';

const routes: Routes = [
  {
    path: '',
    component: UserAppComponent,
    children: [
      { path: '', loadChildren: () => import('../../../pages/user/home/home.module').then(m => m.HomeModule) },
      { path: 'reservar', loadChildren: () => import('../reservar-menu/reservar-menu.module').then(m => m.ReservarMenuModule)},
      { path: 'mis-reservaciones', loadChildren: () => import('../mis-reservaciones/mis-reservaciones.module').then(m => m.MisReservacionesModule)},
      { path: 'reservar/:id', loadChildren: () => import('../reservar-deporte/reservar-deporte.module').then(m => m.ReservarDeporteModule)},
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAppRoutingModule { }
