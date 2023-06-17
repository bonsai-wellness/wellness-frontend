import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { ApiserviceService } from "src/app/Service";
import { Deporte } from "src/app/models/deporte/deporte";
import { AppConstants } from "src/app/app-constants";

@Component({
	selector: "app-reservar-deporte",
	templateUrl: "./reservar-deporte.component.html",
	styleUrls: ["./reservar-deporte.component.css"],
})
export class ReservarDeporteComponent implements OnInit {
	
	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private _apiservice: ApiserviceService,
	) {
	}

	baseURL = AppConstants.baseURL;
	deporte_id: any;
	deporte: Deporte = new Deporte();
	espacioOfDeporte: any;
	espaciosPadre: any;

	ngOnInit(): void {

		document.title = "";
		// Obtiene id de deporte
		this.route.params.subscribe((params) => {
			this.deporte_id = params["id"];
		});

		// Obtiene espacios Padre
		this._apiservice.getEspaciosPadreByDeporteId(this.deporte_id).subscribe((res) => {
			this.espaciosPadre = res;
		});

		// Obtiene deporte
		this._apiservice.getAllDeportes().subscribe((res) => {
			this.deporte = res.find((d: Deporte) => d.deporte_id == this.deporte_id);
		})

		// Obtiene espacios hijo
		this._apiservice.getEspacioDeporte(this.deporte_id).subscribe((res) => {
			this.espacioOfDeporte = res;
		});
	}
}
