import { NgModule, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReservarDeporteComponent } from "./reservar-deporte.component";

import { ReservarDeporteRoutingModule } from "./reservar-deporte-routing.module";
import { UserComponentsModule } from "src/app/components/user/user-components.module";
import { NzInputModule } from "ng-zorro-antd/input";

@NgModule({
	declarations: [ReservarDeporteComponent],
	imports: [
		CommonModule,
		ReservarDeporteRoutingModule,
		NzInputModule,
		UserComponentsModule,
	],
})
export class ReservarDeporteModule {}
