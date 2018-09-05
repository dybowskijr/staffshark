import { Placement } from './placement';

export class SessionSubVenue {
    private _session: string;
    private _subVenue: string;
    private _positions: Placement[];

    constructor(session: string; subVenue: string) {
        this._session = session;
        this._subVenue = subVenue;
    }

    get id(): string {
        return this._session + '_' + this._subVenue;
    }

    get session(): string {
        return this._session;
    }

    get subVenue(): string {
        return this._subVenue;
    }
}
