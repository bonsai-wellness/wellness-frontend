import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorneoCardComponent } from './torneo-card.component';

describe('TorneoCardComponent', () => {
  let component: TorneoCardComponent;
  let fixture: ComponentFixture<TorneoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TorneoCardComponent ]
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
