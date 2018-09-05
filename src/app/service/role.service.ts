import { Injectable } from '@angular/core';
import { Certification } from '../core/certification';
import { Role } from '../core/role';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RoleService {

    private _roles: Role[];

    constructor() {
        this._roles = this.mockRoles();
    }

    mockRoles(): Role[] {
        return [ 
            new Role("Starter", "Starter", null),
            new Role("Stroke/Turn", "Stroke/Turn", null),
            new Role("Referee", "Referee", null)
        ];
    }

    getRoles(): Observable<Role[]> {
        return of(this._roles);
    }

    getRole(id: string): Observable<Role> {
        return of(this._roles.find(role => role.id == id));
    }



}
