import { Role } from './role';
import { StaffMember } from './staff-member';

export class Placement {

    private static nextId = 0;
    private _id: number;
    private subVenueId?: string; // tie-back to 'parent'
    coordinates: Coordinates;
    displayName: string;
    shortName: string;
    private _roles: string[];
    private _assignees: string[];


    constructor(displayName: string, shortName: string, x: number, y: number) {
        this.displayName = displayName;
        this.shortName = shortName;
        this.coordinates = new Coordinates(x, y);
        this._id = Placement.nextId++;
    }

    get id(): string {
        return 'placement_' + this._id.toString();
    }

    addRole(id: string): void {
        this._roles.push(id); // TODO: may need to check for duplicate...
    }

    removeRole(id: string): void {
        this._roles = this._roles.filter(role => role !== id);
    }

    addStaffMember(id: string): void {
        this._assignees.push(id);  // TODO: may need to check for duplicate...
    }

    removeStaffMember(id: string): void {
        this._assignees = this._assignees.filter(role => role !== id);
    }
}





export class Coordinates {
    x: number;
    y: number;
    z: number;

    constructor(x: number, y: number, z: number = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}
