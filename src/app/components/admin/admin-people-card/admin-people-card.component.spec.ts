import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPeopleCardComponent } from './admin-people-card.component';

describe('AdminPeopleCardComponent', () => {
  let component: AdminPeopleCardComponent;
  let fixture: ComponentFixture<AdminPeopleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPeopleCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPeopleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
