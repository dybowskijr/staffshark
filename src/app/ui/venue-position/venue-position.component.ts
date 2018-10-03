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

    dragover_handler(ev) {
        ev.preventDefault();
        // Set the dropEffect to move
        ev.dataTransfer.dropEffect = 'move';
    }

    dragstart_handler(ev) {
        console.log('Location - dragStart: ' + ev.offsetX + '/' + ev.offsetY);
        ev.dataTransfer.setData('text/plain', ev.target.id);
        ev.dataTransfer.setData('text/x', ev.offsetX);
        ev.dataTransfer.setData('text/y', ev.offsetY);

    }

    drop_handler(ev) {
        ev.preventDefault();
        // Get the id of the target and add the moved element to the target's DOM
        const dropId = ev.dataTransfer.getData('text/plain');
        // ev.target.appendChild(document.getElementById(data));
        // TODO: may need to differentiate role/location/staffer
        if(dropId.split('_')[0] === 'staffmember') {
            this.staffingService.getStaffMember(dropId).subscribe(
                sm => {sm.assignmentStatus = AssignmentStatus.Assigned;
                    this._assignee = sm;
                    }
            );
        } else if(dropId.split('_')[0]) {
            this.roleService.getRole(dropId).subscribe(
                role => {
               // role.assignmentStatus = AssignmentStatus.Assigned;
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
        if(this._assignee) {
            this._assignee.assignmentStatus = AssignmentStatus.Available;
            this._assignee = null;
        }
        if(this._role) {
            this._role = null;
        }
    }
}
