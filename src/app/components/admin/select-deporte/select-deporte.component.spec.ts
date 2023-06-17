// select-deporte.component.spec.ts
// Archivo de pruebas unitarias del componente de seleccionar deporte
// Comprueba que todos los elementos html y de la libreria ng zorro esten importados y rendericen correctamente

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDeporteComponent } from './select-deporte.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ApiserviceService } from 'src/app/Service';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SelectDeporteComponent', () => {
  let component: SelectDeporteComponent;
  let fixture: ComponentFixture<SelectDeporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, RouterTestingModule, BrowserAnimationsModule],
      providers: [NzMessageService,NzModalService, ApiserviceService],
      declarations: [ SelectDeporteComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectDeporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
