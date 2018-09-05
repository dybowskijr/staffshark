import { Component, OnInit, Input } from '@angular/core';
import { Placement } from '../../core/placement';
import { PlacementService } from '../../service/placement.service';
import { MatDialog } from '@angular/material';
import { AddTypeDialogComponent } from '../add-type-dialog/add-type-dialog.component';
import { WizardDialogComponent } from '../wizard-dialog/wizard-dialog.component';
import { SessionSubVenue } from '../../core/session-sub-venue';

@Component({
    selector: 'app-venue-position-layout',
    templateUrl: './venue-position-layout.component.html',
    styleUrls: ['./venue-position-layout.component.css']
})
export class VenuePositionLayoutComponent implements OnInit {

    @Input() sessionSubVenue: SessionSubVenue;

    private _placements: Placement[];

    constructor(private placementService: PlacementService, public dialog: MatDialog) { }

    ngOnInit() {
        this.placementService.getPlacements().subscribe(
            placements => { this._placements = placements; },
            error => { console.log(error); },
            () => { }
        );
    }

    addLocation(ev: Event) {
        const dialogRef = this.dialog.open(AddTypeDialogComponent, {
            height: '200px',
            width: '300px',
            data: {type: 'Location'}
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('Closed Dialog: result = ' + result);
            this._placements.push(new Placement(result, result, 300, 500));

        });
    }

    openWizard(ev: Event) {
        const dialogRef = this.dialog.open(WizardDialogComponent, {
            height: '400px',
            width: '500px',
            data: { type: 'Location' }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('Closed Dialog: result = ' + JSON.stringify(result));
           // this._placements.push(new Placement(result, result, 300, 500));

        });
     }

    get placements(): Placement[] {
        return this._placements;
    }

    drop_handler(ev) {
        ev.preventDefault();
        // Get the id of the target and add the moved element to the target's DOM
        const dropId = ev.dataTransfer.getData('text/plain');
        // console.log("x from dataTransfer: " + ev.dataTransfer.getData("text/x"));

        // console.log("dropId: " + dropId);

        if (dropId.split('_')[0] === 'placement') {
            // let placementView = document.getElementById(dropId);
            const venueView = document.getElementById('venue_0');
           // console.log("this is a placement -- x: " + ev.offsetX);
            // console.log("venueView params: " + venueView.clientWidth + '/' +  venueView.clientHeight);

            // current mouse location (in venue_# div) - drag start mouse position offset from draggable's top/left
            const top = ev.offsetY - ev.dataTransfer.getData('text/y');
            const left = ev.offsetX - ev.dataTransfer.getData('text/x');
            if(top >= 0 && top <= venueView.clientHeight && left >= 0 && left <= venueView.clientWidth) {
                const placement = this._placements.find(p => p.id === dropId);
                placement.coordinates.x = left;
                placement.coordinates.y = top;
            }
        }
    }

    dragover_handler(ev) {
        ev.preventDefault();
        // Set the dropEffect to move
        ev.dataTransfer.dropEffect = 'move';
    }

}
