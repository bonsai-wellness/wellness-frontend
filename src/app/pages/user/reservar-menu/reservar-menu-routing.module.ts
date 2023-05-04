import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservarMenuComponent } from './reservar-menu.component';

const routes: Routes = [{ path: '', component: ReservarMenuComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservarMenuRoutingModule { }
