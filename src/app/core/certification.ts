export class Certification {

    private _id?: string;
    name: string;
    shortName: string;
    fullName: string;

    constructor(name: string, shortName: string, fullName: string) {
        this.name = name;
        this.shortName = shortName;
        this.fullName = fullName;
    }



    
}