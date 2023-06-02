import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiserviceService } from 'src/app/Service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-select-espacio-padre',
  templateUrl: './select-espacio-padre.component.html',
  styleUrls: ['./select-espacio-padre.component.css']
})
export class SelectEspacioPadreComponent implements OnInit {
  @Input() espacio_id = '';

  @Output() espacio_padre_id = new EventEmitter<string>();

  arrEspacioPadre: any;

  constructor(
    private _apiservice: ApiserviceService,
    private message: NzMessageService
  ) {
  }

  ngOnInit() {
    this._apiservice.getAllActiveEspacioPadre().subscribe((res) => {
      this.arrEspacioPadre = res;
    });
  }

  refresh() {
    this._apiservice.getAllActiveEspacioPadre().subscribe((res) => {
      this.arrEspacioPadre = res;
    });
  }
  onSelectEspacio(val: any) {

  }

  cancelDelete(): void {
    console.log('click cancel');
  }

  confirmDelete(): void {
    console.log('click confirm');
  }

}
