import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { HomeComponent } from "./home.component";
import { StatsComponent } from "src/app/components/user/home/stats/stats.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AnunciosComponent } from "../../admin/anuncios/anuncios.component";
import { NzMessageService } from "ng-zorro-antd/message";
import { NzModalModule, NzModalService } from "ng-zorro-antd/modal";
import { CarouselComponent, CarouselModule } from "ngx-bootstrap/carousel";
import { AforoActualComponent } from "src/app/components/user/home/stats/aforo-actual/aforo-actual.component";
import { AdminChartsComponent } from "src/app/components/admin/admin-charts/admin-charts.component";

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        StatsComponent,
        AnunciosComponent,
        AforoActualComponent,
        AdminChartsComponent,
      ],
      imports: [HttpClientTestingModule, RouterTestingModule, CarouselModule, NzModalModule],
      providers: [NzMessageService, NzModalService],
      // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should render all Home screen components", () => {
    expect(component).toBeTruthy();
  });
});
