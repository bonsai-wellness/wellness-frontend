import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaciosPadreComponent } from './espacios-padre.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzListModule } from 'ng-zorro-antd/list';

describe('EspaciosPadreComponent', () => {
  let component: EspaciosPadreComponent;
  let fixture: ComponentFixture<EspaciosPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ BrowserAnimationsModule, HttpClientTestingModule, RouterTestingModule, NzCollapseModule, NzListModule],
      declarations: [ EspaciosPadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspaciosPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
