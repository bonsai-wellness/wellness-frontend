import { NgModule } from '@angular/core';

import { EspaciosRoutingModule } from './espacios-routing.module';

import { EspaciosComponent } from './espacios.component';
import { DemoNgZorroAntdModule } from '../../../ng-zorro-antd.module';
import { FormsModule } from '@angular/forms';
// import { CardPanelAdminComponent } from 'src/app/components/admin/cardPanelAdmin/cardPanelAdmin.component';
import { CardPanelAdminModule } from 'src/app/components/admin/cardPanelAdmin/cardPanelAdmin.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [EspaciosRoutingModule, DemoNgZorroAntdModule, FormsModule, CardPanelAdminModule, CommonModule ],
  declarations: [EspaciosComponent],
  exports: [EspaciosComponent],
})
export class EspaciosModule { }
