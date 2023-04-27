import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAppComponent } from './user-app.component';

const routes: Routes = [
  { path: '', component: UserAppComponent, 
    children: [
    // { path: '', loadChildren: () => import('../home-user/home-user.module').then(m => m.HomeUserModule) },
    { path: '', loadChildren: () => import('../../../pages/user/home/home.module').then(m => m.HomeModule) },
    { path: 'reservar', loadChildren: () => import('../../../pages/user/reservar/reservar.module').then(m => m.ReservarModule) },
    { path: 'torneos', loadChildren: () => import('../../../pages/welcome/welcome.module').then(m => m.WelcomeModule) },
    // { path: '**', redirectTo: '' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAppRoutingModule { }
