import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-export-button',
  templateUrl: './export-button.component.html',
  styleUrls: ['./export-button.component.css']
})
export class ExportButtonComponent {
  
  // API: string = "http://localhost:8000/api";
  API: string = "https://bonsai-rest.azurewebsites.net/api";

  constructor(private _http: HttpClient) {}

	authHeader(): HttpHeaders {
		const token = localStorage.getItem("token");
		const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
    console.log(headers + "im working! ");
		return headers;
	}

  fetchData() {
    const headers = this.authHeader();
    return this._http.get(this.API + "/wellness-log", { headers });
  }

  
  jsonData : any 

  getData(): void {
      this.fetchData().subscribe((data: any) => {
      this.jsonData = data;
      console.log('this is data ' , this.jsonData)
      this.exportToCsv()
      }); 
	}

  exportToCsv(): void {
    const csvContent = this.convertArrayToCsv(this.jsonData);
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);

    link.setAttribute('href', url);
    link.setAttribute('download', 'data.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  convertArrayToCsv(data: any[]): string {
    const csvRows: string[] = [];

    // Get the headers from the first element
    const headers = Object.keys(data[0]);

    // Add the headers row to the CSV
    csvRows.push(headers.join(','));

    // Loop through the data and convert each object to a CSV row
    for (const item of data) {
      const values = headers.map(header => this.escapeCsvValue(item[header]));
      csvRows.push(values.join(','));
    }

    // Join all the rows into a single CSV string
    return csvRows.join('\n');
  }

  escapeCsvValue(value: any): string {
    // Escape double quotes and wrap the value in double quotes if necessary
    const escapedValue = String(value).replace(/"/g, '""');
    return `"${escapedValue}"`;
  }
}
  

