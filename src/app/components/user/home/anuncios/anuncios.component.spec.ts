import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnunciosComponent } from './anuncios.component';
import { CarouselComponent, CarouselModule } from 'ngx-bootstrap/carousel';

describe('AnunciosComponent', () => {
  let component: AnunciosComponent;
  let fixture: ComponentFixture<AnunciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselModule],
      declarations: [ AnunciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnunciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component Anuncios', () => {
    expect(component).toBeTruthy();
  });
});
