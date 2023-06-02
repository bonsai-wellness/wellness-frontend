import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntosImportantesComponent } from './puntos-importantes.component';

describe('PuntosImportantesComponent', () => {
  let component: PuntosImportantesComponent;
  let fixture: ComponentFixture<PuntosImportantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuntosImportantesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuntosImportantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
