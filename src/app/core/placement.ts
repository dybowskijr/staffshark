export class Placement {

    private _id: string;
    coordinates: Coordinates;
    displayName: string;
    shortName: string;

    private static nextId: number = 0;

    constructor(displayName: string, shortName: string, x: number, y: number) {
        this.displayName = displayName;
        this.shortName = shortName;
        this.coordinates = new Coordinates(x, y);
        this._id = 'placement_' + Placement.nextId.toString();
        Placement.nextId++;
    }
}

export class Coordinates {
    x: number;
    y: number;
    z: number;

    constructor(x: number, y: number, z: number = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}
