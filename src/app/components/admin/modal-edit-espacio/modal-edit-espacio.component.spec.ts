import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditEspacioComponent } from './modal-edit-espacio.component';

describe('ModalEditEspacioComponent', () => {
  let component: ModalEditEspacioComponent;
  let fixture: ComponentFixture<ModalEditEspacioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditEspacioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditEspacioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
