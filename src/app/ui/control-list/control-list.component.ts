import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { OccasionService } from 'src/app/service/occasion.service';
import { Occasion } from 'src/app/core/occasion';
import { MatSelectChange } from '@angular/material';
import { Session } from 'src/app/core/session';
import { SubVenue } from 'src/app/core/sub-venue';

@Component({
  selector: 'app-control-list',
  templateUrl: './control-list.component.html',
  styleUrls: ['./control-list.component.css']
})
export class ControlListComponent implements OnInit {

    @Output() selectedSubVenue: EventEmitter<SubVenue> = new EventEmitter();


    private _occasions: Occasion[];
    private _occasion: Occasion = null;
    private _session: Session;
    private _subVenue: SubVenue;

    private _occasionId: string;
    private _sessionId: string;
    private _subVenueId: string;

    constructor(private occasionService: OccasionService) {
    }

    ngOnInit() {
        this.occasionService.getMyOccasions('').subscribe(occasions => {
            this._occasions = occasions;
            this._occasion = this._occasions[0];
            this._session = this._occasions[0]._sessions[0];
        });
    }

    occasionChange(event: MatSelectChange) {
        this._occasion = this._occasions.find(o => o._id === event.value);
        console.log('occasion: ' + event.value);
    }

    sessionChange(event: MatSelectChange) {
        this._session = this._occasion.getSession(event.value);
        console.log('session: ' + event.value);
    }

    subVenueChange(event: MatSelectChange) {
        this._subVenue = this._session.getSubVenue(event.value);
        console.log('subVenueId lookup: ' + event.value + '; retrieved subVenue: ' + this._subVenue.toString());
        this.selectedSubVenue.emit(this._subVenue);
    }
}
