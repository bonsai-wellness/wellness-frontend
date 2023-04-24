import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeUserComponent } from './home-user.component';

const routes: Routes = [
  { path: '', component: HomeUserComponent, 
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
export class HomeUserRoutingModule { }
