import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Component, ViewChild, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-people-card',
  templateUrl: './admin-people-card.component.html',
  styleUrls: ['./admin-people-card.component.css']
})

export class AdminPeopleCardComponent {
  // API: string = "http://localhost:8000/api";
  API: string = "https://bonsai-rest.azurewebsites.net/api";
  
  constructor(private _http: HttpClient) {}

	authHeader(): HttpHeaders {
		const token = localStorage.getItem("token");
		const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
		return headers;
	}

  fetchData() {
    const headers = this.authHeader();
    return this._http.get(this.API + "/wellness-gym/1", { headers });
  }

  // fetchReservations() {
  //   const headers = this.authHeader();
  //   return this._http.get(this.API + "reservation/today/1", { headers });
  // }

  
  jsonData : any 

  getData(): void {
      this.fetchData().subscribe((data: any) => {
      this.jsonData = data;
      }); 
	}

  // getReservations(): void {
  //   this.fetchReservations().subscribe((data: any) => {
  //   this.jsonData = data;
  //   });
  // }


  ngOnInit(): void {
    this.getGym();
    // this.getReservations();
    setInterval(() => {
      this.getGym();
      // this.getReservations();
    }, 5000);
  }

  getGym(): void {
    this.getData();
    // this.getReservations();

    let aforoActual = 0;
    let aforoMax = 0;
    if (this.jsonData) {
      aforoActual = this.jsonData.aforo_actual;
      aforoMax = this.jsonData.capacidad_max;
    }

    
    
    let aforoActualHTML:any = document.getElementById("aforoActual");
    aforoActualHTML.innerHTML = aforoActual.toString();

    let porcentaje = Math.round((aforoActual / aforoMax) * 100);
    let porcentajeHTML:any = document.getElementById("porcentaje");
    porcentajeHTML.innerHTML = porcentaje.toString() + "%"; 

    // let reservations = this.jsonData.reservations;
    
  }







}


 


  



