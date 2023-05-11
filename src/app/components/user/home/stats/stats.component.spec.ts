import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsComponent } from './stats.component';
import { CarouselComponent, CarouselModule } from 'ngx-bootstrap/carousel';

describe('StatsComponent', () => {
  let component: StatsComponent;
  let fixture: ComponentFixture<StatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselModule],
      declarations: [ StatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component Stats', () => {
    expect(component).toBeTruthy();
  });
});
