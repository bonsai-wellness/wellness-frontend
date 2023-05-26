import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectEspacioHijoComponent } from './select-espacio-hijo.component';

describe('SelectEspacioHijoComponent', () => {
  let component: SelectEspacioHijoComponent;
  let fixture: ComponentFixture<SelectEspacioHijoComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectEspacioHijoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectEspacioHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
