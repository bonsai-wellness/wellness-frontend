import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
//Models
import { EspacioPadre } from "./models/espacioPadre/espacioPadre";

@Injectable({ providedIn: "root" })
export class ApiserviceService {
  API: string = "https://bonsai-rest.azurewebsites.net/api";
  // API: string = "http://localhost:8000/api";

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

  addEspacio(file: any): Observable<any> {
    // Create form data
    const formData = new FormData();

    // Store form name as "file" with file data
    formData.append("file", file, file.name);

    // Make http post request over api
    // with formData as req
    return this._http.post(this.API, formData);
  }

}
