import { Injectable } from '@angular/core';
import { Placement } from '../core/placement';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PlacementService {

    private _placements: Placement[];

    constructor() {
        this._placements = this.mockPlacements();
    }

    private mockPlacements(): Placement[] {
        return [
            new Placement("Turn 1/2", "Turn 1/2", 400, 20),
            new Placement("Turn 3/4", "Turn 3/4", 400, 40),
            new Placement("Turn 5/6", "Turn 5/6", 400, 60),
            new Placement("Turn 7/8", "Turn 7/8", 400, 80)
        ]
    }

    getPlacements(): Observable<Placement[]> {
        return of(this._placements);
    }

}
