import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabLugarComponent } from './tab-lugar.component';

describe('TabLugarComponent', () => {
  let component: TabLugarComponent;
  let fixture: ComponentFixture<TabLugarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabLugarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabLugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
