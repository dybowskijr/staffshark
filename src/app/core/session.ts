import { SubVenue } from './sub-venue';

export class Session {
    private static nextId = 0;

    _id: string;
    _subVenues: SubVenue[] = [];
    name: string;

    constructor(name: string, subVenues?: SubVenue[], id?: string) {
        this.name = name;
        if (subVenues) {
            this._subVenues = subVenues;
        }
        if (!id) {
            this._id = 'session_' + Session.nextId++;
        }
    }

    get subVenues(): SubVenue[] {
        return this._subVenues;
    }

    getSubVenue(id: string): SubVenue {
        return this._subVenues.find( sv => sv._id === id);
    }

}
