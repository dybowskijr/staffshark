import { Injectable } from '@angular/core';
import { Placement } from '../core/placement';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class PlacementService {

    private _placements: Placement[];

    constructor() {
        const prefixes = ['Start', 'Turn'];
        this._placements = this.mockPlacements();
        this.createLanePlacements(8, 2, prefixes, '/');
    }

    private mockPlacements(): Placement[] {
        return [
            new Placement('Turn 1/2', 'Turn 1/2', 500, 20),
            new Placement('Turn 3/4', 'Turn 3/4', 500, 120),
            new Placement('Turn 5/6', 'Turn 5/6', 500, 220),
            new Placement('Start 1/2', 'Start 1/2', 20, 20),
            new Placement('Start 3/4', 'Start 3/4', 20, 120),
            new Placement('Start 5/6', 'Start 5/6', 20, 220)
        ];
    }

    getPlacements(): Observable<Placement[]> {
        return of(this._placements);
    }

    createLanePlacements(lanes: number, over: number, namePrefixes: string[], divider: string ): Placement[] {
        const retVal: Placement[] = [];
        for (let p = 0; p < namePrefixes.length; p++) {
            for (let i = 0; i < lanes / over; i++) {
                const name = namePrefixes[p] + ' ' + ((i * over) + 1) + divider + ((i + 1) * over);
                console.log('createLanePlacements output: ' + name);
                retVal.push(new Placement(name,  name, 400, 20));
            }
        }
        return retVal;
    }
}
