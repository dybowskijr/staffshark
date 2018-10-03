import { Component, OnInit } from '@angular/core';
import { Role } from '../../core/role';
import { RoleService } from '../../service/role.service';
import { MatDialog } from '@angular/material';
import { AddRoleDialogComponent } from '../add-role-dialog/add-role-dialog.component';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {

    private _roles: Role[];

  constructor(private roleService: RoleService, public dialog: MatDialog) { }

  ngOnInit() {
      this.roleService.getRoles().subscribe(
          roles => { this._roles = roles; },
          error => { console.log(error); },
          () => { }
      );
  }
    public get roles(): Role[] {
        return this._roles;
    }

    addRole(): void {
        const dialogRef = this.dialog.open(AddRoleDialogComponent);
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this._roles.push(new Role(result.roleName, result.roleName, result.acceptableCerts));
                console.log('out: ' + JSON.stringify(result));
            }
        });
    }

}
