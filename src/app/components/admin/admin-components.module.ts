// admin-components.module.ts
// Declara todos los modulos necesarios para importar de admin y 
// todos los componentes que se crean dentro de la carpeta se exportan como un modulo compartido
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ApiserviceService } from "src/app/Service";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzDatePickerModule } from "ng-zorro-antd/date-picker";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzCalendarModule } from "ng-zorro-antd/calendar";
import { NzSelectComponent, NzSelectModule } from "ng-zorro-antd/select";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NzCollapseModule } from "ng-zorro-antd/collapse";
import { NzListModule } from "ng-zorro-antd/list";
import { NzAlertModule } from "ng-zorro-antd/alert";
import { NzPopconfirmModule } from "ng-zorro-antd/popconfirm";
import { RouterModule } from "@angular/router";
import { SharedComponentsModule } from "../shared/shared-components.module";
import { AdminLoginComponent } from "./admin-login/admin-login.component";
import { AdminPeopleCardComponent } from "./admin-people-card/admin-people-card.component";
import { AdminReservationsComponent } from "./admin-reservations/admin-reservations.component";
import { CardAnuncioComponent } from "./card-anuncio/card-anuncio.component";
import { CardEstadisticasComponent } from "./card-estadisticas/card-estadisticas.component";
import { CardReservacionComponent } from "./card-reservacion/card-reservacion.component";
import { CardEspacioComponent } from "./cardEspacio/cardEspacio.component";
import { CardPanelAdminComponent } from "./cardPanelAdmin/cardPanelAdmin.component";
import { CardTorneoComponent } from "./cardTorneo/cardTorneo.component";
import { DrawerComponent } from "./drawer/drawer.component";
import { ExportButtonComponent } from "./export-button/export-button.component";
import { FileUploadComponent } from "./file-upload/file-upload.component";
import { HeaderEspacioComponent } from "./header-espacio/header-espacio.component";
import { ModalAddAnuncioComponent } from "./modal-add-anuncio/modal-add-anuncio.component";
import { ModalDeleteComponent } from "./modal-delete/modal-delete.component";
import { ModalEditEspacioComponent } from "./modal-edit-espacio/modal-edit-espacio.component";
import { ReservationTableComponent } from "./reservation-table/reservation-table.component";
import { SelectDeporteComponent } from "./select-deporte/select-deporte.component";
import { SelectEspacioPadreComponent } from "./select-espacio-padre/select-espacio-padre.component";
import { SelectPuntoImportanteComponent } from "./select-punto-importante/select-punto-importante.component";
import { TabEspaciosComponent } from "./tabEspacios/tabEspacios.component";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { IconsProviderModule } from "src/app/icons-provider.module";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { HeaderModule } from "../user/header/header.module";
import { DemoNgZorroAntdModule } from "src/app/ng-zorro-antd.module";
import { NzModalComponent, NzModalModule, NzModalService } from "ng-zorro-antd/modal";
import { NzFormModule } from "ng-zorro-antd/form";

@NgModule({
	declarations: [
		AdminLoginComponent,
		AdminPeopleCardComponent,
		ModalDeleteComponent,
		AdminReservationsComponent,
		CardAnuncioComponent,
		CardEstadisticasComponent,
		CardReservacionComponent,
		CardEspacioComponent,
		CardPanelAdminComponent,
		CardTorneoComponent,
		DrawerComponent,
		ExportButtonComponent,
		FileUploadComponent,
		HeaderEspacioComponent,
		ModalAddAnuncioComponent,
		ModalEditEspacioComponent,
		ReservationTableComponent,
		SelectDeporteComponent,
		SelectEspacioPadreComponent,
		SelectPuntoImportanteComponent,
		TabEspaciosComponent,
	],
	imports: [
		CommonModule,
		NzIconModule,
		NzDatePickerModule,
		NzButtonModule,
		NzCalendarModule,
		// NzSelectModule,
		FormsModule,
		NzCollapseModule,
		NzListModule,
		NzAlertModule,
		NzPopconfirmModule,
		RouterModule,
		SharedComponentsModule,
		HttpClientModule,
		IconsProviderModule,
		NzLayoutModule,
		NzMenuModule,
		HeaderModule,
		DemoNgZorroAntdModule,
		ReactiveFormsModule,
		// NzModalModule,
		NzFormModule,
		// ModalDeleteComponent,
	],
	exports: [
		AdminLoginComponent,
		AdminPeopleCardComponent,
		AdminReservationsComponent,
		ModalDeleteComponent,
		CardAnuncioComponent,
		CardEstadisticasComponent,
		CardReservacionComponent,
		CardEspacioComponent,
		CardPanelAdminComponent,
		CardTorneoComponent,
		DrawerComponent,
		ExportButtonComponent,
		FileUploadComponent,
		HeaderEspacioComponent,
		ModalAddAnuncioComponent,
		ModalEditEspacioComponent,
		ReservationTableComponent,
		SelectDeporteComponent,
		SelectEspacioPadreComponent,
		SelectPuntoImportanteComponent,
		TabEspaciosComponent,
	],
	providers: [
		ApiserviceService,
		NzModalService,
	],
})

export class AdminComponentsModule { }