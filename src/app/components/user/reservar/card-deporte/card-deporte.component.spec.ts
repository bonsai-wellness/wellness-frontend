import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDeporteComponent } from './card-deporte.component';

describe('CardDeporteComponent', () => {
  let component: CardDeporteComponent;
  let fixture: ComponentFixture<CardDeporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDeporteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDeporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
