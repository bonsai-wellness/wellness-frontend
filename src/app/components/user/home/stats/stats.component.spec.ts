import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsComponent } from './stats.component';
import { CarouselComponent, CarouselModule, SlideComponent } from 'ngx-bootstrap/carousel';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AforoActualComponent } from './aforo-actual/aforo-actual.component';
import { AdminChartsComponent } from 'src/app/components/admin/admin-charts/admin-charts.component';

describe('StatsComponent', () => {
  let component: StatsComponent;
  let fixture: ComponentFixture<StatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[CarouselModule, HttpClientTestingModule, RouterTestingModule,  ],
      declarations: [ StatsComponent, AforoActualComponent, AdminChartsComponent, SlideComponent ]
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
