import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { ApiserviceService } from "src/app/Service";

@Component({
	selector: "app-reservar-deporte",
	templateUrl: "./reservar-deporte.component.html",
	styleUrls: ["./reservar-deporte.component.css"],
})
export class ReservarDeporteComponent implements OnInit {
	baseURL = "https://josecas.blob.core.windows.net/";
	// deporte: { id:number};
	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private _apiservice: ApiserviceService // private service: HeroService
	) {
		// this.deporte={id:1};
	}

	deporte_id: any;
	espacioOfDeporte: any;

	ngOnInit(): void {
		// this.deporte = {
		//   id: this.route.snapshot.params['id']
		// }
		this.route.params.subscribe((params) => {
			// this.deporte_id = params.id;
			this.deporte_id = params["id"];
		});

		this._apiservice.getEspacioDeporte(this.deporte_id).subscribe((res) => {
			this.espacioOfDeporte = res;		
      console.log(this.espacioOfDeporte);	
		});
	}
}
