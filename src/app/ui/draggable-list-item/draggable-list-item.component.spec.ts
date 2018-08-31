import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggableListItemComponent } from './draggable-list-item.component';

describe('DraggableListItemComponent', () => {
  let component: DraggableListItemComponent;
  let fixture: ComponentFixture<DraggableListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraggableListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraggableListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
