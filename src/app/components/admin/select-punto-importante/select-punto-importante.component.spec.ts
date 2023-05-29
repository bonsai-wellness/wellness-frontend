import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPuntoImportanteComponent } from './select-punto-importante.component';

describe('SelectPuntoImportanteComponent', () => {
  let component: SelectPuntoImportanteComponent;
  let fixture: ComponentFixture<SelectPuntoImportanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectPuntoImportanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectPuntoImportanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
