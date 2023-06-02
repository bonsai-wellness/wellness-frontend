import { Component } from '@angular/core';
import { ApiserviceService } from "src/app/Service";

@Component({
  selector: 'app-tab-torneos',
  templateUrl: './tab-torneos.component.html',
  styleUrls: ['./tab-torneos.component.css']
})
export class TabTorneosComponent {
  listTorneos: any = [];

  constructor(private _apiservice: ApiserviceService) {}

  ngOnInit() {
    this._apiservice.getAllActiveTorneos().subscribe((res) => {
      this.listTorneos = res;      
    });
  }
}
