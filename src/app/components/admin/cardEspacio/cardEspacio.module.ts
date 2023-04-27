import { NgModule } from '@angular/core';
import { DemoNgZorroAntdModule } from '../../../ng-zorro-antd.module';
import { FormsModule } from '@angular/forms';
import { CardEspacioComponent } from './cardEspacio.component';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [ DemoNgZorroAntdModule, FormsModule, CommonModule ],
  declarations: [CardEspacioComponent],
  exports: [CardEspacioComponent]
})
export class CardEspacioModule { 
  

}