import { Component, Input, NgIterable, OnInit } from '@angular/core';
import { ModuleAdmin } from 'src/app/models/admin/moduleAdmin/moduleAdmin';
import { AppConstants } from 'src/app/app-constants';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-cardTorneo',
  templateUrl: './cardTorneo.component.html',
  styleUrls: ['./cardTorneo.component.css']
})
export class CardTorneoComponent  implements OnInit{

  @Input() torneo_id = 0;
  @Input() created_at = '';
  @Input() updated_at = '';
  @Input() name = '';
  @Input() evento = '';
  @Input() description = '';
  @Input() url = '';
  @Input() date_start = new Date();
  @Input() date_end = new Date();
  @Input() location = '';
  @Input() imagen = '';
  @Input() is_active = '';
  @Input() deporte_id = 0;
  isVisibleDelete =false;

  baseURL = AppConstants.baseURL;
  constructor(private modal: NzModalService) {}

  ngOnInit(): void {
   }

  handleDelete(){

  }
  
}