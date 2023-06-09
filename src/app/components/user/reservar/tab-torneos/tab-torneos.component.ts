import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiserviceService } from "src/app/Service";

@Component({
	selector: "app-tab-torneos",
	templateUrl: "./tab-torneos.component.html",
	styleUrls: ["./tab-torneos.component.css"],
})
export class TabTorneosComponent {
	listTorneos: any = [];
	deporteId!: number;

	constructor(
		private route: ActivatedRoute,
		private _apiservice: ApiserviceService
	) {}

	ngOnInit() {
		this.route.params.subscribe((params) => {
			this.deporteId = parseInt(params["id"]);
		});

		this._apiservice.getAllActiveTorneos().subscribe((res) => {
			const allTorneosList = res as [];
			this.listTorneos = allTorneosList.filter((torneo: any) => {
				const torneoDeporteId = parseInt(torneo.deporte_id);
				return torneoDeporteId === this.deporteId;
			});
		});
	}
}
