import { Injectable } from '@angular/core';
import { Certification } from '../core/certification';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CertificationService {

    private _certifications: Certification[];

  constructor() {
      this._certifications = this.mockCertifications();
   }

   getCertifications(): Observable<Certification[]> {
       return of(this._certifications);
   }

    private mockCertifications(): Certification[] {
        return [ 
            new Certification('Referee', 'REF', 'Referee'),
            new Certification('Starter', 'SR', 'Starter'),
            new Certification('Stroke/Turn', 'ST', 'Stroke and Turn Judge'),
            new Certification('Admin', 'AO', 'Administrative Official')
        ];
    }


}
