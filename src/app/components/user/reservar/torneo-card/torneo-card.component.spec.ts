import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorneoCardComponent } from './torneo-card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('TorneoCardComponent', () => {
  let component: TorneoCardComponent;
  let fixture: ComponentFixture<TorneoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TorneoCardComponent ],
      imports:[ HttpClientTestingModule, RouterTestingModule, ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(TorneoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
