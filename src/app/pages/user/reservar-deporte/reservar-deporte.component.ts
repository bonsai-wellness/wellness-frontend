import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { ApiserviceService } from "src/app/Service";
import { Deporte } from "src/app/models/deporte/deporte";

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
  deporte: Deporte= new Deporte();
	espacioOfDeporte: any;

	ngOnInit(): void {
		// this.deporte = {
		//   id: this.route.snapshot.params['id']
		// }
    document.title = "";
		this.route.params.subscribe((params) => {
			// this.deporte_id = params.id;
			this.deporte_id = params["id"];
		});

    this._apiservice.getAllDeportes().subscribe( (res) =>{
		  this.deporte = res.find((d: Deporte) => d.deporte_id == this.deporte_id);
      console.log(this.deporte);
    })

		this._apiservice.getEspacioDeporte(this.deporte_id).subscribe((res) => {
			this.espacioOfDeporte = res;		
      console.log(this.espacioOfDeporte);	
		});
	}
}
