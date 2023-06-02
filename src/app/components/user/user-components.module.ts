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
import { ModalConfirmReservationComponent } from "./reservar/modal-confirm-reservation/modal-confirm-reservation.component";
import { NzAlertModule } from "ng-zorro-antd/alert";
import { AlertsComponent } from "./alerts/alerts.component";

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
		ModalConfirmReservationComponent,
		AlertsComponent,
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
		NzAlertModule,
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
		ModalConfirmReservationComponent,
		AlertsComponent,
	],
})
export class UserComponentsModule {}
