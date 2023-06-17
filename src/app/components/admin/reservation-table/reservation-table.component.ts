// reservation-table.component.ts
// Componente de la tarjeta  de espacio
// define las plantillas de componentes html y de estilos css para el modulo de administrador 
// Se asigna el nombre 'app-reservation-table' al componente
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Component, ViewChild, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-reservation-table',
  templateUrl: './reservation-table.component.html',
  styleUrls: ['./reservation-table.component.css']
})
export class ReservationTableComponent {

  // API: string = "http://localhost:8000/api";
  API: string = "https://bonsai-rest.azurewebsites.net/api";
  
  constructor(private _http: HttpClient) {}

	authHeader(): HttpHeaders {
		const token = localStorage.getItem("token");
		const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
		return headers;
	}

  // function that fetch reservations from the API
  fetchData() {
    const headers = this.authHeader();
    return this._http.get(this.API + "/reservation/today", { headers });
  }

  
  jsonData : any 

  getData(): void {
      this.fetchData().subscribe((data: any) => {
      this.jsonData = data;
      }); 
	}

  ngOnInit(): void {
    this.getReservations();;
    setInterval(() => {
      this.getReservations();
    }, 5000);
  }

  getReservations(): void {
    this.getData();
  }

}


 


  



