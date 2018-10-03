import { Certification } from './certification';

export class Role {
    private static nextId = 0;

    private _id: number;

    private _name: string;
    private _displayName: string;

    requiredCertifications: Certification[];

    constructor(name: string, displayName: string, requiredCertifications: Certification[]) {
        this._id = Role.nextId++;
        this._name = name;
        this._displayName = displayName;
        this.requiredCertifications = requiredCertifications;
    }

    public get id(): string {
        return 'role_' + this._id.toString();
    }

    public get displayName(): string {
        return this._displayName;
    }
    public set displayName(value: string) {
        this._displayName = value;
    }

    public get requiresCertifications(): boolean {
        return this.requiredCertifications && this.requiredCertifications.length > 0;
    }

}
