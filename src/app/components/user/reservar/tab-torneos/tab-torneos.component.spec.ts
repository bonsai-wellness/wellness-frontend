import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabTorneosComponent } from './tab-torneos.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('TabTorneosComponent', () => {
  let component: TabTorneosComponent;
  let fixture: ComponentFixture<TabTorneosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabTorneosComponent ],
      imports:[ HttpClientTestingModule, RouterTestingModule, ],
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
