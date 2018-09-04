import { Certification } from "./certification";


export enum AssignmentStatus {Unavailable, Available, Assigned};

export class StaffMember {

    private _id?: string;
    name: string;
    displayName: string;
    private _certifications?: Certification[];
    private static  nextId: number = 1;
    private _assignmentStatus: AssignmentStatus = AssignmentStatus.Available;

    constructor(name: string, displayName: string, certifications: Certification[] = null) {
        this.name = name;
        this.displayName = displayName;
        this.certifications = certifications;
        this._id = StaffMember.nextId.toString();
        StaffMember.nextId++;
    }

    public get certifications(): Certification[] {
        return this._certifications;
    }
    public set certifications(value: Certification[]) {
        this._certifications = value;
    }

    get id(): string {
        return 'staffmember_' + this._id;
    }

    get assignmentStatus(): AssignmentStatus {
        return this._assignmentStatus;
    }

    set assignmentStatus(assignmentStatus: AssignmentStatus) {
        this._assignmentStatus = assignmentStatus;
    }

}
