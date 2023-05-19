import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { FormControl } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { AnunciosComponent } from "./anuncios.component";
import { AnunciosRoutingModule } from "./anuncios-routing.module";
import { DemoNgZorroAntdModule } from "src/app/ng-zorro-antd.module";
import { FileUploadModule } from "src/app/components/admin/file-upload/file-upload.module";
import { CardAnuncioComponent } from "src/app/components/admin/card-anuncio/card-anuncio.component";
@NgModule({
  imports: [
    AnunciosRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    // TorneosRoutingModule,
    DemoNgZorroAntdModule,
    FormsModule,
    CommonModule,
    // CardTorneoModule,
    ReactiveFormsModule,
    FileUploadModule,
  ],
  declarations: [AnunciosComponent, CardAnuncioComponent],
  exports: [AnunciosComponent],
})
export class AnunciosModule {}
