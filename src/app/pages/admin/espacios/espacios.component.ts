import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NzMarks } from 'ng-zorro-antd/slider';
import { EspacioPadre } from 'src/app/models/espacioPadre/espacioPadre';
import { ApiserviceService } from 'src/app/Service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzTabsCanDeactivateFn } from 'ng-zorro-antd/tabs';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-espacios',
  templateUrl: './espacios.component.html',
  styleUrls: ['./espacios.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EspaciosComponent implements OnInit {
  isVisibleEspacioPadreModal = false;
  isVisibleEspacioModal = false;
  newData: any;
  espaciosPadre: EspacioPadre[] = [];
  users:any;
  padre:any;
  formEspacioPadre:FormGroup;


  constructor(private _apiservice: ApiserviceService, private modal: NzModalService, public formularioEspacioPadre:FormBuilder) {

    this.formEspacioPadre = this.formularioEspacioPadre.group({
      name:[''],
      code:[''],
      map_url:[''],
      is_active: ['T'],
    })
   }

  ngOnInit() {
    this._apiservice.getAllActiveEspacioPadre().subscribe(res => { 
      // this.espaciosPadre=res;
      console.log(res);
      this.newData = res; 
    })
  }

  showEspacioPadreModal(): void {
    this.isVisibleEspacioPadreModal = true;
  }

  showEspacioModal(): void {
    this.isVisibleEspacioModal = true;
  }

  handleAddEspacioPadre(): void {
    console.log('Button ok clicked!');
    console.log(this.formEspacioPadre.value);
    this._apiservice.addEspacioPadre(this.formEspacioPadre.value).subscribe(respuesta=>{
      console.log('Post espacio padre');
    });
    this.isVisibleEspacioPadreModal = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisibleEspacioPadreModal = false;
    this.isVisibleEspacioModal =false;
  }

  //Espacio Padre modal
  openEspacioPadreModal: NzTabsCanDeactivateFn = (fromIndex: number, toIndex: number) => {
    if(toIndex>= this.newData.length){
      return this.confirmOpenEspacioPadreModal();
    }else{
      return true;
    }
  };

  private confirmOpenEspacioPadreModal(): Observable<boolean> {
    return new Observable(observer => {
      this.isVisibleEspacioPadreModal = true;
    });
  }
  

}
