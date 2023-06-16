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
    return this._http.get(this.API + "/wellness-gym/1", { headers })
  }

  
  jsonData : any  = []; 

  getData(): void {
      this.fetchData().subscribe((data: any) => {
      this.jsonData = data
  
      }); 
	}

  ngOnInit(): void {
    this.getGym();
    this.getReservations();;
    setInterval(() => {
      this.getGym();
      this.getReservations();
    }, 5000);
  }

  jsonDataArray : any = [];

  getGym(): void {
    let porcentaje = 0;
    let aforoActualString = "";
   
    // look for the data, and if it is not found, set it to 0
    if (this.jsonData.aforo_actual == null) {
      aforoActualString = "0";
    } else {
      aforoActualString = this.jsonData.aforo_actual;
    }

    // look for the data, and if it is not found, set it to 0
    if (this.jsonData.capacidad_max == null) {
      porcentaje = 0;
    } else {
      porcentaje = (this.jsonData.aforo_actual / this.jsonData.capacidad_max) * 100;
      porcentaje = Math.round(porcentaje);
      // with no decimals
      porcentaje = Math.trunc(porcentaje);

    }


    
    this.jsonDataArray = [
      {
        aforo_actual: aforoActualString.toString(),
        porcentaje: porcentaje.toString(),
      } 
    ]
    this.getData();

  }



    // function that fetch reservations from the API
    fetchDataRes() {
      const headers = this.authHeader();
      return this._http.get(this.API + "/reservation/today", { headers });
    }
  

    jsonDataRes : any
    jsonDataResArray : any = [];
    getReservations(): void {
      this.fetchDataRes().subscribe((data: any) => {
      this.jsonDataRes = data;
      }
      );
      let length = 0;
      if (this.jsonDataRes != null) {
        length = this.jsonDataRes.length;
      }

      this.jsonDataResArray = [
        {
          reservaciones: length.toString()
        }
      ]
    }
  


}


 


  



