import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { FormControl } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { AnunciosComponent } from "./anuncios.component";
import { AnunciosRoutingModule } from "./anuncios-routing.module";
@NgModule({
  imports: [
    AnunciosRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [AnunciosComponent],
  exports: [AnunciosComponent],
})
export class AnunciosModule {}
