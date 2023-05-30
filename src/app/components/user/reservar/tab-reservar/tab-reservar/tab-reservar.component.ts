import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { ApiserviceService } from "src/app/Service";

@Component({
	selector: "app-tab-reservar",
	templateUrl: "./tab-reservar.component.html",
	styleUrls: ["./tab-reservar.component.css"],
})
export class TabReservarComponent {
	@Input() data: any = [];

	selectedEspacio = {
		capacity: 0,
		close_at: "",
		code: "",
		created_at: "",
		details: "",
		espacio_id: 0,
		espacio_padre_id: 0,
		imagen: "",
		is_active: "",
		name: "",
		open_at: "",
		time_max: 0,
		updated_at: "",
	};

	parentEspacioCode!: string;

	constructor(private _apiservice: ApiserviceService) {}

	updateState(updatedState: any) {
		this.selectedEspacio = updatedState;
		console.log(this.selectedEspacio);
		this._apiservice.getAllActiveEspacioPadre().subscribe((res) => {
			const response = res as [];			
			const parentEspacio: any = response.find(
				(espacioPadre: any) =>
					espacioPadre.espacio_padre_id ===
					this.selectedEspacio.espacio_padre_id
			);			
      this.parentEspacioCode = parentEspacio?.code
		});
	}
}
