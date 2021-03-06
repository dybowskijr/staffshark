import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Session } from '../core/session';
import { Occasion } from '../core/occasion';
import { SubVenue } from '../core/sub-venue';
import { PlacementService } from './placement.service';
import { Placement } from '../core/placement';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class OccasionService {

    private _occasions: Occasion[];

  constructor(private placementService: PlacementService, private jsonPipe: JsonPipe ) {
      this._occasions = this.mockOccasion();

   }


    getOccasion(id: string): Observable<Occasion> {  // for now, only return the mock
        return of( this._occasions.find(() => true));
    }

    getMyOccasions(userid: string): Observable<Occasion[]> {
        return of( this._occasions);
    }

    private mockOccasion(): Occasion[] {

        const placements = [
            new Placement('Turn 1/2', 'Turn 1/2', 500, 20),
            new Placement('Turn 3/4', 'Turn 3/4', 500, 120),
            new Placement('Turn 5/6', 'Turn 5/6', 500, 220),
            new Placement('Start 1/2', 'Start 1/2', 20, 20),
            new Placement('Start 3/4', 'Start 3/4', 20, 120),
            new Placement('Start 5/6', 'Start 5/6', 20, 220)
        ];

        const placements3: Placement[] = [];

        for(const placement of placements) {
            placements3.push(placement.clone());
        }

        const placements2 = [
            new Placement('Starter', 'Starter', 100, 200),
            new Placement('Ref', 'Referee', 300, 200),
            new Placement('OOF', 'Order of Finish', 500, 200)
        ];

        const subVenues = [new SubVenue('Pool', placements, '/assets/images/basic-pool.png'), new SubVenue('Deck Crew', placements2)];
        const subVenues2 = [new SubVenue('Pond', placements3)];
        const sessions = [new Session('Friday Evening', subVenues), new Session('Saturday Morning', subVenues2)];
        return [ new Occasion('Polar Bear', sessions), new Occasion('Frenzy', sessions)];
    }
}
