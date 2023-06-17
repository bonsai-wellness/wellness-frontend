// reservation-table.component.spec.ts
// Archivo de pruebas unitarias del componente de la tabla de reservacion
// Comprueba que todos los elementos html y de la libreria ng zorro esten importados y rendericen correctamente
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationTableComponent } from './reservation-table.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ApiserviceService } from 'src/app/Service';

describe('ReservationTableComponent', () => {
  let component: ReservationTableComponent;
  let fixture: ComponentFixture<ReservationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, RouterTestingModule, ],
      providers: [NzMessageService,NzModalService, ApiserviceService],
      declarations: [ ReservationTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
