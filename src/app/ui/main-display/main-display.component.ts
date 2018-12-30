import { Component, OnInit } from '@angular/core';
import { Session } from '../../core/session';
import { Occasion } from '../../core/occasion';
import { OccasionService } from '../../service/occasion.service';
import { MatTabChangeEvent, MatDialog } from '@angular/material';
import { AddSessionDialogComponent } from '../add-session-dialog/add-session-dialog.component';
import { AddLocationDialogComponent } from '../add-location-dialog/add-location-dialog.component';
import { SubVenue } from '../../core/sub-venue';
import { ControlListComponent } from '../control-list/control-list.component';

@Component({
    selector: 'app-main-display',
    templateUrl: './main-display.component.html',
    styleUrls: ['./main-display.component.css']
})
export class MainDisplayComponent implements OnInit {


    //  TODO: make sure tab is set to the added session tab.
    private _occasion: Occasion;
    selectedSession: number;

    constructor(private occasionService: OccasionService, public dialog: MatDialog) {
    }

    ngOnInit() {
        this.occasionService.getOccasion('changeme').subscribe(o => {
            this._occasion = o; this.selectedSession = 0; });
    }

    get sessions(): Session[] {
        return this._occasion._sessions;
    }

    addSessionClick(event: MatTabChangeEvent): void {
        console.log('Session Tab: ' + this.selectedSession + 'Event.tab: ' + event.tab.position);
        if (event.tab.textLabel === 'Add Session') {
            const dialogRef = this.dialog.open(AddSessionDialogComponent);
            dialogRef.afterClosed().subscribe(result => {
                if (result) {
                    this._occasion._sessions.push(new Session(result.sessionName));
                    this.selectedSession = 0; // TODO: tab count not the same as occasions
                }
            });
        }
    }

    addSubVenueClick(event: MatTabChangeEvent): void {
        if (event.tab.textLabel === 'Add Location') {
            const dialogRef = this.dialog.open(AddLocationDialogComponent);
            dialogRef.afterClosed().subscribe(result => {
                if (result) {
                    this._occasion._sessions[0]._subVenues.push(new SubVenue(result.locationName, null));
                }
            });
        }
    }
}
