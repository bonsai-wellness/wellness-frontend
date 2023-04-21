import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'panelAdmin', loadChildren: () => import('./pages/admin/panelAdmin/panelAdmin.module').then(m => m.PanelAdminModule) },
  { path: 'espacios', loadChildren: () => import('./pages/admin/espacios/espacios.module').then(m => m.EspaciosModule  ) },
  { path: 'torneos', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'anuncios', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
