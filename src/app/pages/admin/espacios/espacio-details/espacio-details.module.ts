import { NgModule } from "@angular/core";
import { EspacioDetailsRoutingModule } from "./espacio-details-routing.module";
import { EspacioDetailsComponent } from "./espacio-details.component";
import { DemoNgZorroAntdModule } from "../../../../ng-zorro-antd.module";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { FormControl } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { FileUploadModule } from "../../../../components/admin/file-upload/file-upload.module";
import { NzModalModule } from 'ng-zorro-antd/modal';

@NgModule({
  imports: [
    EspacioDetailsRoutingModule,
    DemoNgZorroAntdModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    FileUploadModule,
    NzModalModule
  ],
  declarations: [EspacioDetailsComponent],
  exports: [EspacioDetailsComponent],
})
export class EspacioDetailsModule {}
