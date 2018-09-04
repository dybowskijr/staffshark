import { Component, OnInit, Input } from '@angular/core';
import { StaffMember, AssignmentStatus } from '../../core/staff-member';
import { Role } from '../../core/role';
import { StaffingService } from '../../service/staffing.service';
import { Placement } from '../../core/placement';

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


    constructor(private staffingService: StaffingService) { }

    ngOnInit() {
    }

    dragover_handler(ev) {
        ev.preventDefault();
        // Set the dropEffect to move
        ev.dataTransfer.dropEffect = "move";
    }

    drop_handler(ev) {
        ev.preventDefault();
        // Get the id of the target and add the moved element to the target's DOM
        let data = ev.dataTransfer.getData("text/plain");
        //ev.target.appendChild(document.getElementById(data));
        // TODO: may need to differentiate role/location/staffer
        this.staffingService.getStaffMember(data).subscribe(
            sm => {sm.assignmentStatus = AssignmentStatus.Assigned;
                   this._assignee = sm;
                }
        );
    }

    get assignee(): StaffMember {
        return this._assignee;
    }

}
