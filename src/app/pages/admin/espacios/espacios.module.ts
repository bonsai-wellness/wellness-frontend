import { NgModule } from "@angular/core";

import { EspaciosRoutingModule } from "./espacios-routing.module";
import { EspaciosComponent } from "./espacios.component";
import { DemoNgZorroAntdModule } from "../../../ng-zorro-antd.module";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { CardEspacioModule } from "src/app/components/admin/cardEspacio/cardEspacio.module";
import { TabEspaciosModule } from "src/app/components/admin/tabEspacios/tabEspacios.module";
import { FormControl } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { FileUploadModule } from "src/app/components/admin/file-upload/file-upload.module";
import { NzModalModule } from 'ng-zorro-antd/modal';

@NgModule({
  imports: [
    EspaciosRoutingModule,
    DemoNgZorroAntdModule,
    FormsModule,
    CardEspacioModule,
    CommonModule,
    TabEspaciosModule,
    ReactiveFormsModule,
    FileUploadModule,
    NzModalModule
  ],
  declarations: [EspaciosComponent],
  exports: [EspaciosComponent],
})
export class EspaciosModule {}
