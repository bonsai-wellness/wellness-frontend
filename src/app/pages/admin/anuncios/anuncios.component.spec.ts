import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnunciosComponent } from './anuncios.component';
import { CarouselComponent } from 'ngx-bootstrap/carousel';

describe('AnunciosComponent', () => {
  let component: AnunciosComponent;
  let fixture: ComponentFixture<AnunciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnunciosComponent, CarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnunciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render all Anuncios screen components', () => {
    expect(component).toBeTruthy();
  });
});
