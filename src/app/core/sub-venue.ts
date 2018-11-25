import { Placement } from './placement';

export class SubVenue {
    _id: string;
    private _sessionId?: string;
    private _name: string;
    private _diagram: string;
    placements: Placement[] = [];

    constructor(name: string, placements: Placement[], diagram?: string) {
        this._name = name;
        this._diagram = diagram;
        if(placements) {
            this.placements = placements;
        }
    }

    get name(): string {
        return this._name;
    }

    get diagram(): string {
        return this._diagram;
    }

    set name(n: string) {
        this._name = n;
    }
}
