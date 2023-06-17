import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabLugarComponent } from './tab-lugar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EspaciosPadreComponent } from '../espacios-padre/espacios-padre.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';

describe('TabLugarComponent', () => {
  let component: TabLugarComponent;
  let fixture: ComponentFixture<TabLugarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ HttpClientTestingModule, RouterTestingModule, NzCollapseModule],
      declarations: [ TabLugarComponent, EspaciosPadreComponent, ]
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
