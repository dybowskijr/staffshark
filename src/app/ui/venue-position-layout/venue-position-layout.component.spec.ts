import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenuePositionLayoutComponent } from './venue-position-layout.component';

describe('PositionLayoutComponent', () => {
  let component: VenuePositionLayoutComponent;
  let fixture: ComponentFixture<VenuePositionLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenuePositionLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenuePositionLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
