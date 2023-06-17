// select-espacio-padre.component.spec.ts
// Archivo de pruebas unitarias del componente de seleccionar espacio-padre
// Comprueba que todos los elementos html y de la libreria ng zorro esten importados y rendericen correctamente

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectEspacioPadreComponent } from './select-espacio-padre.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ApiserviceService } from 'src/app/Service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SelectEspacioPadreComponent', () => {
  let component: SelectEspacioPadreComponent;
  let fixture: ComponentFixture<SelectEspacioPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, RouterTestingModule, BrowserAnimationsModule ],
      providers: [NzMessageService,NzModalService, ApiserviceService],
      declarations: [ SelectEspacioPadreComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectEspacioPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
