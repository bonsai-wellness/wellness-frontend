import { Component, OnInit } from '@angular/core';
import { NzMarks } from 'ng-zorro-antd/slider';
// import { EspacioPadre } from 'src/app/models/espacioPadre/espacioPadre';
import { ApiserviceService } from 'src/app/Service';
import { FormBuilder, FormGroup } from '@angular/forms';
declare var window:any;

@Component({
  selector: 'app-torneos',
  templateUrl: './torneos.component.html',
  styleUrls: ['./torneos.component.css']
})
export class TorneosComponent implements OnInit {
  isVisible = false;
  formTorneo:FormGroup;
  arrTorneos: any;
  // torneosPadre: EspacioPadre[] = [];
  users:any;
  padre:any;

  constructor(private _apiservice: ApiserviceService, public formularioTorneo:FormBuilder) {
    this.formTorneo = this.formularioTorneo.group({
      name:[''],
      code:[''],
    })
  }

  ngOnInit() {
    this._apiservice.getAllActiveTorneos().subscribe(res => { 
      // this.torneosPadre=res;
      console.log(res);
      this.arrTorneos = res; 
    });

    // this.formEspacioModal = new window.bootstrap.Modal(document.getElementById('espacioPadreModal'))
  }
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

}

