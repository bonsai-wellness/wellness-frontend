import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/panelAdmin' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'home-user', loadChildren: () => import('./pages/user/home-user/home-user.module').then(m => m.HomeUserModule) },
  { path: 'admin', loadChildren: () => import('./pages/admin/app-admin.module').then(m => m.AppAdminModule) },
  // { path: 'espacios', loadChildren: () => import('./pages/admin/espacios/espacios.module').then(m => m.EspaciosModule  ) },
  // { path: 'torneos', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  // { path: 'anuncios', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
