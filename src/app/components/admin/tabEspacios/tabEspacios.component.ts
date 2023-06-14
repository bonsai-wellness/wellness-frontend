import { Component, Input, NgIterable } from '@angular/core';
import { ModuleAdmin } from 'src/app/models/admin/moduleAdmin/moduleAdmin';
import { ApiserviceService } from 'src/app/Service';

@Component({
  selector: 'app-tabEspacios',
  templateUrl: './tabEspacios.component.html',
  styleUrls: ['./tabEspacios.component.css']
})
export class TabEspaciosComponent  {

  @Input() espacio_padre_id = 0;
  constructor(private _apiservice: ApiserviceService) { }
  espaciosArray: any;

  ngOnInit() {
    this._apiservice.getEspaciosByIdPadre(this.espacio_padre_id).subscribe(res => { 
      this.espaciosArray = res; 
    })
    
  }

}