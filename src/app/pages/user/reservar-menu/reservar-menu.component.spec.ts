import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservarMenuComponent } from './reservar-menu.component';

describe('ReservarComponent', () => {
  let component: ReservarMenuComponent;
  let fixture: ComponentFixture<ReservarMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservarMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
