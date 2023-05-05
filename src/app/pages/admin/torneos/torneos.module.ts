import { NgModule } from "@angular/core";

import { TorneosRoutingModule } from "./torneos-routing.module";
import { TorneosComponent } from "./torneos.component";
import { DemoNgZorroAntdModule } from "../../../ng-zorro-antd.module";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { CardTorneoModule } from "src/app/components/admin/cardTorneo/cardTorneo.module";
import { ReactiveFormsModule } from "@angular/forms";
import { FileUploadModule } from "src/app/components/admin/file-upload/file-upload.module";
@NgModule({
  imports: [
    TorneosRoutingModule,
    DemoNgZorroAntdModule,
    FormsModule,
    CommonModule,
    CardTorneoModule,
    ReactiveFormsModule,
    FileUploadModule,
  ],
  declarations: [TorneosComponent],
  exports: [TorneosComponent],
})
export class TorneosModule {}
