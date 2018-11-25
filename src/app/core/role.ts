import { Certification } from './certification';

export class Role {
    private static nextId = 0;

    private _id: number;

    private _name: string;
    private _displayName: string;

    requiredCertifications: Certification[] = [];

    constructor(name: string, displayName: string, requiredCertifications: Certification[] | null) {
        this._id = Role.nextId++;
        this._name = name;
        this._displayName = displayName;
        if (requiredCertifications) {
            this.requiredCertifications = requiredCertifications;
        }
    }

    clone(): Role {
        const clonedCerts: Certification[] = this.requiredCertifications.map( c => c.clone());
        return new Role(this._name, this._displayName, clonedCerts);
    }

    update(name: string, displayName: string, requiredCertifications: Certification[] | null) {
        this._name = name;
        this._displayName = displayName;
        this.requiredCertifications = (requiredCertifications) ? requiredCertifications : [];
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
