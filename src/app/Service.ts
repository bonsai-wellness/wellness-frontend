import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
//Models
import { EspacioPadre } from "./models/espacioPadre/espacioPadre";

@Injectable({providedIn:'root'})

export class ApiserviceService{
    API: string = 'http://localhost:8000/api';
    constructor(private _http:HttpClient){}

    getAllActiveEspacioPadre(){return this._http.get('http://localhost:8000/api/espacio-padre')}

    getEspaciosByIdPadre(id:number){return this._http.get(`http://localhost:8000/api/espacio/espacio-padre/${id}`)}

    getAllActiveTorneos(){return this._http.get('http://localhost:8000/api/torneo/')}

    // createEspacioPadre(body:any){return this._http.post(
    //     URL: `http://localhost:8000/api/espacio-padre`,
    //     body: body,
    //     )}

    addEspacioPadre(espacioPadre: EspacioPadre): Observable<any> {
        return this._http.post(this.API + '/espacio-padre/', espacioPadre);
      }

}