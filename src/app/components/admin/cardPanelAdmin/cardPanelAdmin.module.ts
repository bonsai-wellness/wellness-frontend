import { NgModule } from '@angular/core';

// import { PanelAdminRoutingModule } from './panelAdmin-routing.module';

import { CardPanelAdminComponent } from './cardPanelAdmin.component';
import { DemoNgZorroAntdModule } from '../../../ng-zorro-antd.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [ DemoNgZorroAntdModule, FormsModule ],
  declarations: [CardPanelAdminComponent],
  exports: [CardPanelAdminComponent]
})
export class CardPanelAdminModule { 
  

}
