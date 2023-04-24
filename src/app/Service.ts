import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})

export class ApiserviceService{
    constructor(private _http:HttpClient){}

    getAllActiveEspacioPadre(){return this._http.get('http://localhost:8000/api/espacio-padre')}

    getEspaciosByIdPadre(id:number){return this._http.get(`http://localhost:8000/api/espacio/espacio-padre/${id}`)}

}