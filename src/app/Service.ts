import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
//Models
import { EspacioPadre } from "./models/espacioPadre/espacioPadre";
import { Deporte } from "./models/deporte/deporte";
import { PuntoImportante } from "./models/puntoImportante/puntoImportante";
import { Espacio } from "./models/espacio/espacio";
import { Torneo } from "./models/torneo/torneo";
import { Anuncio } from "./models/anuncio/anuncio";

@Injectable({ providedIn: "root" })
export class ApiserviceService {
	API: string = "https://bonsai-rest.azurewebsites.net/api";
	// API: string = "http://localhost:8000/api";

	constructor(private _http: HttpClient) {}

	//GETS
	getAllActiveEspacioPadre() {
		return this._http.get(this.API + "/espacio-padre");
	}

	getEspacioDeporte(id: number) {
		return this._http.get(this.API + `/espacio-deporte/${id}`);
	}

	getHorariosDisponibles(body: { ids: number; date: string }) {
		const headers = new HttpHeaders({ "Content-Type": "application/json" });
		const params = new HttpParams({ fromObject: body });
		const options = { headers, params };
		return this._http.get(this.API + `/reservation`, options);
	}

	getDeporteById(id: number) {
		return this._http.get(this.API + `/espacio-deporte/${id}`);
	}

	getEspaciosByIdPadre(id: number) {
		return this._http.get(this.API + `/espacio/espacio-padre/${id}`);
	}

	getAllActiveTorneos() {
		return this._http.get(this.API + "/torneo/");
	}

	getAllDeportes(): Observable<any> {
		return this._http.get(this.API + "/deporte/");
	}
	getAllPuntosImportantes(): Observable<any> {
		return this._http.get(this.API + "/punto-importante/");
	}

	getAllActiveAnuncios() {
		return this._http.get(this.API + "/anuncio/");
	}

  //POST
  addEspacioPadre(espacioPadre: EspacioPadre): Observable<any> {
    return this._http.post(this.API + "/espacio-padre/", espacioPadre);
  }

	addEspacio(espacio: Espacio): Observable<any> {
		// Create form data
		console.log(espacio.open_at.toISOString());
		const formData = new FormData();
		formData.append("name", espacio.name);
		formData.append("code", espacio.code);
		formData.append("capacity", espacio.capacity as any);
		formData.append("time_max", espacio.time_max as any);
		formData.append("details", espacio.details);
		formData.append("open_at", espacio.open_at.toISOString().substring(11, 19));
		formData.append(
			"close_at",
			espacio.close_at.toISOString().substring(11, 19)
		);
		formData.append("espacio_padre_id", espacio.espacio_padre_id as any);
		formData.append("imagen", espacio.imagen, `${espacio.name}.jpeg`);
		formData.append("is_active", espacio.is_active);

		const res = this._http.post(this.API + "/espacio/", formData);
		console.log(res);
		// let espacio_id = res.espacio_id;
		return res;
	}

	addDeporte(deporte: Deporte): Observable<any> {
		const formData = new FormData();
		formData.append("name", deporte.name);
		formData.append("imagen", deporte.imagen, `${deporte.name}.jpeg`);
		return this._http.post(this.API + "/deporte/", formData);
	}

  addPuntoImportante(puntoImportante: PuntoImportante):  Observable<any> {
    return this._http.post(this.API + "/punto-importante/", puntoImportante);
  }

  //Delete

	addTorneo(torneo: Torneo): Observable<any> {
		const formData = new FormData();
		formData.append("name", torneo.name);
		formData.append("evento", torneo.evento);
		formData.append("description", torneo.description);
		formData.append("url", torneo.url);
		formData.append("location", torneo.location);
		formData.append("date_start", torneo.dates[0].toISOString());
		formData.append("date_end", torneo.dates[1].toISOString());
		formData.append("deporte_id", torneo.deporte_id as any);
		formData.append("imagen", torneo.imagen, `${torneo.name}.jpeg`);
		formData.append("is_active", torneo.is_active);
		return this._http.post(this.API + "/torneo/", formData);
	}


  addAnuncio(anuncio: Anuncio):  Observable<any> {
    const formData = new FormData();
    formData.append("name", anuncio.name);
    formData.append("description", anuncio.description);
    formData.append("url", anuncio.url);
    formData.append("imagen", anuncio.image, `${anuncio.name}.jpeg`);
    return this._http.post(this.API + "/anuncio/", formData);
  }

	postCreateReservacion(body: {
		espacio_id: number;
		date: string;
		start_time: string;
		end_time: string;
	}) {
		const headers = new HttpHeaders({ "Content-Type": "application/json" });
		const options = { headers, body, withCredentials: true };
		console.log(body);
		return this._http.post(this.API + `/reservation/`, null, options);
	}
}
