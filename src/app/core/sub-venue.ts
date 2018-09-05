export class SubVenue {
    _id: string;
    private _sessionId?: string;
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }
}
