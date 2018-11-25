import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Placement } from '../../core/placement';
import { MatDialog } from '@angular/material';
import { SubVenue } from '../../core/sub-venue';
import { AddLocationDialogComponent } from '../add-location-dialog/add-location-dialog.component';
import { EditSubVenueDialogComponent } from '../edit-subvenue-dialog.component/edit-subvenue-dialog.component';

@Component({
    selector: 'app-venue-position-layout',
    templateUrl: './venue-position-layout.component.html',
    styleUrls: ['./venue-position-layout.component.css']
})
export class VenuePositionLayoutComponent implements OnInit {

    @Input() subVenue: SubVenue;

    bgImage = '';

    constructor(public dialog: MatDialog) { }

    ngOnInit() {

        if (this.subVenue.diagram) {
            this.bgImage = 'url(' + this.subVenue.diagram + ')';
        }
    }

    addPosition(ev: Event) {
        const dialogRef = this.dialog.open(AddLocationDialogComponent, {
            height: '200px',
            width: '300px'
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.subVenue.placements.push(new Placement(result.locationName, result.locationName, 300, 400));
            }
        });
    }

    drop_handler(ev) {
        ev.preventDefault();
    }

    dragover_handler(ev) {
        ev.preventDefault();
        // Set the dropEffect to move
        ev.dataTransfer.dropEffect = 'move';
    }

    deletePlacement(e) {
        this.subVenue.placements.splice(this.subVenue.placements.indexOf(e), 1);
    }

    editSubVenue(ev: Event) {
        const dialogRef = this.dialog.open(EditSubVenueDialogComponent, {
            height: '300px',
            width: '300px'
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.subVenue.name = result.name;
            }
        });
    }
}
