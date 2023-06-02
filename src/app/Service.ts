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
import { head } from "cypress/types/lodash";

@Injectable({ providedIn: "root" })
export class ApiserviceService {
	API: string = "https://bonsai-rest.azurewebsites.net/api";
	// API: string = "http://localhost:8000/api";

	constructor(private _http: HttpClient) {}

	authHeader(): HttpHeaders {
		const token = localStorage.getItem("token");
		const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
		return headers;
	}

	//GETS
	getWellnessGym() {
		const headers = this.authHeader();
		return this._http.get(this.API + "/wellness-gym/1", { headers });
	}

	getAllActiveEspacioPadre() {
		const headers = this.authHeader();
		return this._http.get(this.API + "/espacio-padre", { headers });
	}

	getAllEspaciosHijo(){
		const headers = this.authHeader();
		return this._http.get(this.API + "/espacio/", { headers });
	}

	getEspacioDeporte(id: number) {
		const headers = this.authHeader();
		return this._http.get(this.API + `/espacio-deporte/${id}`, { headers });
	}

	getHorariosDisponibles(body: { ids: number; date: string }) {
		const headers = this.authHeader();
		const params = new HttpParams({ fromObject: body });
		const options = { headers, params };
		return this._http.get(this.API + `/reservation`, options);
	}

	getMisReservaciones(){
		const headers = this.authHeader();
		return this._http.get(this.API + `/reservation/user/`, { headers });
	}

	getEspaciosByIdPadre(id: number) {
		const headers = this.authHeader();
		return this._http.get(this.API + `/espacio/espacio-padre/${id}`, { headers});
	}

	getEspaciosPadreByDeporteId(id: number){
		const headers = this.authHeader();
		return this._http.get(this.API + `/espacio-padre/deporte/${id}`, { headers });
	}

	getAllActiveTorneos() {
		const headers = this.authHeader();
		return this._http.get(this.API + "/torneo/", { headers });
	}

	getAllDeportes(): Observable<any> {
		const headers = this.authHeader();
		return this._http.get(this.API + "/deporte/", { headers });
	}

	getAllPuntosImportantes(): Observable<any> {
		const headers = this.authHeader();
		return this._http.get(this.API + "/punto-importante/", { headers });
	}

	getPuntosImportantesByEspacio(id: number){
		const headers = this.authHeader();
		return this._http.get(this.API + `/espacio-punto-importante/${id}`, { headers });
	}

	getAllActiveAnuncios() {
		const headers = this.authHeader();
		return this._http.get(this.API + "/anuncio/", { headers });
	}

	getCurrentUser() {
		const headers = this.authHeader();
		return this._http.get(this.API + "/auth/user/", { headers });
	}

	//POST
	addEspacioPadre(espacioPadre: EspacioPadre): Observable<any> {
		const headers = this.authHeader();
		return this._http.post(this.API + "/espacio-padre/", espacioPadre, {
			headers,
		});
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

		const headers = this.authHeader();
		const res = this._http.post(this.API + "/espacio/", formData, { headers });
		console.log(res);
		// let espacio_id = res.espacio_id;
		return res;
	}

	addDeporte(deporte: Deporte): Observable<any> {
		const formData = new FormData();
		formData.append("name", deporte.name);
		formData.append("imagen", deporte.imagen, `${deporte.name}.jpeg`);
		const headers = this.authHeader();
		return this._http.post(this.API + "/deporte/", formData, { headers });
	}

	addPuntoImportante(puntoImportante: PuntoImportante): Observable<any> {
		const headers = this.authHeader();
		return this._http.post(this.API + "/punto-importante/", puntoImportante, {
			headers,
		});
	}

	//Delete

	deleteReservacion(id: number){
		const headers = this.authHeader();
		return this._http.delete(this.API + `/reservation/${id}`, { headers });
	}
	
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
		const headers = this.authHeader();
		return this._http.post(this.API + "/torneo/", formData, { headers });
	}

	addAnuncio(anuncio: Anuncio): Observable<any> {
		const formData = new FormData();
		formData.append("name", anuncio.name);
		formData.append("description", anuncio.description);
		formData.append("url", anuncio.url);
		formData.append("imagen", anuncio.image, `${anuncio.name}.jpeg`);
		const headers = this.authHeader();
		return this._http.post(this.API + "/anuncio/", formData, { headers });
	}

	postCreateReservacion(body: {
		espacio_id: number;
		date: string;
		start_time: string;
		end_time: string;
	}) {
		const headers = this.authHeader();		
		const options = { headers };
		return this._http.post(this.API + `/reservation/`, body, options);
	}

	authRoute(): string {
		return this.API + "/auth/google";
	}
}
