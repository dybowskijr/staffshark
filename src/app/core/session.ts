import { SubVenue } from './sub-venue';

export class Session {
    private static nextId = 0;

    _id: string;
   //  _occasionId?: string; // debating on having parent ref at all, may be easier than having parent have array of all children
    _subVenues: SubVenue[] = [];
    name: string;

    constructor(name: string, subVenues?: SubVenue[]) {
        this.name = name;
        if (subVenues) {
            this._subVenues = subVenues;
        }
        this._id = 'session_' + Session.nextId++;
    }

    get subVenues(): SubVenue[] {
        return this._subVenues;
    }

}
