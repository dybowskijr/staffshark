import { Component, OnInit } from '@angular/core';
import { StaffMember } from '../../core/staff-member';
import { Role } from '../../core/role';
import { StaffingService } from '../../service/staffing.service';
import { Placement } from '../../core/placement';

@Component({
    selector: 'app-position',
    templateUrl: './position.component.html',
    styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {

    private _assignee?: StaffMember = null;
    private _location?: Placement = null;
    private _role?: Role = null;

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
            sm => {this._assignee = sm}
        );
    }

    get assignee(): StaffMember {
        return this._assignee;
    }

}
