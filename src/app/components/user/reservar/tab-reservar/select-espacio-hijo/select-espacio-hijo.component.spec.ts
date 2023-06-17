import { fakeAsync, ComponentFixture, TestBed } from "@angular/core/testing";
import { SelectEspacioHijoComponent } from "./select-espacio-hijo.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { NzSelectModule } from "ng-zorro-antd/select";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("SelectEspacioHijoComponent", () => {
  let component: SelectEspacioHijoComponent;
  let fixture: ComponentFixture<SelectEspacioHijoComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SelectEspacioHijoComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        NzSelectModule,
        BrowserAnimationsModule,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectEspacioHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should compile", () => {
    expect(component).toBeTruthy();
  });
});
