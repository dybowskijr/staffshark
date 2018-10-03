import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionSubVenueDisplayComponent } from './session-sub-venue-display.component';

describe('SessionSubVenueDisplayComponent', () => {
  let component: SessionSubVenueDisplayComponent;
  let fixture: ComponentFixture<SessionSubVenueDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionSubVenueDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionSubVenueDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
