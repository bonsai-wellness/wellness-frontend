import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EspacioDetailsComponent } from './espacio-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

describe('EspacioDetailsComponent', () => {
  let component: EspacioDetailsComponent;
  let fixture: ComponentFixture<EspacioDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, NzModalModule, NzTabsModule],
      declarations: [ EspacioDetailsComponent ],
      providers: [NzModalService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspacioDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    let httpClient = TestBed.get(HttpClient);
    let httpTestingController = TestBed.get(HttpTestingController);

  });


  it('should render all Espacio Details screen components', inject(
    [HttpTestingController],
    ()  => {
    expect(component).toBeTruthy();
  }));

  // it('should do a get', ()=>{

  // });

});
