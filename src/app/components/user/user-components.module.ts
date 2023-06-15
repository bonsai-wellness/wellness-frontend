import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StatsComponent } from "./home/stats/stats.component";
import { ReservacionesComponent } from "./home/reservaciones/reservaciones.component";
import { AnunciosComponent } from "./home/anuncios/anuncios.component";

import { CarouselModule } from "ngx-bootstrap/carousel";
import { CardDeporteComponent } from "./reservar/card-deporte/card-deporte.component";
import { TabReservarComponent } from "./reservar/tab-reservar/tab-reservar/tab-reservar.component";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzCalendarModule } from "ng-zorro-antd/calendar";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzDatePickerModule } from "ng-zorro-antd/date-picker";
import { CalendarComponent } from "./reservar/tab-reservar/calendar/calendar.component";
import { FormsModule } from "@angular/forms";
import { NzSelectModule } from "ng-zorro-antd/select";
import { SelectEspacioHijoComponent } from "./reservar/tab-reservar/select-espacio-hijo/select-espacio-hijo.component";
import { TabTorneosComponent } from "./reservar/tab-torneos/tab-torneos.component";
import { TorneoCardComponent } from "./reservar/torneo-card/torneo-card.component";
import { EspaciosPadreComponent } from "./reservar/tab-lugar/espacios-padre/espacios-padre.component";
import { TabLugarComponent } from "./reservar/tab-lugar/tab-lugar/tab-lugar.component";
import { NzCollapseModule } from "ng-zorro-antd/collapse";
import { NzListModule } from "ng-zorro-antd/list";
import { PuntosImportantesComponent } from "./reservar/tab-lugar/puntos-importantes/puntos-importantes.component";
import { UbicacionComponent } from "./reservar/tab-lugar/ubicacion/ubicacion.component";
import { ModalConfirmReservationComponent } from "./reservar/modal-confirm-reservation/modal-confirm-reservation.component";
import { NzAlertModule } from "ng-zorro-antd/alert";
import { AlertsComponent } from "./alerts/alerts.component";
import { ReservacionCardComponent } from "./mis-reservaciones/reservacion-card/reservacion-card.component";
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { RouterModule } from "@angular/router";
import { SharedComponentsModule } from "../shared/shared-components.module";
import { AforoActualComponent } from "./home/stats/aforo-actual/aforo-actual.component";
import { NgOptimizedImage } from "@angular/common"
@NgModule({
	declarations: [
		StatsComponent,
		ReservacionesComponent,
		AnunciosComponent,
		CardDeporteComponent,
		TabReservarComponent,
		CalendarComponent,
		SelectEspacioHijoComponent,
		TabTorneosComponent,
		TorneoCardComponent,
		TabLugarComponent,
		EspaciosPadreComponent,
		PuntosImportantesComponent,
		UbicacionComponent,
		ModalConfirmReservationComponent,
		AlertsComponent,
		ReservacionCardComponent,
		AforoActualComponent,
	],
	imports: [
		CommonModule,
		CarouselModule,
		NzIconModule,
		NzDatePickerModule,
		NzButtonModule,
		NzCalendarModule,
		NzSelectModule,
		FormsModule,
		NzCollapseModule,
		NzListModule,
		NzAlertModule,
		NzPopconfirmModule,
		RouterModule,
		SharedComponentsModule,
		NgOptimizedImage,
	],
	exports: [
		StatsComponent,
		ReservacionesComponent,
		AnunciosComponent,
		CardDeporteComponent,
		TabReservarComponent,
		CalendarComponent,
		SelectEspacioHijoComponent,
		TabTorneosComponent,
		TorneoCardComponent,
		TabLugarComponent,
		EspaciosPadreComponent,
		PuntosImportantesComponent,
		UbicacionComponent,
		ModalConfirmReservationComponent,
		AlertsComponent,
		ReservacionCardComponent,
		AforoActualComponent
	],
})

export class UserComponentsModule { }