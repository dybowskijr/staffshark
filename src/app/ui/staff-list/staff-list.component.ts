import { Component, OnInit } from '@angular/core';
import { StaffingService } from '../../service/staffing.service';
import { StaffMember } from '../../core/staff-member';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit {

    private _staff: StaffMember[];

  constructor(private staffingService: StaffingService) {

   }

  ngOnInit() {
      this.staffingService.getStaff().subscribe(
          staff => {this._staff = staff},
          error => {console.log(error)},
          () => {}
      );
    }
    public get staff(): StaffMember[] {
        return this._staff;
    }

}
