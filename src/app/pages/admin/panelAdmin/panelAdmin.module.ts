import { NgModule } from '@angular/core';

import { PanelAdminRoutingModule } from './panelAdmin-routing.module';

import { PanelAdminComponent } from './panelAdmin.component';
import { DemoNgZorroAntdModule } from '../../../ng-zorro-antd.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { CardPanelAdminComponent } from 'src/app/components/admin/cardPanelAdmin/cardPanelAdmin.component';
import { CardPanelAdminModule } from 'src/app/components/admin/cardPanelAdmin/cardPanelAdmin.module';
import { DrawerModule } from 'src/app/components/admin/drawer/drawer.module';
@NgModule({
  imports: [PanelAdminRoutingModule, DemoNgZorroAntdModule, FormsModule, CardPanelAdminModule, CommonModule, DrawerModule ],
  declarations: [PanelAdminComponent],
  exports: [PanelAdminComponent],
})
export class PanelAdminModule { }
