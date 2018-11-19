import { Session } from './session';
import { SubVenue } from './sub-venue';

export class Occasion {  // this is the meet, match tournament, etc
    private static nextId: 0;

    _id: string;
    private _name: string;
    _sessions: Session[];
    _subVenueSet: SubVenue[];  // available SubVenues pool 1, pool 2, field 1, field 2, etc


    constructor(name: string, sessions?: Session[], subVenueSet?: SubVenue[]) {
        this._sessions = sessions;
        this._subVenueSet = subVenueSet;
        this._name = name;
        this._id = 'occasion_' + Occasion.nextId++;
    }


}
