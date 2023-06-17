// header-espacio.component.spec.ts
// Archivo de pruebas unitarias del componente del encabezado de espacio
// Comprueba que todos los elementos html y de la libreria ng zorro esten importados y rendericen correctamente
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderEspacioComponent } from './header-espacio.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { ApiserviceService } from 'src/app/Service';
import { ModalEditEspacioComponent } from '../modal-edit-espacio/modal-edit-espacio.component';

describe('HeaderEspacioComponent', () => {
  let component: HeaderEspacioComponent;
  let fixture: ComponentFixture<HeaderEspacioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, RouterTestingModule, NzModalModule],
      providers: [NzMessageService,NzModalService, ApiserviceService],
      declarations: [ HeaderEspacioComponent, ModalEditEspacioComponent ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderEspacioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
