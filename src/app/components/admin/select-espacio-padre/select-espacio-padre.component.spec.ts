import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectEspacioPadreComponent } from './select-espacio-padre.component';

describe('SelectEspacioPadreComponent', () => {
  let component: SelectEspacioPadreComponent;
  let fixture: ComponentFixture<SelectEspacioPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectEspacioPadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectEspacioPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
