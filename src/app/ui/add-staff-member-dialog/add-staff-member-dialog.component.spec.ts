import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStaffMemberDialogComponent } from './add-staff-member-dialog.component';

describe('AddStaffMemberDialogComponent', () => {
  let component: AddStaffMemberDialogComponent;
  let fixture: ComponentFixture<AddStaffMemberDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStaffMemberDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStaffMemberDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
