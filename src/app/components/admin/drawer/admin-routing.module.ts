import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelAdminComponent } from 'src/app/pages/admin/panelAdmin/panelAdmin.component';
const routes: Routes = [
  { path: '', component: PanelAdminComponent, 
    children: [
    { path: 'welcome', loadChildren: () => import('../../../pages/welcome/welcome.module').then(m => m.WelcomeModule) },
    { path: '**', redirectTo: '' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
