import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
//Models
import { EspacioPadre } from "./models/espacioPadre/espacioPadre";
import { Deporte } from "./models/deporte/deporte";
import { PuntoImportante } from "./models/puntoImportante/puntoImportante";
import { Espacio } from "./models/espacio/espacio";
@Injectable({ providedIn: "root" })
export class ApiserviceService {
  // API: string = "https://bonsai-rest.azurewebsites.net/api";
  API: string = "http://localhost:8000/api";

  constructor(private _http: HttpClient) {}

  //GETS
  getAllActiveEspacioPadre() {
    return this._http.get(this.API+"/espacio-padre");
  }

  getDeporteById(id:number){ return this._http.get(this.API+`/espacio-deporte/${id}`)}
    
  getEspaciosByIdPadre(id: number) {
    return this._http.get(
      this.API+`/espacio/espacio-padre/${id}`
    );
  }

  getAllActiveTorneos() {
    return this._http.get(this.API+"/torneo/");
  }

  getAllDeportes(): Observable<any> {
    return this._http.get(this.API+"/deporte/");
  }
  getAllPuntosImportantes(): Observable<any> {
    return this._http.get(this.API+"/punto-importante/");
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
    formData.append("open_at", espacio.open_at.toISOString());
    formData.append("close_at", espacio.close_at.toISOString());
    formData.append("espacio_padre_id", espacio.espacio_padre_id as any);
    formData.append("imagen", espacio.imagen, `${espacio.name}.jpeg`);
    formData.append("is_active", espacio.is_active);

    const res = this._http.post(this.API+ "/espacio/", formData);
    console.log(res);
    // let espacio_id = res.espacio_id;
    return res;

    // formData.append("deporte_id", espacio.deporte_id);
    // formData.append("puntos_importantes_id", espacio.puntos_importantes_id);


    // Make http post request over api
    // with formData as req
  }

  addDeporte(deporte: Deporte):  Observable<any> {
    const formData = new FormData();
    formData.append("name", deporte.name);
    formData.append("imagen", deporte.imagen, `${deporte.name}.jpeg`);
    return this._http.post(this.API + "/deporte/", formData);
  }

  addPuntoImportante(puntoImportante: PuntoImportante):  Observable<any> {
    return this._http.post(this.API + "/punto-importante/", puntoImportante);
  }

}
