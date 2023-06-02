import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ApiserviceService } from 'src/app/Service';
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-modal-edit-espacio',
  templateUrl: './modal-edit-espacio.component.html',
  styleUrls: ['./modal-edit-espacio.component.css']
})
export class ModalEditEspacioComponent implements OnInit{
  @Input() isVisible = false;
  @Output() answer = new EventEmitter<string>();

  espacio: any;
  param_id: any;
  arrEspacioPadre: any;
  openAt = new Date();
  closeAt = new Date();
  espacioOptions = [];
  formEspacio!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private _apiservice: ApiserviceService,
    public formularioEspacio: FormBuilder,
    private message: NzMessageService
  ) {
    let params: any = this.location.getState();

    this.formEspacio = this.formularioEspacio.group({
      name: [params?.name],
      code: [params?.code],
      capacity: [params?.capacity],
      time_max: [params?.time_max],
      details: [params?.details],
      open_at: [params?.open_at],
      close_at: [params?.close_at],
      espacio_padre_id: [params?.espacio_padre_id],
      is_active: [params?.is_active],
      imagen: [params?.imagen],
    });
  }

  ngOnInit(): void {
    this.param_id = this.route.snapshot.paramMap.get("espacio_id");
    this.espacio = this.location.getState();
  }


  addFileEspacio(newItem: string) {
    this.formEspacio.get("imagen")?.setValue(newItem);
  }

  handleCancel(){
    this.isVisible = false;
  }

  handleEdit(){

  }

  
}
