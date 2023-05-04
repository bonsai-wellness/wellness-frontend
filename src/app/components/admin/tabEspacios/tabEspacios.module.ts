import { NgModule } from '@angular/core';
import { DemoNgZorroAntdModule } from '../../../ng-zorro-antd.module';
import { FormsModule } from '@angular/forms';
import { TabEspaciosComponent } from './tabEspacios.component';
import { CardEspacioModule } from '../cardEspacio/cardEspacio.module';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [ DemoNgZorroAntdModule, FormsModule, CardEspacioModule, CommonModule ],
  declarations: [TabEspaciosComponent],
  exports: [TabEspaciosComponent]
})
export class TabEspaciosModule { 
  

}