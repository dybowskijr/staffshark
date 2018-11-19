import { Component, OnInit, Input, Inject, EventEmitter, Output } from '@angular/core';
import { StaffMember, AssignmentStatus } from '../../core/staff-member';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { StaffMemberDialogComponent } from '../staff-member-dialog/staff-member-dialog.component';

@Component({
    selector: 'app-draggable-list-item',
    templateUrl: './draggable-list-item.component.html',
    styleUrls: ['./draggable-list-item.component.css']
})
export class DraggableListItemComponent implements OnInit {

    @Input() staffMember: StaffMember;
    @Output() delete: EventEmitter<any> = new EventEmitter();

    assignmentStatus = AssignmentStatus; // needed to pull enum into scope

    constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) { }

    ngOnInit() {
    }

    isDraggable(): boolean {
        return this.staffMember && this.staffMember.assignmentStatus === this.assignmentStatus.Available;
    }

    dragstart_handler(ev) {
        // Add the target element's id to the data transfer object
        ev.dataTransfer.setData('text/plain', ev.target.id);
    }

    editStaffMemberClick() {
        console.log('editStaffMemberClick() called!');
        const dialogRef = this.dialog.open(StaffMemberDialogComponent, { data: { staffMember: this.staffMember.clone() } });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.staffMember.update(result.displayName, result.displayName, result.certifications);
                console.log('out: ' + JSON.stringify(result));
            }
        });
    }

    deleteStaffMemberClick() {
        console.log('Click Start');
        this.delete.emit(this.staffMember);
    }
}
