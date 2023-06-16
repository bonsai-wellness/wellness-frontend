import { Component, Input } from "@angular/core";
import { ApiserviceService } from "src/app/Service";
import { NzModalRef, NzModalService } from "ng-zorro-antd/modal";

@Component({
	selector: "app-modal-confirm-reservation",
	templateUrl: "./modal-confirm-reservation.component.html",
})
export class ModalConfirmReservationComponent {
	@Input() availableTimes: any = [];
	@Input() selectedDate: Date = new Date();
	@Input() espacioId!: number;
	isReservationCreated: boolean = false;
	reservationCreatedAlertValues: any = {};
	confirmModal?: NzModalRef; // For testing by now
	timeSlots: any = [];

	constructor(
		private _apiservice: ApiserviceService,
		private modal: NzModalService
	) {}

	ngOnInit() {
		const date = new Date();
		const currentTime = `${date.getHours()}:${date.getMinutes()}`;
		const helperArr = this.availableTimes[0].timeSlots;

		this.timeSlots = helperArr.filter((time: any) => {
			const startTime = time.start_time.replace(/\D/g, "");

			return startTime > currentTime;
		});
	}

	formatDate(date: Date) {
		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, "0"); // Add leading zero if necessary
		const day = String(date.getDate()).padStart(2, "0"); // Add leading zero if necessary

		const formattedDate = `${year}-${month}-${day}`;
		return formattedDate;
	}

	handleClick(timeReserva: any) {
		const formattedDate = this.formatDate(this.selectedDate);
		const body = {
			espacio_id: this.espacioId,
			date: formattedDate,
			start_time: timeReserva.start_time,
			end_time: timeReserva.end_time,
		};
		this._apiservice.postCreateReservacion(body).subscribe({
			next: (res) => {
				if (res) {
					this.isReservationCreated = true;
					this.reservationCreatedAlertValues = {
						type: "success",
						message:
							"¡La reservación fue creada exitosamente! Ve a ver tus reservaciones para más información",
					};
				}
			},
			error: (error) => {
				this.reservationCreatedAlertValues = {
					type: "error",
					message: "La reservación no pudo ser creada, intentelo más tarde",
				};
			},
		});
	}

	showConfirm(time: any): void {
		this.confirmModal = this.modal.confirm({
			nzTitle: "Confirma tu selección",
			nzContent: `Has elegido reservar el día ${this.selectedDate.toLocaleDateString(
				"es-ES",
				{ weekday: "long", day: "numeric", month: "long", year: "numeric" }
			)} y comienza de ${time.start_time} a ${time.end_time}`,
			nzOnOk: () =>
				this.handleClick({
					start_time: time.start_time,
					end_time: time.end_time,
				}),
		});
	}
}
