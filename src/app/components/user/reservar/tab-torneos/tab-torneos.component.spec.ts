import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabTorneosComponent } from './tab-torneos.component';

describe('TabTorneosComponent', () => {
  let component: TabTorneosComponent;
  let fixture: ComponentFixture<TabTorneosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabTorneosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabTorneosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
