import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDeporteComponent } from './select-deporte.component';

describe('SelectDeporteComponent', () => {
  let component: SelectDeporteComponent;
  let fixture: ComponentFixture<SelectDeporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectDeporteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectDeporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
