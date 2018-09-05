import { Injectable } from '@angular/core';
import { Session } from '../core/session';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SessionService {

    private _sessions: Session[];

    constructor() { }

    getSessions(): Observable<Session[]> {
        return of(this._sessions);
    }



}
