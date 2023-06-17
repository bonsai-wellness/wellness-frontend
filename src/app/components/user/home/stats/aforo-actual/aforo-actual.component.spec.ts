import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AforoActualComponent } from './aforo-actual.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('AforoActualComponent', () => {
  let component: AforoActualComponent;
  let fixture: ComponentFixture<AforoActualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ HttpClientTestingModule, RouterTestingModule, ],
      declarations: [ AforoActualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AforoActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
