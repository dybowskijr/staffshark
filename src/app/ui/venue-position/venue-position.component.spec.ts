import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenuePositionComponent } from './venue-position.component';

describe('PositionComponent', () => {
    let component: VenuePositionComponent;
    let fixture: ComponentFixture<VenuePositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [VenuePositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(VenuePositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
