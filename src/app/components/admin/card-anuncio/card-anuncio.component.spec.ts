// card-anuncio.component.spec.ts
// Archivo de pruebas unitarias del componente de la tarjeta de anuncios
// Comprueba que todos los elementos html y de la libreria ng zorro esten importados y rendericen correctamente
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardAnuncioComponent } from './card-anuncio.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ApiserviceService } from 'src/app/Service';
import { ModalDeleteComponent } from '../modal-delete/modal-delete.component';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';

describe('CardAnuncioComponent', () => {
  let component: CardAnuncioComponent;
  let fixture: ComponentFixture<CardAnuncioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, RouterTestingModule, NzPopconfirmModule ],
      providers: [NzMessageService,NzModalService, ApiserviceService],
      declarations: [ CardAnuncioComponent, ModalDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAnuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
