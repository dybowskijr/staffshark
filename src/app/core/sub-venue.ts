import { Placement } from './placement';

export class SubVenue {
    private static nextId = 0;
    _id: string;
    private _name: string;
    private _diagram: string;
    placements: Placement[] = [];

    constructor(name: string, placements: Placement[], diagram?: string, id?: string) {
        this._name = name;
        this._diagram = diagram;
        if (placements) {
            this.placements = placements;
        }
        if (id) {
            this._id = id;
        } else {
            this._id = 'subVenue_' + SubVenue.nextId++;
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
