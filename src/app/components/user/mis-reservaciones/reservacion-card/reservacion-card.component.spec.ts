import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservacionCardComponent } from './reservacion-card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NzMessageService } from 'ng-zorro-antd/message';

describe('ReservacionCardComponent', () => {
  let component: ReservacionCardComponent;
  let fixture: ComponentFixture<ReservacionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ HttpClientTestingModule, RouterTestingModule, ],
      declarations: [ ReservacionCardComponent ],
      providers: [NzMessageService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservacionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
