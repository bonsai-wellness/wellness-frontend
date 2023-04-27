import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/userApp' },
  { path: 'admin', loadChildren: () => import('./pages/admin/app-admin.module').then(m => m.AppAdminModule) },
  { path: 'userApp', loadChildren: () => import('./pages/user/user-app/user-app.module').then(m => m.UserAppModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
