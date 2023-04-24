import { Component, OnInit } from '@angular/core';
import { NzMarks } from 'ng-zorro-antd/slider';
import { EspacioPadre } from 'src/app/models/espacioPadre/espacioPadre';
import { ApiserviceService } from 'src/app/Service';

@Component({
  selector: 'app-espacios',
  templateUrl: './espacios.component.html',
  styleUrls: ['./espacios.component.css']
})
export class EspaciosComponent implements OnInit {

  newData: any;
  espaciosPadre: EspacioPadre[] = [];
  users:any;
  padre:any;
  constructor(private _apiservice: ApiserviceService) { }

  ngOnInit() {
    this._apiservice.getAllActiveEspacioPadre().subscribe(res => { 
      // this.espaciosPadre=res;
      console.log(res);
      this.newData = res; 
    })

    
  }

  

}
