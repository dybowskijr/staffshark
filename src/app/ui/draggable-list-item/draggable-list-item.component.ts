import { Component, OnInit, Input } from '@angular/core';
import { StaffMember, AssignmentStatus } from '../../core/staff-member';

@Component({
    selector: 'app-draggable-list-item',
    templateUrl: './draggable-list-item.component.html',
    styleUrls: ['./draggable-list-item.component.css']
})
export class DraggableListItemComponent implements OnInit {

    @Input() staffMember: StaffMember;

    assignmentStatus = AssignmentStatus; // needed to pull enum into scope

    constructor() { }

    ngOnInit() {
    }

    isDraggable(): boolean {
        return this.staffMember && this.staffMember.assignmentStatus === this.assignmentStatus.Available;
    }

    dragstart_handler(ev) {
        // console.log("dragStart");
        // Add the target element's id to the data transfer object
        ev.dataTransfer.setData('text/plain', ev.target.id);
    }
}
