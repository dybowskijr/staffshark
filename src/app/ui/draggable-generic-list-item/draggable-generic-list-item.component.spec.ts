import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggableGenericListItemComponent } from './draggable-generic-list-item.component';

describe('DraggableGenericListItemComponent', () => {
  let component: DraggableGenericListItemComponent;
  let fixture: ComponentFixture<DraggableGenericListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraggableGenericListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraggableGenericListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
