import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddAnuncioComponent } from './modal-add-anuncio.component';

describe('ModalAddAnuncioComponent', () => {
  let component: ModalAddAnuncioComponent;
  let fixture: ComponentFixture<ModalAddAnuncioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddAnuncioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAddAnuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
