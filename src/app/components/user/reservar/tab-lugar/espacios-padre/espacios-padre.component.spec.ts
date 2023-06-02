import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaciosPadreComponent } from './espacios-padre.component';

describe('EspaciosPadreComponent', () => {
  let component: EspaciosPadreComponent;
  let fixture: ComponentFixture<EspaciosPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaciosPadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspaciosPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
