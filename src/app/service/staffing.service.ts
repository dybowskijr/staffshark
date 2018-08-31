import { Injectable } from '@angular/core';
import { StaffMember } from '../core/staff-member';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffingService {
    private _staffMembers: StaffMember[];
  constructor() {
      this._staffMembers =this.mockStaff(); 
   }

    public get staffMembers(): StaffMember[] {
        return this._staffMembers;
    }
    public set staffMembers(value: StaffMember[]) {
        this._staffMembers = value;
    }

    getStaff(): Observable<StaffMember[]> {
        return of(this._staffMembers);
    }

    getStaffMember(id: string): Observable<StaffMember> {
        return of(this._staffMembers.find(staffMember => staffMember.id == id));
    }


    private mockStaff(): StaffMember[] {
        return [
            new StaffMember('Dybowski, Dennis', 'Dennis D'),
            new StaffMember('John White', 'J Dub'),
            new StaffMember('Liz Garling', 'Liz G')
        ];
    }




}
