import { Component, OnInit, Input, Inject, Output, EventEmitter } from '@angular/core';
import { Role } from '../../core/role';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { RoleDialogComponent } from '../role-dialog/role-dialog.component';

@Component({
    selector: 'app-role-list-item',
    templateUrl: './role-list-item.component.html',
    styleUrls: ['./role-list-item.component.css']
})
export class RoleListItemComponent implements OnInit {

    @Input() role: Role;
    @Output() delete: EventEmitter<any> = new EventEmitter();

    constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) { }

    ngOnInit() {
    }

    dragstart_handler(ev) {
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

    editRoleClick() {
        console.log('editRoleClick() called!');
        const dialogRef = this.dialog.open(RoleDialogComponent, { data: { role: this.role.clone() } });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.role.update(result.roleName, result.roleName, result.acceptableCerts);
                console.log(' edit Role closedout: ' + JSON.stringify(result));
            }
        });
    }
    deleteRoleClick() {
        this.delete.emit(this.role);
    }
}
