// espacios-details.component.spec.ts
// Archivo de pruebas unitarias de la pantalla de espacios
// Comprueba que todos los elementos html y de la libreria ng zorro esten importados y rendericen correctamente
// Manipula las 3 pestañas de reservaciones y el header espacio con la informaión del espacio
import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EspacioDetailsComponent } from './espacio-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HeaderEspacioComponent } from 'src/app/components/admin/header-espacio/header-espacio.component';
import { ModalEditEspacioComponent } from 'src/app/components/admin/modal-edit-espacio/modal-edit-espacio.component';
import { NzMessageService } from 'ng-zorro-antd/message';

describe('EspacioDetailsComponent', () => {
  let component: EspacioDetailsComponent;
  let fixture: ComponentFixture<EspacioDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, NzModalModule, NzTabsModule],
      declarations: [ EspacioDetailsComponent, HeaderEspacioComponent, ModalEditEspacioComponent ],
      providers: [NzModalService, NzMessageService, ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspacioDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    let httpClient = TestBed.get(HttpClient);
    let httpTestingController = TestBed.get(HttpTestingController);

  });


  it('should render all Espacio Details screen components', inject(
    [HttpTestingController],
    ()  => {
    expect(component).toBeTruthy();
  }));

  // it('should do a get', ()=>{

  // });

});
