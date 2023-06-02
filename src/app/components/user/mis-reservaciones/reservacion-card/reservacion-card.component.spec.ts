import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservacionCardComponent } from './reservacion-card.component';

describe('ReservacionCardComponent', () => {
  let component: ReservacionCardComponent;
  let fixture: ComponentFixture<ReservacionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservacionCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservacionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
