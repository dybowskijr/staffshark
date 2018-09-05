import { Session } from './session';
import { SubVenue } from './sub-venue';
import { Observable, of } from 'rxjs';

export class Occasion {  // this is the meet, match tournament, etc
    private static nextId: 0;

    _id: string;
    private _name: string;
    _sessions: Session[];
    _subVenues: string[];  // available SubVenues (should be a 1+ for this Occasion)


    constructor(name: string, sessions?: Session[], subVenues?: SubVenue[]) {
        this._sessions = sessions;
        this._subVenues = [];
        this._name = name;
        this._id = 'occasion_' + Occasion.nextId++;
    }


}
