import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnunciosComponent } from './anuncios.component';
import { CarouselComponent, CarouselModule } from 'ngx-bootstrap/carousel';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiserviceService } from 'src/app/Service';

describe('AnunciosComponent', () => {
  let component: AnunciosComponent;
  let fixture: ComponentFixture<AnunciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[CarouselModule, HttpClientTestingModule, RouterTestingModule, ],
      declarations: [ AnunciosComponent ],
      providers: [ApiserviceService,]
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
