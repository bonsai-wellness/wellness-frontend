import { NgModule } from '@angular/core';

import { TorneosRoutingModule } from './torneos-routing.module';
import { TorneosComponent } from './torneos.component';
import { DemoNgZorroAntdModule } from '../../../ng-zorro-antd.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardTorneoModule } from 'src/app/components/admin/cardTorneo/cardTorneo.module';
// import { CardEspacioModule } from 'src/app/components/admin/cardEspacio/cardEspacio.module';
// import { TabTorneosModule } from 'src/app/components/admin/tabTorneos/tabTorneos.module';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [TorneosRoutingModule, DemoNgZorroAntdModule, FormsModule, CommonModule, CardTorneoModule, ReactiveFormsModule ],
  declarations: [TorneosComponent],
  exports: [TorneosComponent],
})
export class TorneosModule { }
