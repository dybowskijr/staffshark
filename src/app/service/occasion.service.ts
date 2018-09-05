import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Session } from '../core/session';
import { Occasion } from '../core/occasion';
import { SubVenue } from '../core/sub-venue';

@Injectable({
  providedIn: 'root'
})
export class OccasionService {

    private _occasions: Occasion[];

  constructor() {
      this._occasions = this.mockOccasion();
      
   }


    getOccasion(id: string): Observable<Occasion> {  // for now, only return the mock
        return of( this._occasions.find(() => true));
    }

    private mockOccasion(): Occasion[] {
        let subVenues = [new SubVenue("Pool"), new SubVenue("Admin Desk")];
        let sessions = [new Session("Friday Evening", subVenues), new Session("Saturday Morning")];
        return [ new Occasion("Polar Bear", sessions)];
    }
}
