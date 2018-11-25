import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubVenueDialogComponent } from './edit-subvenue-dialog.component';

describe('AddLocationDialogComponent', () => {
    let component: EditSubVenueDialogComponent;
    let fixture: ComponentFixture<EditSubVenueDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [EditSubVenueDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(EditSubVenueDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
