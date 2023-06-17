// select-punto-importante.component.spec.ts
// Archivo de pruebas unitarias del componente de seleccionar punto-importante
// Comprueba que todos los elementos html y de la libreria ng zorro esten importados y rendericen correctamente
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectPuntoImportanteComponent } from './select-punto-importante.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ApiserviceService } from 'src/app/Service';
import { RouterTestingModule } from '@angular/router/testing';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SelectPuntoImportanteComponent', () => {
  let component: SelectPuntoImportanteComponent;
  let fixture: ComponentFixture<SelectPuntoImportanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, RouterTestingModule, NzSelectModule, BrowserAnimationsModule ],
      providers: [NzMessageService,NzModalService, ApiserviceService],
      declarations: [ SelectPuntoImportanteComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectPuntoImportanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
