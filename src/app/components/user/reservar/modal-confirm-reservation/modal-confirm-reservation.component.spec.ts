import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalConfirmReservationComponent } from './modal-confirm-reservation.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NzModalService } from 'ng-zorro-antd/modal';
import { EspaciosPadreComponent } from '../tab-lugar/espacios-padre/espacios-padre.component';

describe('ModalConfirmReservationComponent', () => {
  let component: ModalConfirmReservationComponent;
  let fixture: ComponentFixture<ModalConfirmReservationComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports:[ HttpClientTestingModule, RouterTestingModule, ],
      declarations: [ ModalConfirmReservationComponent, EspaciosPadreComponent ],
      providers: [NzModalService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalConfirmReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
