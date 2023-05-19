import { NgModule } from "@angular/core";
import { CardReservacionComponent } from "./card-reservacion.component";
import { DemoNgZorroAntdModule } from "src/app/ng-zorro-antd.module";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    DemoNgZorroAntdModule,
  ],
  declarations: [CardReservacionComponent],
  exports: [CardReservacionComponent],
})
export class CardReservacionModule {}
