import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabReservarComponent } from './tab-reservar.component';

describe('TabReservarComponent', () => {
  let component: TabReservarComponent;
  let fixture: ComponentFixture<TabReservarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabReservarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabReservarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
