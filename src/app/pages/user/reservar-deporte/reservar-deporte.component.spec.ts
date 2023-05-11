import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { ReservarDeporteComponent } from './reservar-deporte.component';
import { RouterTestingModule } from '@angular/router/testing';
describe('ReservarDeporteComponent', () => {
  let component: ReservarDeporteComponent;
  let fixture: ComponentFixture<ReservarDeporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ ReservarDeporteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservarDeporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render all Reservar deporte screen components',  inject(
    [HttpTestingController],
    () => {
    expect(component).toBeTruthy();
  }));
});
