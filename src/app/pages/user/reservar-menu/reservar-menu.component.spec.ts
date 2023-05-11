import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ReservarMenuComponent } from './reservar-menu.component';
import { NzInputGroupComponent } from 'ng-zorro-antd/input';
import { NzInputModule } from 'ng-zorro-antd/input';
describe('ReservarMenuComponent', () => {
  let component: ReservarMenuComponent;
  let fixture: ComponentFixture<ReservarMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, NzInputModule],
      declarations: [ ReservarMenuComponent ],
      providers: [NzModalService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render all Reervar menu screen components', inject(
    [HttpTestingController],
    () => {
    expect(component).toBeTruthy();
  }));
});
