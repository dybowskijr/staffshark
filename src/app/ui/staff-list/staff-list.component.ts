import { Component, OnInit } from '@angular/core';
import { StaffingService } from '../../service/staffing.service';
import { StaffMember } from '../../core/staff-member';
import { MatDialog, MatDialogRef } from '@angular/material';
import { StaffMemberDialogComponent } from '../staff-member-dialog/staff-member-dialog.component';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit {

    private _staff: StaffMember[];

  constructor(private staffingService: StaffingService, public dialog: MatDialog) {

   }

  ngOnInit() {
      this.staffingService.getStaff().subscribe(
          staff => {this._staff = staff; },
          error => {console.log(error); },
          () => {}
      );
    }
    public get staff(): StaffMember[] {
        return this._staff;
    }

    addStaffMemberClick(): void {
        const dialogRef = this.dialog.open(StaffMemberDialogComponent);
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this._staff.push(new StaffMember(result.displayName, result.displayName, result.certifications));
                console.log('out: ' + JSON.stringify(result));
            }
        });
    }
    deleteStaffMember(e) {
        this._staff.splice(this._staff.indexOf(e), 1);
    }

}
