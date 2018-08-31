export class Placement {

    private _id: string;
    coordinates: Coordinates;
    displayName: string;
    shortName: string;

    constructor(displayName: string, shortName: string, x: number, y: number) {
        this.displayName = displayName;
        this.shortName = shortName;
        this.coordinates = new Coordinates(x, y);
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
