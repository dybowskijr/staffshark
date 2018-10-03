import { Component, OnInit, Input } from '@angular/core';
import { Role } from '../../core/role';

@Component({
    selector: 'app-role-list-item',
    templateUrl: './role-list-item.component.html',
    styleUrls: ['./role-list-item.component.css']
})
export class RoleListItemComponent implements OnInit {

    @Input() role: Role;

    constructor() { }

    ngOnInit() {
    }

    dragstart_handler(ev) {
        // console.log("dragStart");
        // Add the target element's id to the data transfer object
        ev.dataTransfer.setData('text/plain', ev.target.id);
    }

    getCertShortList(): string {
        let retVal = 'None';
        if (this.role.requiredCertifications) {
            retVal =  this.role.requiredCertifications.map(cert => cert.shortName).join(', ');
        }
        return retVal;
    }
}
