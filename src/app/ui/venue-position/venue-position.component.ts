import { Component, OnInit, Input } from '@angular/core';
import { StaffMember, AssignmentStatus } from '../../core/staff-member';
import { Role } from '../../core/role';
import { StaffingService } from '../../service/staffing.service';
import { Placement } from '../../core/placement';
import { RoleService } from '../../service/role.service';

@Component({
    selector: 'app-venue-position',
    templateUrl: './venue-position.component.html',
    styleUrls: ['./venue-position.component.css']
})
export class VenuePositionComponent implements OnInit {

    @Input() placement: Placement;

    private _assignee?: StaffMember = null;
    private _role?: Role = null;

    assignmentStatus = AssignmentStatus;

    constructor(private staffingService: StaffingService, private roleService: RoleService) { }

    ngOnInit() {
    }

    isQualified(): boolean {
        let retval = true;  // role must be assigned and staff must be assigned
        if (this._role && this._assignee && this._role.requiredCertifications && this._role.requiredCertifications.length > 0) {
            retval = this._assignee.isQualified(this._role.requiredCertifications);
        }
        return retval;
    }

    dragover_handler(ev) {
        ev.preventDefault();
       // const dragId = ev.dataTransfer.getData('text/plain');
        ev.dataTransfer.dropEffect = 'move';
        // console.log('dragover: ' + ev.dataTransfer.dropEffect  + '; role: ' + JSON.stringify(this._role));
        // if (dragId.split('_')[0] === 'staffmember') {
        //     this.staffingService.getStaffMember(dragId).subscribe(
        //         sm => {
        //             ev.dataTransfer.dropEffect = (this._role == null || sm.isQualified(this._role.requiredCertifications))
        //                 ? 'move' : 'none';
        //             console.log('subscribe sm: ' + JSON.stringify(this._role) + '; role: ' + JSON.stringify(this._role));

        //         }
        //     );
        // }
    }

    dragend_handler(ev) {
        ev.preventDefault();
        const diffX = parseInt(ev.screenX, 10) - parseInt(ev.dataTransfer.getData('text/screenx'), 10);
        const diffY = parseInt(ev.screenY, 10) - parseInt(ev.dataTransfer.getData('text/screeny'), 10);
        const elem = document.getElementById(ev.dataTransfer.getData('text/plain'));
        const top = parseInt(ev.dataTransfer.getData('text/top'), 10);
        const left = parseInt(ev.dataTransfer.getData('text/left'), 10);
        elem.style.top = (top + diffY).toString() + 'px';
        elem.style.left = (left + diffX).toString() + 'px';
    }

    dragstart_handler(ev) {
        console.log('Location - dragStart: ' + ev.offsetX + '/' + ev.offsetY);
        const elem = document.getElementById(ev.target.id);
        ev.dataTransfer.setData('text/plain', ev.target.id);
        ev.dataTransfer.setData('text/top', elem.style.top);
        ev.dataTransfer.setData('text/left', elem.style.left);
        ev.dataTransfer.setData('text/screenx', ev.screenX);
        ev.dataTransfer.setData('text/screeny', ev.screenY);
    }

    drop_handler(ev) {
        ev.preventDefault();
        // Get the id of the target and add the moved element to the target's DOM
        const dropId = ev.dataTransfer.getData('text/plain');
        console.log('Drop: ' + dropId);
        // ev.target.appendChild(document.getElementById(data));
        // TODO: may need to differentiate role/location/staffer
        if (dropId.split('_')[0] === 'staffmember') {
            this.staffingService.getStaffMember(dropId).subscribe(
                sm => {sm.assignmentStatus = AssignmentStatus.Assigned;
                    this._assignee = sm;
                    }
            );
        } else if (dropId.split('_')[0]) {
            this.roleService.getRole(dropId).subscribe(
                role => {
                    this._role = role;
                }
            );
        }
    }

    get assignee(): StaffMember {
        return this._assignee;
    }

    get role(): Role {
        return this._role;
    }

    private clear() {
        if (this._assignee) {
            this._assignee.assignmentStatus = AssignmentStatus.Available;
            this._assignee = null;
        }
        if (this._role) {
            this._role = null;
        }
    }

    deleteClick(): void {
        this.clear();
    }
}
