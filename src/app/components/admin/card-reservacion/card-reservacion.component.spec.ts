// card-rerservacion.component.spec.ts
// Archivo de pruebas unitarias del componente de la tarjeta de reservacion
// Comprueba que todos los elementos html y de la libreria ng zorro esten importados y rendericen correctamente
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardReservacionComponent } from './card-reservacion.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ApiserviceService } from 'src/app/Service';
import { ModalDeleteComponent } from '../modal-delete/modal-delete.component';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';

describe('CardReservacionComponent', () => {
  let component: CardReservacionComponent;
  let fixture: ComponentFixture<CardReservacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, RouterTestingModule, NzPopconfirmModule ],
      providers: [NzMessageService,NzModalService, ApiserviceService],
      declarations: [ CardReservacionComponent, ModalDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardReservacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
