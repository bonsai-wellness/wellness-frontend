import { NgModule } from '@angular/core';
import { DemoNgZorroAntdModule } from '../../../ng-zorro-antd.module';
import { FormsModule } from '@angular/forms';
import { CardEspacioComponent } from './cardEspacio.component';

@NgModule({
  imports: [ DemoNgZorroAntdModule, FormsModule ],
  declarations: [CardEspacioComponent],
  exports: [CardEspacioComponent]
})
export class CardEspacioModule { 
  

}