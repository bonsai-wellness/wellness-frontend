import { NgModule } from '@angular/core';
import { DemoNgZorroAntdModule } from '../../../ng-zorro-antd.module';
import { FormsModule } from '@angular/forms';
import { CardTorneoComponent } from './cardTorneo.component';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [ DemoNgZorroAntdModule, FormsModule, CommonModule ],
  declarations: [CardTorneoComponent],
  exports: [CardTorneoComponent]
})
export class CardTorneoModule { 
  

}