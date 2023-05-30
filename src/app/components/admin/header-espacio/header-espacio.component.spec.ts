import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderEspacioComponent } from './header-espacio.component';

describe('HeaderEspacioComponent', () => {
  let component: HeaderEspacioComponent;
  let fixture: ComponentFixture<HeaderEspacioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderEspacioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderEspacioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
