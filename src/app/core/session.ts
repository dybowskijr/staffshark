import { SubVenue } from "./sub-venue";

export class Session {

    _id: string;
    _occasionId?: string; // debating on having parent ref at all, may be easier than having parent have array of all children
    private _subVenues: SubVenue[] = [];
    name: string;
    private static nextId: number = 0;

    constructor(name: string, subVenues?: SubVenue[]) {
        this.name = name;
        this._subVenues = subVenues;
        this._id = "session_" + Session.nextId++;
    }

    get subVenues(): SubVenue[] {
        return this._subVenues;
    }


}
