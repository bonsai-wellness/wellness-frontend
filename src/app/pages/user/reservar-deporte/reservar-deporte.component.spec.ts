import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservarDeporteComponent } from './reservar-deporte.component';

describe('ReservarDeporteComponent', () => {
  let component: ReservarDeporteComponent;
  let fixture: ComponentFixture<ReservarDeporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservarDeporteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservarDeporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
