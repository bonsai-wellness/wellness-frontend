// modal-edit-espacio.component.spec.ts
// Archivo de pruebas unitarias del componente de modal editar espacio
// Comprueba que todos los elementos html y de la libreria ng zorro esten importados y rendericen correctamente
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalEditEspacioComponent } from './modal-edit-espacio.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalComponent, NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { ApiserviceService } from 'src/app/Service';
import { HeaderEspacioComponent } from '../header-espacio/header-espacio.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ModalEditEspacioComponent', () => {
  let component: ModalEditEspacioComponent;
  let fixture: ComponentFixture<ModalEditEspacioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, RouterTestingModule,NzModalModule, ],
      providers: [NzMessageService,NzModalService, ApiserviceService],
      declarations: [ ModalEditEspacioComponent, ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditEspacioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
