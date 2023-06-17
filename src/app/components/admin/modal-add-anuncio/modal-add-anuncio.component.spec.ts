// modal-add-anuncio.component.spec.ts
// Archivo de pruebas unitarias del componente del modal agregar anuncio
// Comprueba que todos los elementos html y de la libreria ng zorro esten importados y rendericen correctamente
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalAddAnuncioComponent } from './modal-add-anuncio.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { ApiserviceService } from 'src/app/Service';

describe('ModalAddAnuncioComponent', () => {
  let component: ModalAddAnuncioComponent;
  let fixture: ComponentFixture<ModalAddAnuncioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, RouterTestingModule, NzModalModule ],
      providers: [NzMessageService, NzModalService, ApiserviceService],
      declarations: [ ModalAddAnuncioComponent ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAddAnuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
