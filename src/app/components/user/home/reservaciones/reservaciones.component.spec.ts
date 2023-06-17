import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservacionesComponent } from './reservaciones.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ReservacionesComponent', () => {
  let component: ReservacionesComponent;
  let fixture: ComponentFixture<ReservacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ HttpClientTestingModule, RouterTestingModule, ],
      declarations: [ ReservacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
