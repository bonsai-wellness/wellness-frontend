import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AforoActualComponent } from './aforo-actual.component';

describe('AforoActualComponent', () => {
  let component: AforoActualComponent;
  let fixture: ComponentFixture<AforoActualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
