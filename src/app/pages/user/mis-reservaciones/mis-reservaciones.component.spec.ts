import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisReservacionesComponent } from './mis-reservaciones.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NzListModule } from 'ng-zorro-antd/list';

describe('MisReservacionesComponent', () => {
  let component: MisReservacionesComponent;
  let fixture: ComponentFixture<MisReservacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisReservacionesComponent ],
      imports:[HttpClientTestingModule, RouterTestingModule, NzListModule ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisReservacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
