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
      // console.log('this is data aaaaaa' , this.jsonData);
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
    console.log('OUTSIDE JSON DATA' , this.jsonData);

    // let userNames = [];


    // if (this.jsonData) {
    //   for (let i = 0; i < this.jsonData.length; i++) {
    //     userNames.push(this.jsonData[i].u_name);
    //   }
    // }  
    
    // for (let i = 0; i < userNames.length; i++) {
    //  console.log('this is user name' , userNames[i]);
    // }

    // now we have the user names in the array userNames
    // lets put it into the html table
    // let table = document.getElementById("reservation-table");
    // let tableBody = document.getElementById("reservation-table-body");
    // tableBody.innerHTML = "";
    // for (let i = 0; i < userNames.length; i++) {
    //   let row = tableBody.insertRow(i);
    //   let cell1 = row.insertCell(0);
    //   let cell2 = row.insertCell(1);
    //   cell1.innerHTML = userNames[i];
    //   cell2.innerHTML = "Not yet";
    // }
  }







}


 


  



