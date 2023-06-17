import { ComponentFixture, TestBed, inject } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { ReservarDeporteComponent } from "./reservar-deporte.component";
import { RouterTestingModule } from "@angular/router/testing";
import { NzTabsModule } from "ng-zorro-antd/tabs";
import { TabLugarComponent } from "src/app/components/user/reservar/tab-lugar/tab-lugar/tab-lugar.component";
import { TabReservarComponent } from "src/app/components/user/reservar/tab-reservar/tab-reservar/tab-reservar.component";
import { TabTorneosComponent } from "src/app/components/user/reservar/tab-torneos/tab-torneos.component";
import { EspaciosPadreComponent } from "src/app/components/user/reservar/tab-lugar/espacios-padre/espacios-padre.component";
import { NzCollapseModule } from "ng-zorro-antd/collapse";
import { SelectEspacioHijoComponent } from "src/app/components/user/reservar/tab-reservar/select-espacio-hijo/select-espacio-hijo.component";
import { NzCalendarModule } from "ng-zorro-antd/calendar";
import { CalendarComponent } from "src/app/components/user/reservar/tab-reservar/calendar/calendar.component";
import { NzSelectModule } from "ng-zorro-antd/select";
import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("ReservarDeporteComponent", () => {
  let component: ReservarDeporteComponent;
  let fixture: ComponentFixture<ReservarDeporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        NzTabsModule,
        NzCollapseModule,
        NzCalendarModule,
        NzSelectModule,
        BrowserAnimationsModule,
      ],
      declarations: [
        ReservarDeporteComponent,
        TabLugarComponent,
        TabReservarComponent,
        TabTorneosComponent,
        EspaciosPadreComponent,
        SelectEspacioHijoComponent,
        CalendarComponent,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ReservarDeporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should render all Reservar deporte screen components", inject(
    [HttpTestingController],
    () => {
      expect(component).toBeTruthy();
    }
  ));
});
