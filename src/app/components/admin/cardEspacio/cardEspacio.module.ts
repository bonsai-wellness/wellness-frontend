import { NgModule } from '@angular/core';
import { DemoNgZorroAntdModule } from '../../../ng-zorro-antd.module';
import { FormsModule } from '@angular/forms';
import { CardEspacioComponent } from './cardEspacio.component';
import { CommonModule } from '@angular/common';
import { EspaciosRoutingModule } from 'src/app/pages/admin/espacios/espacios-routing.module';
@NgModule({
  imports: [ DemoNgZorroAntdModule, FormsModule, CommonModule, EspaciosRoutingModule ],
  declarations: [CardEspacioComponent],
  exports: [CardEspacioComponent]
})
export class CardEspacioModule { 
  

}