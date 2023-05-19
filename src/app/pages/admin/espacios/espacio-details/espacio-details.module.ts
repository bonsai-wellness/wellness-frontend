import { NgModule } from "@angular/core";
import { EspacioDetailsRoutingModule } from "./espacio-details-routing.module";
import { EspacioDetailsComponent } from "./espacio-details.component";
import { DemoNgZorroAntdModule } from "../../../../ng-zorro-antd.module";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { FileUploadModule } from "../../../../components/admin/file-upload/file-upload.module";
import { NzModalModule } from 'ng-zorro-antd/modal';
import { CardReservacionModule } from "src/app/components/admin/card-reservacion/card-reservacion.module";
@NgModule({
  imports: [
    EspacioDetailsRoutingModule,
    DemoNgZorroAntdModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    FileUploadModule,
    NzModalModule,
    CardReservacionModule,
  ],
  declarations: [EspacioDetailsComponent],
  exports: [EspacioDetailsComponent],
})
export class EspacioDetailsModule {}
