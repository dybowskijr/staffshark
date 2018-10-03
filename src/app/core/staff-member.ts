import { Certification } from './certification';


export enum AssignmentStatus {Unavailable, Available, Assigned};

export class StaffMember {

    private static  nextId = 1;
    private _id?: string;
    name: string;
    displayName: string;
    private _certifications?: Certification[];
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

    hasCertifications(): boolean {
        return this.certifications && this.certifications.length > 0;
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

    getCertShortList(): string {
        let retVal = 'None';
        if(this._certifications) {
            retVal = this._certifications.map( cert => cert.shortName).join(', ');
        }
        return retVal;
    }

}
