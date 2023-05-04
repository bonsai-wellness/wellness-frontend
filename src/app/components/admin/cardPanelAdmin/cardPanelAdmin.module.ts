import { NgModule } from '@angular/core';

// import { PanelAdminRoutingModule } from './panelAdmin-routing.module';

import { CardPanelAdminComponent } from './cardPanelAdmin.component';
import { DemoNgZorroAntdModule } from '../../../ng-zorro-antd.module';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from '../drawer/admin-routing.module';
@NgModule({
  imports: [ DemoNgZorroAntdModule, FormsModule, CommonModule, AdminRoutingModule ],
  declarations: [CardPanelAdminComponent],
  exports: [CardPanelAdminComponent]
})
export class CardPanelAdminModule { 
  

}
