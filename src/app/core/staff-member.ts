import { Certification } from './certification';


export enum AssignmentStatus {Unavailable, Available, Assigned};

export class StaffMember {

    private static  nextId = 1;
    _id?: string;
    name: string;
    displayName: string;
    private _certifications: Certification[] = [];
    private _assignmentStatus: AssignmentStatus = AssignmentStatus.Available;

    constructor(name: string, displayName: string, certifications: Certification[] = null, id: string = null) {
        this.name = name;
        this.displayName = displayName;
        if (certifications && certifications.length > 0) {
            this._certifications = certifications;
        }
        this._id = StaffMember.nextId.toString();
        if (!id) {
            StaffMember.nextId++;
        } else {
            this._id = id;
        }
    }

    update(name: string, displayName: string, certifications: Certification[] | null) {
        this.name = name;
        this.displayName = displayName;
        this._certifications = certifications;
    }

    clone(): StaffMember {
        const clonedCerts = this._certifications.map(cert => cert.clone());
        return new StaffMember(this.name, this.displayName, clonedCerts, this._id);
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
        let retval = 'None';
        if (this._certifications && this._certifications.length > 0) {
            retval = this._certifications.map( cert => cert.shortName).join(', ');
        }
        return retval;
    }

    isQualified(requiredCertifications: Certification[]): boolean {
        let retval = false;
        if (requiredCertifications == null || requiredCertifications.length <= 0) {
            retval = true;

        } else {
            retval = this.certifications.some(cert => requiredCertifications.includes(cert));
        }
        return retval;
    }


}
