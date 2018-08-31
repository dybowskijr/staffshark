import { Certification } from "./certification";

export class Role {
    private static nextId: number;

    private _id?: string;
    private _name: string;
    private _shortName: string;
    requiredCertifications: Certification[];

    constructor(name: string, shortName: string, requiredCertifications: Certification[]) {

    }}
