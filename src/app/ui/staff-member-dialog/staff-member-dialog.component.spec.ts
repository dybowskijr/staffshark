import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffMemberDialogComponent } from './staff-member-dialog.component';

describe('AddStaffMemberDialogComponent', () => {
  let component: StaffMemberDialogComponent;
  let fixture: ComponentFixture<StaffMemberDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffMemberDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffMemberDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
