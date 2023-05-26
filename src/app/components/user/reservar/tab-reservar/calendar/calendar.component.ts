import { Input, Component, OnChanges, SimpleChanges } from "@angular/core";
import { ApiserviceService } from "src/app/Service";

@Component({
	selector: "app-calendar",
	templateUrl: "./calendar.component.html",
	styleUrls: ["./calendar.component.css"],
})
export class CalendarComponent implements OnChanges {
	@Input() espacioId!: number;
	selectedDate: Date = new Date();
	availableTimes: any = [];

	constructor(private _apiservice: ApiserviceService) {}

	formatDate(date: Date) {
		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, "0"); // Add leading zero if necessary
		const day = String(date.getDate()).padStart(2, "0"); // Add leading zero if necessary

		const formattedDate = `${year}-${month}-${day}`;
		return formattedDate;
	}

	getHorarios(espacioId: number, formattedDate: string) {
		const body = {
			ids: this.espacioId,
			date: formattedDate,
		};
		this._apiservice.getHorariosDisponibles(body).subscribe((res) => {			
			this.availableTimes = res;
      console.log(this.availableTimes);
		});
	}

	ngOnChanges(changes: SimpleChanges) {
		const formattedDate = this.formatDate(this.selectedDate);
		console.log("Given id: ", this.espacioId);
		console.log("Given date: ", formattedDate);
		if (this.espacioId && this.selectedDate) {
			this.getHorarios(this.espacioId, formattedDate);
		}
	}

	onValueChange(value: Date): void {
		console.log(`Current valuee: ${value}`);
		this.selectedDate = value;
		const formattedDate = this.formatDate(this.selectedDate);
		console.log("Given id: ", this.espacioId);
		console.log("Given date: ", formattedDate);
		if (this.espacioId && this.selectedDate) {
			this.getHorarios(this.espacioId, formattedDate);
		}
	}

	onPanelChange(change: { date: Date; mode: string }): void {
		console.log(`Current value: ${change.date}`);
		console.log(`Current mode: ${change.mode}`);
	}
}
